import { CONFIG, PATHS, setUpConfigurations, VIEWS } from './config/config.js';
import Router from './views/router.js';

/**
 * Main application class
 */
class App {
    constructor() {
        console.log("App loaded");
    }

    public loadFromUrl(): void {
        const params = []; //getParametersByIndex(window.location.hash.slice(1).toLowerCase(),1);
    
        if(params[0] == ""){
            location.href = VIEWS.HOME;
            return;
        }
        
        Router.load(params);
    }

    public startCofigurations() {
        setUpConfigurations();
    }
    
}

/**
 * App entry points
 */
window.addEventListener('hashchange',() => new App().loadFromUrl());
window.onload = () => {
    const app = new App();
    app.startCofigurations();
    app.loadFromUrl();
}