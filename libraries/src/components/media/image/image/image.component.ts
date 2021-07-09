import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FALLBACK_COLORS} from '../fallback/fallback-image.component';


@Component({
    selector: 'ef-class-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnChanges {

    @Input('url') ioUrl: string;
    @Input('fallbackSeed') iofallbackSeed: string;
    @Input('fallbackColor') ioFallbackColor: FALLBACK_COLORS;
    @Input('size') ioSize: string;
    @Input('blur') ioBlur: boolean;

    public url: string;
    public fallbackSeed: string;
    public fallbackColor: FALLBACK_COLORS;
    public blur: boolean;


    public ngOnChanges(changes: SimpleChanges): void {

        this.url = this.ioUrl ? this.ioUrl.replace('{size}', this.ioSize || '1044w') : '';
        this.fallbackSeed = this.iofallbackSeed;
        this.fallbackColor = this.ioFallbackColor;
        this.blur = this.ioBlur;
    }
}
