import homeV from "./home/homeV.js";
import errorV from "./error/errorV.js";
import { CONFIG } from "../config/config.js";

export default class Router {
    /**
     * Load a view
     * @param {array} params
     */
    public static load = (params) => {
        switch (params[0]) {
            case undefined:
            case "":
            case "home":
                new homeV().show(params);
                break;
            case "error":
                new errorV().show(params);
                break;
            default:
                location.href = CONFIG.URL + "#/error/404/";
        }
    };

    /** show a view */
    public static show = (view, params) => {
        try {
            document.querySelector("main").innerHTML = "";
            view(params);
        } catch (error) {
            console.error(error);
            location.href = CONFIG.URL + "#/error/500";
        }
    };
}
