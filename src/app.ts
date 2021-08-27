import { setUpConfigurations } from './config/config';
import { load } from './views/router';

const loadFromUrl = () => {
    // get the url paramaters or routes and load the page
    const params = [] // getParametersByIndex(window.location.hash.slice(1).toLowerCase(),1);
    //if(token) check token 

    if(params[0] == undefined){
        location.href = SETTINGS.URL + "#/";
        load([""]);
    }
    else {
        console.log(SETTINGS);
        console.log(PATHS);
         load(params);
    }
}

window.addEventListener('hashchange',() =>{
    
    loadFromUrl();
});

window.onload = () => {  
    setUpConfigurations();
    loadFromUrl();
}