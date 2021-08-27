import homeV from './home/homeV';
import errorV from './error/errorV';
import { CONFIG } from '../config/config';

/**
 * Paths of the application
 */
 const PATHS = {
    home: (params : string[]) => show(homeV, params),
    error: (params : string[]) => show(errorV, params),
  };
  
  /** show a view */
  const show = (view , params) => {
    try {
      document.querySelector('main').innerHTML = "";
      view(params);
    } catch (error) {
      console.error(error);
      location.href = CONFIG.URL + "#/error/500";
    }
  };
  
  /**
   * Load a view
   * @param {array} params
   */
   export const load = (params) => {
      switch (params[0]) {
        case undefined:
        case "":
        case "home":
          PATHS.home(params);
          break;
        case "error":
          PATHS.error(params);
          break;
        default:
          location.href = CONFIG.URL + "#/error/404/";
      }
    };