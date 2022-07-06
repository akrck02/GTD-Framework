
/**
 * Environment states
 */
export enum ENVIRONMENT {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
}

/**
 * Configuration for the application
 */
export class Config {

    //global runtime configurations
    public static BASE = {
        APP_NAME: "Gtdf-App",
        APP_VERSION: "v.x.x",
        HOST: "127.0.0.1",
        PORT: 80,
        URL: location.href,
        ENVIRONMENT: ENVIRONMENT.DEVELOPMENT,
        DEBUG: true,
        LOG_LEVEL: "debug",
        LOG_FILE: "app.log",
        WEBSITE : "https://akrck02.github.io/#/software/GTD-Framework"
    };

    public static PATHS = {
        APP : "../app/",
        ROOT : "../frontend/",
        LOGS : "../frontend/logs/",
        RESOURCES : "../resources/",
        IMAGES : "../resources/images/",
        ICONS : "../resources/icons/",
    };

    public static VIEWS = {
        BASE_URL: "../app/#/",
        HOME: "../app/#/home/",
        ERROR: "../app/#/error/",
    };

    public static API = {
        URL : "http://127.0.0.1:3333/api/v1/",
        PING : "http://127.0.0.1:3333/api/v1/ping/",
    };


    /**
     * Set default configurations for the application
     */
     public static async setDefaultVariables() {

        if(Config.getConfigVariable("ANIMATIONS") == undefined) {
            this.addConfigVariable("ANIMATIONS",true);
        }
    }

    /**
     * Get application configurations
     * @returns the application configurations
     */
     public static getConfig() {
        let localStorageConfiguration = JSON.parse(localStorage.getItem(Config.BASE.APP_NAME + "-config"));

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
    public static addConfigVariable(key: string, value: any) {
        let localStorageConfiguration = Config.getConfig();
        const config = localStorageConfiguration;
        config[key] = value;
        localStorage.setItem(Config.BASE.APP_NAME + "-config", JSON.stringify(config));
    }

    /**
     * Get a configuration variable
     * @param key the name of the variable
     * @returns the value of the variable
     */
    public static getConfigVariable(key: string) : string{
        let localStorageConfiguration = this.getConfig();
        return localStorageConfiguration[key];
    }

}