executeAsync(
    () => {
        //Game loop in web development uwu
        //console.warn("Checking notifications...")
    },
    2500
)

const loadFromURL = () => {
    const params = getParametersByIndex(window.location.hash.slice(1).toLowerCase(),1);

    if(params[0] == undefined){
        location.href = settings().URL;
        load([""]);
    }
    else load(params);
}



window.onresize = () =>{
    /**
     * resize events here
     */
}

window.onload = loadFromURL;
window.onhashchange = loadFromURL;