export interface IObservable<Observer, Data> {
    addObservable(observer: Observer): void
    removeObserver(observer: Observer): void
    notifyObservers(data: Data, keyFunction: keyof Observer): Promise<void>
}