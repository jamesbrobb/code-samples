import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output} from '@angular/core';
import {ResizeObserverService} from './resize-observer.service';
import {BaseResponsiveContainer} from './responsive-container';



@Directive({
    selector: '[efClassResponsiveContainer]'
})
export class ResponsiveContainerDirective extends BaseResponsiveContainer implements OnDestroy {

    @Output() resizeNotification = new EventEmitter();

    constructor(elementRef: ElementRef, service: ResizeObserverService) {
        super(elementRef.nativeElement, service);
    }

    protected _resizeNotification(contentRect: DOMRectReadOnly, element: Element): void {
        this.resizeNotification.emit({contentRect, element});
    }

    public ngOnDestroy(): void {
        this.destroy();
    }
}
