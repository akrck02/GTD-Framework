export enum Languages {
    SPANISH = "es",
    ENGLISH = "en"
}

export function getLanguage(locale : string) : Languages {

    switch(locale) {
        case Languages.SPANISH: 
            return Languages.SPANISH;
        default : 
            return Languages.ENGLISH;   
    }

}