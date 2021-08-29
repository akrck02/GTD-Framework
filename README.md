# GTD Framework
Getting things done. That's the philosophy. 
This framework makes modern singlepage web app development easier and faster.



### Why do I have to use it?

The answer is pretty simple, you don't have to, but at least is there. GTDF is based on test and secure coding with the **following features.** 



### Features

- built in **route system**.
- **GTD tools** for clean / easy coding.
- **Typescript / javascript** support on client.
- **Multi language back-end** support.
- Pre-configured **tsconfig.json** file.
- Pre-configured **webpack** configuration file.

- Support for **Node js**
- Support for **Deno**
- Integrated **GTD tools**



## Customizable, based on native typescript and javascript

GTDF is **Typescript based for secure coding**, but you **can also use javascript**. We use vanilla language so you can make your custom version of it.

¿Using **nodejs**? No problem at all, just install it. **Deno**? okay, let's start!
Easy to understand, easy to customize.



### Standard tools

GTDF comes with some of the most used prebuilt configuration files for **typescript compiler and webpack.** Feel free to modify or delete them.

We also use **GTD tools** from GTD library to make the typescript and javascript development faster and easier.



# How to install

Clone this repository:

```bash
git clone -b latest https://github.com/akrck02/GTD_Framework/  
```



**Let's start coding!!!**



## File structure

The file system or main architecture is the core of GTDF. Having the code in **modules that do their job**, easy to modify, swap or even delete.



## /API/

This is the **main directory of the REST or back-end service APIs.** This is where all the **database or processing related logic** must be coded.

This backend logic or technology depends on your needs, so we created a basic **nodejs** route based API service based **on typescript** but, **you can change it or use any backend technology** that suits your needs.



#### The basic nodejs API:

- **api.ts :**  api routing service 

- **routes.ts :** route logic here.

- **models / :** model modules here.

  

## /App/

Here is where the  **index.html** file and the **app.js** file must stay.
Typescript compiler points to **/temp/** and compiles all the **front-end code**. Then webpack minifies all the modules in one here: **/app/app.js**  



The **index.html file points to the minified version of the compiled typescript code**, so `if you want to use a diferent compilator or minifier`, make sure that the output goes to this directory with **app.js** name.



## /Db/

This directory saves the **database files**.



## /Docs/

The **documentation of the web app.**



## /Logs/

This directory is made for the **system logs in the services running inside the server.** Easy to find, easy to delete.



## /Meta/

Information about the aplication for the developers, **commands, scripts and sources**



## /Resources/

Web apps have a lot of resources nowadays, so we made this typical **/resources/** directory for you. You can make the directories you need here, but we already create this ones: 

- audios/
- fonts/
- images/
- json/
- videos/

**Feel  free to delete / modify or add any directory.**



## /Src/

This is where all the front-end source code will be created. It has a prebuilt module management system, so let's move on.

### app.ts

This is the **main module of the program**, a script that setup the configuration, calls url routing when the location changes 

and moves all the system.


		### Components/

all the **general components of the app.** That ones tha will be reusable in different views or context.

### Config/

The configuration files of the app. Here is the **config.ts** file with some basic data.

```typescript

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
```

 

###  Core/

The **main logic of the front-end app is coded here.**
You can store here **stats, complex math functions, data processors, regular expressions...**



### Lib/

**Third party libraries** go here, we serve you with the latest version of **GTD library** here for help. 
You can place any of your favorite typescript or javascript libraries here.  



### Services/

All the **data related modules** go here, like **HTTP requests, API calls, authentication methods, websockets, file readers...**

**this layout let you work even if the backend is not implemented yet**, just use "fake" input on the service.



### Views/

The views go here. GTDF serves you with a **router.ts** file that **redirects any URL to the corresponding view**, making new view implementation easy to develop and mantain.



For every view a directory is created called **viewname/** inside the **/views/** directory. That **allows to create complex views or even routers inside to redirect inside this url.**



**Example:**

>https://mywebsite.com/#/home/ -> home view
>
>https://mywebsite.com/#/projects/GTD_LIB/ -> GTD library view
>
>https://mywebsite.com/#/projects/GTDF/ -> GTD framework view



The **views/home/** directory contains **homeV.ts** a simple view.
The **views/projects/** directory contains **router.ts** that redirects to **views/projects/GTD_LIB/gtdlibV.ts** or **views/projects/GTDF/gtdfV.ts**     



#### Scalable, modular and clean view code.

 The view directories can contain unique components inside. If a component is going to be use in only one view, you can place it there.



## /Style/

The **style files** that your website needs go here. CSS, SCSS, SASS, Boostrap...

We recommend a **single minifed CSS file for a performance boost**. 



## /Temp/

The temporary files go here. Some debugging files, fake data, images or so.



## /Test/

This directory is related to the **automated unit and integration testing of your code**. You can use any testing technology. GTDF was meant to use TDD startegy. Make test first, code then.

If you already have a test directory or framework inside the backend or frontend code, feel free to delete this directory.


