import { Config, Configuration } from "../config/Config.js";
import { IObserver } from "../lib/gtdf/core/observable/Observer.js";
import { Language } from "./Language.js";


export class TextBundle implements IObserver {

    private static readonly AVAILABLE_BUNDLES = [
        "home",
    ];
    private static _instance : TextBundle;
    public bundle : any;

    private constructor() {}

    /**
     * Get the singleton instance of the class
     * @returns The singleton instance of the class
     */
    public static get instance() : TextBundle {
        
        if (!TextBundle._instance) {
            TextBundle._instance = new TextBundle();
        }

        return TextBundle._instance;
    }

    /**
     * Update the bundle with the current language
     */
    async update() {  
        this.bundle = {};
        for(let bundle of TextBundle.AVAILABLE_BUNDLES){
            this.bundle[bundle] = await fetch(`${Config.Path.language}${Config.getLanguage()}/${bundle}.json`).then(response => response.json());
        }
    }
}

export const Text : any = new Proxy(TextBundle.instance, {
    get: function(target, prop, receiver) {
        return target.bundle[prop] || "";        
    }
});
