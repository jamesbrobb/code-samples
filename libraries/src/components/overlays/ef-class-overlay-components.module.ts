import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorOverlayComponent} from './color/color-overlay.component';




const components = [
    ColorOverlayComponent
];


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: components,
    exports: components,
})
export class EfClassOverlayComponentsModule {}
