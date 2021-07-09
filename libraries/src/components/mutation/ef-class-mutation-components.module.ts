import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MutationContainerDirective} from './container/mutation-container.directive';



const COMPONENTS = [
    MutationContainerDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class EfClassMutationComponentsModule {}
