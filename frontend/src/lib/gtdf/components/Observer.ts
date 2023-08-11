export interface IObserver {
    update(): void;
} 

export interface IObservable {
    content: any;
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    notify(): void;
}

export class Observable implements IObservable {

    private observers: IObserver[] = [];
    public content;

    constructor() {

        let a = this;
        this.content = {};
        this.content = new Proxy(this.content, {
            set: function(target, key, value) {
                target[key] = value;
                a.notify();
                return true;
            }
        });

    }

    public subscribe(observer: IObserver): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: IObserver): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    public notify(): void {
        this.observers.forEach((observer) => observer.update());
    }

    

}