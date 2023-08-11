import Canvas from "../../components/canvas/Canvas.js";
import Clock from "../../components/clock/Clock.js";
import { UIComponent } from "../../lib/gtdf/components/uicomponent.js";
import { ViewUI } from "../../lib/gtdf/views/ViewUI.js";

export default class MouseView extends ViewUI {
   
    public constructor(){
        super({
            type: "view",
            id: "mouse",
            classes: ["box-column","box-center"],
            styles : {
                height: "100vh",
                width: "100vw",
                userSelect: "none",
            }, 
        });
    }
   
    public show(params: string[], container: UIComponent): void {
       
        let canvas = new Canvas();
        canvas.appendTo(this);

        this.appendTo(container);

    }



}