/**
 *  --------------------- READ ME PLEASE !!!! -------------------------
 *  This file sets the configuration of all the webapp so be careful 
 *  changing it. 
 * 
 */


export const configuration = {};
const host = "localhost";


/**
 * BASIC ROUTING INFO
 */
configuration.URL = "http://" + host;
configuration.REAL_URL = "http://" + host;
configuration.API = configuration.REAL_URL + "api/";

/**
 * BASIC APP INFO
 */
configuration.VERSION = "v0.1";
configuration.ENVIROMENT = "DEVELOPMENT";
configuration.TEST = true;

/**
 * RESOURCES HERE 
 */
configuration.RESOURCES = configuration.REAL_URL + "resources/";
configuration.ICONS = configuration.RESOURCES + "icons/";
configuration.FONTS = configuration.RESOURCES + "fonts/";
configuration.SOUNDS = configuration.RESOURCES + "sounds/";

