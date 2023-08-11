
import { IObservable, IObserver } from "./Observer.js";
import { UIComponent, UIProperties } from "./uicomponent.js";

export interface ObserverUIProperties extends UIProperties {
    observable: IObservable;
}

export class ObservableUIComponent extends UIComponent implements IObserver {
    
    protected observable: IObservable;

    public constructor(properties: ObserverUIProperties){
        super(properties);
        this.observable = properties.observable;
        this.observable.subscribe(this);
    }
    
    update(): void {
        console.warn("ObservableUIComponent.update() not implemented.");
    }
}