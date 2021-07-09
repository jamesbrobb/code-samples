import {ResizeObserverService} from './resize-observer.service';


export enum BREAKPOINT_KEYS {
    XS,
    SM,
    MD,
    LG,
    XL,
    XXL
}

type breakpointKeys = keyof typeof BREAKPOINT_KEYS;

export type BREAKPOINTS = {
    [k in breakpointKeys]?: number;
}

type ResponsiveElement = Element & ElementCSSInlineStyle;

export interface ResponsiveContainer {
    handleResize(contentRect: DOMRectReadOnly): void;
}



export abstract class BaseResponsiveContainer implements ResponsiveContainer {

    private _breakPoints: BREAKPOINTS;

    private _element: ResponsiveElement;
    private _service: ResizeObserverService;

    constructor(element: ResponsiveElement, service: ResizeObserverService) {

        this._element = element;

        this._breakPoints = this._getBreakpointValues(element);

        if(!this._breakPoints) {
            console.warn('No breakpoint values declared in component styles');
            return;
        }

        this._service = service;
        this._service.observe(this._element, this);
    }

    public handleResize(contentRect: DOMRectReadOnly): void {

        this._resizeNotification(contentRect, this._element);

        if (! this._breakPoints) {
            return;
        }

        Object.keys( this._breakPoints)
            .forEach((breakpoint) => {

                const minWidth =  this._breakPoints[breakpoint];

                if (contentRect.width >= minWidth) {
                    this._element.classList.add(breakpoint);
                    return;
                }

                this._element.classList.remove(breakpoint);
            });
    }

    public destroy(): void {
        this._service.unobserve(this._element);
    }

    private _getBreakpointValues(element: ResponsiveElement): BREAKPOINTS {

        let breakpoints: BREAKPOINTS;

        Object.keys(BREAKPOINT_KEYS)
            .filter(key => isNaN(Number(key)))
            .map(key => {
                let styleValue = element.style.getPropertyValue(`--${key}`);

                if(!styleValue) {
                    return;
                }

                breakpoints = breakpoints || {};

                breakpoints[key] = styleValue;
            });

        return breakpoints;
    }

    protected abstract _resizeNotification(contentRect: DOMRectReadOnly, element: Element): void;
}
