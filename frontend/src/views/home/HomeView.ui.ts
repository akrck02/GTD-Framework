import App from "../../App.js";
import { Config } from "../../config/Config.js";
import { UIComponent } from "../../lib/gtd/web/uicomponent.js";
import { ViewUI } from "../../lib/gtdf/views/ViewUI.js";

export default class HomeView extends ViewUI {

    private static ID = "home";

    public constructor(){
        super({
            type: "view",
            id: HomeView.ID,
            classes: ["box-column","box-center"],
            styles: {
                width: "100%",
                height: "100%",
                padding: "1rem 2rem",
                fontSize: "1.6rem"
            }
        });
    }

    public show(params : string[], container : UIComponent): void {

        const logo = new UIComponent({
            type : "img",
            attributes : {
                src: Config.PATHS.ICONS + "logo.svg",
                alt: "GTD Framework logo"
            },
            styles: {
                maxWidth: "40rem"
            }
        })

        const title = new UIComponent({
            type : "h1",
            text :"💭 " + App.getBundle().home.WELCOME_MESSAGE + " 😉",
        })

        const text = new UIComponent({
            type : "p",
            text : "💻&nbsp; " + App.getBundle().home.WELCOME_DESCRIPTION + " &nbsp;🚀",
            styles : {
                margin : "1.5rem 0",
                padding : "1rem 1.5rem",
                background: "#f5f5f5",
                borderRadius : ".35rem",
                fontSize : "1.2rem",
                color: "#404040"
            }
        })

        const startMenu = this.createStartMenu();

        logo.appendTo(this);
        title.appendTo(this);
        text.appendTo(this);
        startMenu.appendTo(this);

        this.appendTo(container);
    }



    private createStartMenu() : UIComponent {

        const menu = new  UIComponent({
            type: "div",
            classes: ["box-row","box-center","box-warp"],
            styles : {
                width: "100%",
                maxWidth: "77rem",
                border : "1 rem solid pink",
                margin: "1rem 0"
            }
        })
        
        const helpBox = this.createBox("hand.svg",App.getBundle().home.HELLO_WORLD, App.getBundle().home.HELLO_WORLD_DESCRIPTION);
        const configBox = this.createBox("settings.svg",App.getBundle().home.CONFIGURATIONS,App.getBundle().home.CONFIGURATIONS_DESCRIPTION);
        const contributeBox = this.createBox("github.svg",App.getBundle().home.CONTRIBUTE,App.getBundle().home.CONTRIBUTE_DECRIPTION);

        helpBox.appendTo(menu);
        configBox.appendTo(menu);
        contributeBox.appendTo(menu);

        return menu;
    }


    public createBox(image : string, title : string, message : string) : UIComponent {

        const box = new UIComponent({
            classes: ["box-column", "box-center","text-center"],
            styles: {
                width: "20rem",
                height: "15rem",
               // border: ".2rem solid #f1f1f1",
                borderRadius : "1rem",
                padding: "1rem",
                margin : ".5rem"
            }
        });

        const boxIcon = new UIComponent({
            type : "img",
            attributes : {
                src: Config.PATHS.ICONS + image,
                alt: "Hello world icon"
            },
            styles: {
                width : "4rem",
                margin: "1rem 0"
            }
        }) 

        boxIcon.appendTo(box);

        const boxTitle = new UIComponent({
            type : "h2",
            text : title
        })

        boxTitle.appendTo(box);

        const boxDesc = new UIComponent({
            type : "p",
            text : message,
            styles : {
                fontSize: "1rem",
                margin : ".2rem",
                color: "#606060"
            }
        });

        boxDesc.appendTo(box)

        return box;
    }


}