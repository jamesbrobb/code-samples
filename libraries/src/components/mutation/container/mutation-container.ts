
export abstract class BaseMutationContainer {

    protected _element: Element;
    private _observer: MutationObserver;

    constructor(element: Element) {
        this._element = element;
    }

    protected _observe(options?: MutationObserverInit): void {

        if (this._observer) {
            this._observer.disconnect();
        }

        if (!this._observer) {
            this._observer = new MutationObserver(this._mutationHandler);
        }

        this._observer.observe(this._element, options);
    }

    protected _destroy(): void {

        if (this._observer) {
            return;
        }

        this._observer.disconnect();
        this._observer = null;
    }

    private _mutationHandler = (records: MutationRecord[]): void => {
        this._handleMutation(records);
    }

    protected abstract _handleMutation(records: MutationRecord[]): void;
}

