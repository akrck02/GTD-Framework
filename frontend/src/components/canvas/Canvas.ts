import { ObservableUIComponent } from "../../lib/gtdf/core/observable/ObservableUIComponent.js";
import { Observable } from "../../lib/gtdf/core/observable/Observer.js";
import { UIComponent } from "../../lib/gtdf/components/uicomponent.js";

export default class Canvas extends ObservableUIComponent {

    private xlabel: ObservableUIComponent;
    private ylabel: ObservableUIComponent;
    private mouse: ObservableUIComponent;

    public constructor() {
        super({
            type: "div",
            observable: new Observable(),
            styles: {
                height : "100%",
                width : "100%",
                cursor : "none",
            }
        });        

        this.observable.content.mouse = {
            x: 0,
            y: 0,
            click: false,
        };

        addEventListener("mousemove", (event: MouseEvent) => {

            this.observable.content.mouse = {
                x : event.clientX,
                y : event.clientY,
                click : this.observable.content.mouse.click,
            }

        });

        addEventListener("click", (event: MouseEvent) => {
            this.observable.content.mouse = {
                x : event.clientX,
                y : event.clientY,
                click : !this.observable.content.mouse.click,
            }
        });
    }

    draw() {
    
        this.xlabel = new ObservableUIComponent({
            type: "div",
            observable: this.observable,
            styles: {
                position: "absolute",
                top: "2rem",
                left: "2rem",
                fontSize: "1.5rem",
            }
        });

        this.ylabel = new ObservableUIComponent({
            type: "div",
            observable: this.observable,
            styles: {
                position: "absolute",
                top: "4rem",
                left: "2rem",
                fontSize: "1.5rem",
            }
        });

        this.mouse = new ObservableUIComponent({
            type: "div",
            observable: this.observable,
            styles: {
                position: "fixed",
                top: "0rem",
                left: "0rem",

                height: "1.5rem",
                width: "1.5rem",
                backgroundColor: "rgba(0,0,0,0.15)",
                borderRadius: "50rem",
                transition: "transform 0.15s ease-in-out, background-color 0.15s ease-in-out",

            }
        });

        this.mouse.update = async () => {
            this.mouse.element.style.top = `calc(${this.observable.content.mouse.y.toString()}px - ${this.mouse.element.style.height}/2)`;
            this.mouse.element.style.left = `calc(${this.observable.content.mouse.x.toString()}px - ${this.mouse.element.style.width}/2)`;

            if(this.observable.content.mouse.click){
                this.mouse.element.style.transform = "scale(2)";
                this.mouse.element.style.backgroundColor = "rgba(0,0,0,.05)";
            } else {
                this.mouse.element.style.transform = "scale(1)";
                this.mouse.element.style.backgroundColor = "rgba(0,0,0,0.15)";
            }

        };

        this.xlabel.update = async () => {
            this.xlabel.element.innerHTML = `x: ${this.observable.content.mouse.x.toString()}`;
        };

        this.ylabel.update = async () => {
            this.ylabel.element.innerHTML = `y: ${this.observable.content.mouse.y.toString()}`;
        };
        

        this.xlabel.appendTo(this);
        this.ylabel.appendTo(this);
        this.mouse.appendTo(this);

    }

    async update() {

        if(this.xlabel === undefined){
            this.draw();
        }
        
    }

}