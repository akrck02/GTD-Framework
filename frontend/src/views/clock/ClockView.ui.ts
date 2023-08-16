import Clock from "../../components/clock/Clock.js";
import { UIComponent } from "../../lib/gtdf/components/uicomponent.js";
import { ViewUI } from "../../lib/gtdf/views/ViewUI.js";

export default class ClockView extends ViewUI {
   
    public constructor(){
        super({
            type: "view",
            id: "clock",
            classes: ["box-column","box-center"],
            styles : {
                height: "100vh",
                width: "100vw",
                userSelect: "none",
            }, 
        });
    }
   
    public show(params: string[], container: UIComponent) {
       
        let clock = new Clock();
        clock.appendTo(this);
        this.appendTo(container);

    }



}