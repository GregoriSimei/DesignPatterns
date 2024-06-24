import { IObservable } from "./IObservable";

export class Observable<Observer, Data> implements IObservable<Observer, Data> {
    private observer: Observer[] = []

    addObservable(observer: Observer): void {
        this.observer.push(observer)
    }
    
    removeObserver(observer: Observer): void {
        const index = this.observer.indexOf(observer)
        if (index <= 0) {
            this.observer.splice(index, 1)
        }
    }
    
    async notifyObservers(data: Data, keyFunction: keyof Observer): Promise<void> {
        for (const observer of this.observer) {
            const observerFunction = observer[keyFunction]

            if (observerFunction instanceof Function) {
                observerFunction(data)
            }
        }
    }
}