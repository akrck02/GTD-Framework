import Select from "../../components/select/Select.js";
import { Config } from "../../config/Config.js";
import { getLanguageName } from "../../lang/Language.js";
import { Text } from "../../lang/Text.js";
import StringTools from "../../lib/gtdf/data/Strings.js";
import { UIComponent } from "../../lib/gtdf/components/UIComponent.js";
import { ViewUI } from "../../lib/gtdf/views/ViewUI.js";
import HomeCore from "./HomeView.core.js";
import HomeViewMobile from "./HomeView.mobile.js";
import { Browser } from "../../lib/gtdf/components/Browser.js";
import { HTML } from "../../lib/gtdf/components/Dom.js";

export default class HomeView extends ViewUI {

    private static readonly ID = "home";
    private static readonly LOGO_ID = "logo";
    private static readonly DESCRIPTION_ID = "description";
    private static readonly START_MENU_ID = "start-menu";
    private static readonly INFO_BOX_CLASS = "info-box";


    private static readonly LOGO_SVG = "logo.svg";
    private static readonly HELLO_WORLD_SVG = "hand.svg";
    private static readonly CONFIGURATIONS_SVG = "settings.svg";
    private static readonly CONTRIBUTE_SVG = "github.svg";

    public constructor(){
        super({
            type: "view",
            id: HomeView.ID,
            classes: ["box-column","box-center"],
        });
    }

    public show(params : string[], container : UIComponent) {

        Config.setTitle(`${Config.Base.app_name} - ${Text.home.TITLE}`);

        if(Browser.isSmallDevice() || Browser.isMobile()){
            new HomeViewMobile().show(params,container);
            return;
        }
        
        const lang = StringTools.toNormalCase(getLanguageName(Config.getLanguage()));
        const select = new Select(HomeCore.getLanguages(),HomeCore.setLanguage,lang);
        select.setStyles({
            position: "absolute",
            right: "2rem",
            top: "1rem"
        })

        select.appendTo(this);

        const logo = new UIComponent({
            type : HTML.IMG,
            id: HomeView.LOGO_ID,
            attributes : {
                src: `${Config.Path.icons}${HomeView.LOGO_SVG}`,
                alt: Text.home.LOGO_ALT
            },
        })

        const title = new UIComponent({
            type : HTML.H1,
            text :`💭 ${Text.home.WELCOME_MESSAGE} 😉`,
        })

        const text = new UIComponent({
            type : "p",
            id: HomeView.DESCRIPTION_ID,
            text : `💻&nbsp; ${Text.home.WELCOME_DESCRIPTION} &nbsp;🚀`,
        })

        const startMenu = this.createStartMenu();

        logo.appendTo(this);
        title.appendTo(this);
        text.appendTo(this);
        startMenu.appendTo(this);
        this.appendTo(container);

    }


    /**
     * Create the start menu component 
     * @returns The menu created.
     */
    private createStartMenu() : UIComponent {

        const menu = new  UIComponent({
            type: HTML.DIV,
            id: HomeView.START_MENU_ID,
            classes: ["box-row","box-center","box-warp"],
        })
        
        const helpBox = this.createInfoBox(HomeView.HELLO_WORLD_SVG,
            Text.home.HELLO_WORLD, 
            Text.home.HELLO_WORLD_DESCRIPTION,
            Text.home.HELLO_WORLD_ICON_ALT
        );

        const configBox = this.createInfoBox(HomeView.CONFIGURATIONS_SVG,
            Text.home.CONFIGURATIONS,
            Text.home.CONFIGURATIONS_DESCRIPTION,
            Text.home.CONFIGURATIONS_ICON_ALT,
        );

        const contributeBox = this.createInfoBox(HomeView.CONTRIBUTE_SVG,
            Text.home.CONTRIBUTE,
            Text.home.CONTRIBUTE_DECRIPTION,
            Text.home.CONTRIBUTE_ICON_ALT,
            HomeCore.CONTRIBUTE_URL,
            true
        );

        helpBox.appendTo(menu);
        configBox.appendTo(menu);
        contributeBox.appendTo(menu);

        return menu;
    }


    public createInfoBox(image : string, title : string, message : string, alt : string, url : string  = undefined,  newPage : boolean = false) : UIComponent {

        const infoBox = new UIComponent({
            classes: [HomeView.INFO_BOX_CLASS, "box-column", "box-center","text-center"],
        });

        const infoBoxIcon = new UIComponent({
            type : HTML.IMG,
            attributes : {
                src: Config.Path.icons + image,
                alt: `${alt}`
            },
        }) 

        infoBoxIcon.appendTo(infoBox);

        const infoBoxTitle = new UIComponent({
            type : HTML.H2,
            text : title
        })

        infoBoxTitle.appendTo(infoBox);

        const infoBoxDescription = new UIComponent({
            type : HTML.P,
            text : message,
            classes: ["description"],
        });
        infoBoxDescription.appendTo(infoBox)

        // if url is defined set action listener
        if(url){

            // Set "clickable" style and behaviour
            infoBox.setClasses(["clickable"]);

            // Setting event
            infoBox.setEvents({
                click : (e : Event) => {
                    e.preventDefault()
                    e.stopPropagation();

                    window.open(url,newPage? "blank" : "");
                }
            })
        }

        return infoBox;
    }

}