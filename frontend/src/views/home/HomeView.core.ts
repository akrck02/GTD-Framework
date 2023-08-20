import { StringMap } from "../../components/select/Select.js";
import { Config } from "../../config/Config.js";
import Utils from "../../core/Utils.js";
import { TextBundle } from "../../lang/Text.js";
import { ViewCore } from "../../lib/gtdf/views/ViewCore.js";
import LanguageService from "../../services/LanguageService.js";

export default class HomeCore extends ViewCore {

    public static CONTRIBUTE_URL = "https://github.com/akrck02/GTD-Framework";

    /**
     * Get available languages to add to the select
     * @returns The available languages
     */
    public static getLanguages() : StringMap {
        const languages = LanguageService.getAvailableLanguages();
        const formatted = {};

        const list = Object.keys(languages) 

        list.forEach(lang => {
            formatted[lang.toUpperCase().substring(0,1) + lang.toLowerCase().substring(1)] = languages[lang];
        });

        return formatted;
    }

    /**
     * Set the app language and reload
     * @param selected The selected language
     */
    public static async setLanguage(selected :string){        
        Config.setLanguage(selected);
        await TextBundle.reloadSignal.emit();
        Utils.redirect(Config.Views.home,[],true);


    } 

}