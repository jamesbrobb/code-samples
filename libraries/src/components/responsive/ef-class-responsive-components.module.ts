import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResponsiveContainerDirective} from './container/responsive-container.directive';
import {ResizeObserverService} from './container/resize-observer.service';



const components = [
    ResponsiveContainerDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ResizeObserverService
    ],
    declarations: components,
    exports: components
})
export class EfClassResponsiveComponentsModule {}
