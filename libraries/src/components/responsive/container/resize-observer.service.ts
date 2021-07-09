import ResizeObserver from 'resize-observer-polyfill';
import {ResponsiveContainer} from './responsive-container';



export class ResizeObserverService {

    private _observer: ResizeObserver;
    private _map: Map<Element, ResponsiveContainer>;

    constructor() {
        this._observer = new ResizeObserver(this._resizeHandler);
    }

    public observe(element: Element, containerCtrl: ResponsiveContainer): void {

        if (!this._map) {
            this._map = new Map();
        }

        this._observer.observe(element);
        this._map.set(element, containerCtrl);
    }

    public unobserve(element: Element): void {

        if (!this._map) {
            return;
        }

        this._observer.unobserve(element);
        this._map.delete(element);
    }

    private _resizeHandler = (entries: ResizeObserverEntry[]): void => {

        entries.forEach((entry: ResizeObserverEntry) => {

            const ctrl: ResponsiveContainer = this._map.get(entry.target);

            ctrl.handleResize(entry.contentRect as any);
        });
    }
}
