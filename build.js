const fs = require("fs");

// directory path
const directories = [
    "./api/",
    "./api/models/",
    "./app/",
    "./logs/",
    "./resources/",
    "./resources/audios/",
    "./resources/fonts/",
    "./resources/images/",
    "./resources/json/",
    "./resources/videos/",
    "./src/",
    "./src/components/",
    "./src/config/",
    "./src/core/",
    "./src/lib/",
    "./src/services/",
    "./src/views/",
    "./src/views/home/",
    "./src/views/error/",
    "./style/",
    "./temp/",
    "./test/",
];

//files
const files = {
    "./api/api.ts": `
    /**
     *  API functions here
     * ----------------------------------------
     * Feel free to remove this file if you don't need it or 
     * if your project isn't using TypeScript as backend language.
     *
     */
    `,
    "./app/index.html": `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GTD Framework - webapp</title>
        <link rel="stylesheet" href="../style/master.css">
    </head>
    <script src="app.js"></script>
    <body class="onepage_app box-center box-column"> 
        <h1>Welcome to GTD Framework!!</h1>
        <a class="framed_dashed_btn" href="http://akrck02.com/#/GTD/framework">Getting started</a>
    </body>
    </html>
    `,

    "./src/config.ts": `
        
    //global runtime configurations
    export const CONFIG  = {
        APP_NAME: 'GTD Webapp',
        APP_VERSION: 'v1.0',
        HOST: '127.0.0.1',
        PORT: 80,
        URL: '',
        ENVIROMENT : 'development',
        DEBUG : true,
        LOG_LEVEL : 'debug',
        LOG_FILE : 'app.log',
    };

    //paths on server
    export const PATHS = {
        ROOT : '',
        RESOURCES : '',
        LOGS : '',
        FONTS : '',
        IMAGES : '',
        VIDEOS : '' ,
        AUDIOS : '',
        JSON : ''     
    }


    //api calls
    export const API = {};  

    //view URLs
    export const VIEWS = {
        BASE_URL : '',
        HOME : '',
    };


    //start settings
    export function setUpConfigurations() : void {

        //global runtime configurations
        CONFIG['URL'] = 'http://' + CONFIG['HOST'] + ':' + CONFIG['PORT'] + "/";
        
        //Paths
        PATHS['ROOT'] = CONFIG['URL'];
        PATHS['LOGS'] = PATHS['ROOT'] + 'logs/';
        PATHS['RESOURCES'] = PATHS['ROOT'] + 'resources/';
        PATHS['FONTS'] = PATHS['RESOURCES'] + 'fonts/';
        PATHS['IMAGES'] = PATHS['RESOURCES'] + 'images/';
        PATHS['VIDEOS'] = PATHS['RESOURCES'] + 'videos/';
        PATHS['AUDIOS'] = PATHS['RESOURCES'] + 'audios/';
        PATHS['JSON'] = PATHS['RESOURCES'] + 'json/'; 

        //views 
        VIEWS['BASE_URL'] = CONFIG['URL'] + '/#/';
        VIEWS['HOME'] = VIEWS['BASE_URL'] + 'home/';

    }
    `,
    "./src/config/errors.ts": `
    export const ERRORS = {
        200: {
            message: 'Success',
            code: 200,
        },
        400: {
            message: 'Bad request',
            code: 400,
        },
        401: {
            message: 'Unauthorized',   
            code: 401,
        },
        404: {
            message: 'Not found',
            code: 404,
        },
        500: {
            message: 'Internal server error',
            code: 500,
        },
    };
    `,

    "./src/app.ts": `
    
    `,
    "./src/views/router.ts": `
    
    `,
    "./src/views/error/error.ts": `
    
    export const ERRORS = {
        200: {
            message: 'Success',
            code: 200,
        },
        400: {
            message: 'Bad request',
            code: 400,
        },
        401: {
            message: 'Unauthorized',   
            code: 401,
        },
        404: {
            message: 'Not found',
            code: 404,
        },
        500: {
            message: 'Internal server error',
            code: 500,
        },
    };
    
    `,
    "./src/views/home/home.ts": `
    
    `,

    "./style/master.css": ``,
};

// create all directories
directories.forEach((directory) => {
    if (!fs.existsSync(directory)) {

        const time = new Date().getTime();
        fs.mkdir(directory, (err) => {
           if (err) {
                    throw err;
          }
          console.log(`[GTD] Directory "${directory}" is created.`);
        });

        let newTime = new Date().getTime();
        while(newTime - time < 50) {
            newTime = new Date().getTime();
        }        
        
    }
});


// create all files
Object.keys(files).forEach((file) => {

    const time = new Date().getTime();
    if (!fs.existsSync(file)) {
        fs.writeFile(file, files[file], (err) => {
            if (err) {
                throw err;
            }
            console.log(`[GTD] File "${file}" is created.`);
        });


        let newTime = new Date().getTime();
        while(newTime - time < 50) {
            newTime = new Date().getTime();
        }        
    }
});
