import {Directive, Input} from '@angular/core';



@Directive({
    selector: '[efClassResponsiveContainer]'
})
export class ResponsiveContainerMockDirective {
    @Input() efClassResponsiveContainer: {[key: string]: number};
}
