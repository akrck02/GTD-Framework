import { ObservableUIComponent } from "../../lib/gtdf/core/observable/ObservableUIComponent.js";
import { Observable } from "../../lib/gtdf/core/observable/Observer.js";

export default class Clock extends ObservableUIComponent {

    public constructor() {
        super({
            type: "span",
            observable: new Observable(),
            styles: {
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-primary)",
                margin: "1rem",
            }
        });        

        setInterval(() => {
            this.observable.content.time = new Date().toLocaleTimeString();
        }, 1000);

    }

    async update() {
        this.element.innerHTML = this.observable.content.time;
    }

}