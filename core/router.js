import { configuration } from "../config/config";
import { isLogged } from "./auth";

/**
 * Paths of the application
 */
 const PATHS = {
    home: (params) => show(homeView, params),
  };
  
  /**
   * Load a view
   * @param {array} params
   */
  export const load = (params) => {
    switch (params[0]) {
      case "home":
        PATHS.home(params);
        break;
      case undefined:
      case "":
      case "login":
        PATHS.login(params);
        break;
      case "error":
        PATHS.errors(params);
        break;
      default:
        location = configuration.URL + "error/404/";
    }
  };
  
  /**
   * Show a view
   * @param {view} view
   * @param {array} params
   */
  const show = (view, params) => {
    try{
      document.body.style.transition = "0s";
      document.body.style.opacity = "0";
      document.body.style.top = "-5vw";
  
      if (view == loginView || view == errorView) {
        document.body.innerHTML = "";
        view(params);
      } else {
        checkLogin();
        document.body.innerHTML = "";
        view(params);
      }
      setTimeout(() => {
        document.body.style.transition = ".5s";
        document.body.style.top = "0";
        document.body.style.opacity = "1";
      }, 150);
    }catch(error){
      location.href = configuration.URL + "error/500";
    }
  };
  
  export const checkLogin = () => {
    if (isLogged() == false) {
      location.href = configuration.URL + "login/";
    }
  };