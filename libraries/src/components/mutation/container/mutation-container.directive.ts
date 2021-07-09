import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output} from '@angular/core';
import {BaseMutationContainer} from './mutation-container';



@Directive({
    selector: '[`efClassMutationContainer`]'
})
export class MutationContainerDirective extends BaseMutationContainer implements OnChanges, OnDestroy {

    @Input('efClassMutationContainer') options: MutationObserverInit;
    @Output() mutationNotification = new EventEmitter();

    constructor(elementRef: ElementRef) {
        super(elementRef.nativeElement);
    }

    public ngOnChanges(): void {
        this._observe(this.options);
    }

    public ngOnDestroy(): void {
        this._destroy();
    }

    protected _handleMutation(records: MutationRecord[]): void {
        this.mutationNotification.emit(records);
    }
}
