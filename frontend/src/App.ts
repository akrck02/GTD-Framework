import Router from "./views/Router.js";
import { getParametersByIndex } from "./lib/gtd/data/urltools.js";
import { TextBundle } from "./lang/TextBundle.js";
import { Config } from "./config/Config.js";

export default class App {

    private router : Router;

    /**
     * Create an instance of the application
     */
    constructor(){        
        this.router = new Router();
    }

    /**
     * Load the app state
     */
    load(){
        const params = getParametersByIndex(window.location.hash.slice(1).toLowerCase(),1);
        console.log("App loaded!");

        this.router.load(params);
    }


    /**
     * Get current language text bundle
     * @returns 
     */
     public static getBundle() : any {

        let lang = Config.getConfigVariable("LANG");
        
        if(!lang) {
            lang = navigator.language;
        }


        return TextBundle.get(lang);
    }

}


