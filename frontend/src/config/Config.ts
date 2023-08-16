import { getLanguage, Language } from "../lang/Language.js";
import { IObserver } from "../lib/gtdf/core/observable/Observer.js";

/**
 * Environment states
 */
export enum ENVIRONMENT {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
}


interface IVariables {
    animations : boolean;
    environment : ENVIRONMENT;
    language : string;
}

interface IBase {
    app_name : string;
    app_version : string;
    host : string;
    port : number;
    environment : ENVIRONMENT;
    debug : boolean;
    log_level : string;
    website : string;
    author : string;
}


interface IPath {
    url : string;
    app : string;
    resources : string;
    language : string;
    images : string;
    icons : string;
}

interface IViews {
    url : string;
    home : string;
    error : string;
    blank : string;
}

/**
 * Configuration for the application
 */
export class Configuration implements IObserver {

    private readonly CONFIG_FILE : string = "../gtdf.config.json";
    private static _instance: Configuration;

    Variables : IVariables = {
        animations : true,
        environment : ENVIRONMENT.DEVELOPMENT,
        language : Language.ENGLISH
    }

    Base : IBase = {
        app_name : "",
        app_version : "",
        host : "",
        port : 80,
        environment : ENVIRONMENT.DEVELOPMENT,
        debug : false,
        log_level : "",
        website : "",
        author : ""
    }

    Path : IPath = {
        url : "",
        app : "",
        resources : "",
        language : "",
        images : "",
        icons : ""
    }

    Views : IViews = {
        url : "",
        home : "",
        error : "",
        blank : ""
    }

    async update() {

        const config = await fetch(this.CONFIG_FILE).then((response) => response.json());
       
        
        this.Variables  = config.variables;
        this.Base       = config.base;
        this.Path      = config.path;
        this.Views      = config.views;

        for (const key in this.Path) {

            if(key == "url") {

                //if the last character is not a slash, add it
                if(this.Path[key][this.Path[key].length - 1] != "/") {
                    this.Path[key] = this.Path[key] + "/";
                }

                continue;
            }
           
            const element = this.Path[key];
                
            //if the last character is not a slash, add it
            if(element[element.length - 1] != "/") {
                this.Path[key] = element + "/";
            }

            this.Path[key] = this.Path.url + this.Path[key];
           
        }

        for (const key in this.Views) {
            const element = this.Views[key];
            
            if(key == "url") {
                
                //if the first character is not a slash, add it
                if(this.Views[key][0] != "/") {
                    this.Views[key] = "/" + this.Views[key];
                }

                //if the last character is not a slash, add it
                if(this.Views[key][this.Views[key].length - 1] != "/") {
                    this.Views[key] = this.Views[key] + "/";
                }
             
                continue;
            }

            //if the last character is not a slash, add it
            if(element[element.length - 1] != "/") {
                this.Views[key] = element + "/";
            }

            this.Views[key] = this.Views.url + this.Views[key];
        }
        
    }


    /**
     * Get a configuration instance
     */
    public static get instance(): Configuration {

        if (!this._instance) {
            this._instance = new Configuration();
        }

        return this._instance;
    }


    /**
     * Set default configurations for the application
     */
     public async setDefaultVariables() {

        if(this.getConfigVariable(this.Variables.animations) == undefined) {
            this.setAnimations(true);
        }

        if(this.getConfigVariable(this.Variables.language) == undefined) {
            this.setLanguage(getLanguage(navigator.language));
        }
    }

    /**
     * Get application configurations
     * @returns the application configurations
     */
     public getConfig() {
        let localStorageConfiguration = JSON.parse(localStorage.getItem(this.Base.app_name + "-config"));

        if(!localStorageConfiguration) {
            localStorageConfiguration = {}
        }

        return localStorageConfiguration;
    }

    /**
     * Add a configuration variable
     * @param key the name of the variable
     * @param value the value of the variable
     */
    public setConfigVariable(key: string, value: any) {
        let localStorageConfiguration = this.getConfig();
        const config = localStorageConfiguration;
        config[key] = value;
        localStorage.setItem(this.Base.app_name + "-config", JSON.stringify(config));
    }

    /**
     * Get a configuration variable
     * @param key the name of the variable
     * @returns the value of the variable
     */
    public getConfigVariable(key: string) : string{
        let localStorageConfiguration = this.getConfig();
        return localStorageConfiguration[key];
    }

    /**
     * Set animation for application on|off
     * @param on The boolean to set animations
     */
    public setAnimations(on : boolean){
        this.setConfigVariable(this.Variables.animations,on);
    }

    /**
     * Get if animations are enabled
     * @returns if animations are enabled
     */
    public areAnimationsEnabled() : boolean{
        return this.getConfigVariable(this.Variables.language) === "true";
    }

    /**
     * Set the application language
     */
    public setLanguage(lang : string) {
        this.setConfigVariable(this.Variables.language,lang);
    }

    /**
     * Get the current app language
     * @returns The app language
     */
    public getLanguage() : string {
        return getLanguage(this.getConfigVariable(this.Variables.language));
    }

}


export const Config = Configuration.instance;
