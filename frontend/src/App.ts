import Router from "./views/Router.js";
import  URLs from "./lib/gtdf/data/Urls.js";
import { Config } from "./config/Config.js";
import { Events, IEvents } from "./core/events/Events.js";
import Keyboard from "./core/events/Keyboard.js";
import NotificationUI, { NotificationProperties } from "./components/notifications/Notification.js";
import Initializer from "./core/Initializer.js";

/**
 * Class that represents the application frontend proccess
 * it can be intantiated more than once, but the classic 
 * web application structure wont need it.
 */
export default class App {

    private router : Router;
    private events : IEvents;
    private notification : NotificationUI;

    /**
     * Create an instance of the apjplication
     */
    constructor(){        
       
        this.router = new Router();
        this.events = Events;
        Keyboard.setEventListeners(this.events);

        // Set the notification element
        this.notification = new NotificationUI();
        document.body.appendChild(this.notification.element);
        this.setNoficationSystem();
    }

    /**
     * Load the app state with the given URL address
     * The URL get parsed to take the parameters in 
     * a list.
     * 
     * In the URL https://mydomain.org/#/object/123
     * the parameter list will be the following : [object,123]
     * 
     * The first parameter must be a view name, otherwise the 
     * app will redirect the user to an 404 error page.
     */
    async load(){
        await Initializer.subscribeInitializables();
        await Initializer.notify();

        const params = URLs.getParametersByIndex(window.location.hash.slice(1).toLowerCase(),1);
        this.router.load(params);
    }

    /**
     * Override the alert system  with a custom notification widget
     * to send notifications across the app without having to 
     * implement an external alert system,
     */
    private setNoficationSystem(){
        
        // Override the default notification function
        window.alert = (properties : NotificationProperties) => {
            this.notification.setContent(properties);
            this.notification.show(properties.time);

            // If the desktop notification are active 
            if(properties.desktop){

                new Notification(Config.Base.app_name ,{
                    icon: Config.Path.icons + "logo.svg",
                    body: properties.message,
                })
            }

        };

    }

}

