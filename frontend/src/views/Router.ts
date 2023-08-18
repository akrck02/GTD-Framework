import { Config } from "../config/Config.js";
import { InitializeError } from "../errors/InitializeError.js";
import { UIComponent } from "../lib/gtdf/components/UIComponent.js";
import ErrorView from "./error/ErrorView.js";
import HomeView from "./home/HomeView.js";
export default class Router {

    private parent : HTMLElement;
    private container : UIComponent;

    constructor(){{

        this.parent = document.getElementById("view-container") as HTMLElement;
        
        //If no parent is present on the HTML file throws an error
        if(!this.parent){
            throw new InitializeError("view-container does not exist");
        }
        
        this.container = new UIComponent({
            type: "div",
            id: "view-container-box",
            styles: {
                width: "100%",
                height: "100%",
            },
        });

        this.container.appendTo(this.parent);
    }}

    /**
     * Load the app state with the given params
     * @param params The list of params
     */
    public load (params : string[]) {
        try{
            this.clear();

            switch (params[0]) {
                case undefined:
                case "":
                case "home":
                    new HomeView().show(params.splice(1), this.container);    
                    break;
                case "lang":
                    Config.setLanguage(params.splice(1)[0]);
                    location.href = Config.Views.home;
                    break;
                case "blank":
                    break;
                case "error":
                    new ErrorView().show(params.slice(1), this.container);
                    break;
                default:
                    new ErrorView().show(["404"], this.container);
            }

        } catch (error){
            console.error(error);
        }
    }

    /**
     * Clear the container
     */
    public clear() {
        this.container.element.innerHTML = "";
    }
}