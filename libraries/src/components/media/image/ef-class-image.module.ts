import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FallbackImageComponent } from './fallback/fallback-image.component';
import { ImageComponent } from './image/image.component';



const COMPONENTS = [
    FallbackImageComponent,
    ImageComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class EfClassImageModule {}
