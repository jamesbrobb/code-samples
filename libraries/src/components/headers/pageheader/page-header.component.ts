import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FALLBACK_COLORS} from '../../media/image/fallback/fallback-image.component';
import {OVERLAY_COLORS} from '../../overlays/color/color-overlay.component';



@Component({
    selector: 'ef-class-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnChanges {

    @Input('title') ioTitle: string;
    @Input('fallbackSeed') ioFallbackSeed: string;
    @Input('fallbackColor') ioFallbackColor: FALLBACK_COLORS;
    @Input('overlayColor') ioOverlayColor: OVERLAY_COLORS;
    @Input('imageUrl') ioImageUrl: string;
    @Input('size') ioSize: string;

    public title: string;
    public fallbackSeed: string;
    public fallbackColor: FALLBACK_COLORS;
    public overlayColor: OVERLAY_COLORS = OVERLAY_COLORS.BLUE;
    public imageUrl: string;
    public size: string;

    public ngOnChanges(changes: SimpleChanges): void {
        this.title = this.ioTitle;
        this.fallbackSeed = this.ioFallbackSeed;
        this.fallbackColor = this.ioFallbackColor;
        this.overlayColor = this.ioOverlayColor || this.overlayColor;
        this.imageUrl = this.ioImageUrl;
        this.size = this.ioSize;
    }
}
