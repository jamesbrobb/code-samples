import {Component, Input, OnChanges} from '@angular/core';



export enum OVERLAY_COLORS {
    BLUE= 'blue',
    DARK_BLUE= 'dark-blue',
    GREEN= 'green',
    RED= 'red',
    PURPLE= 'purple',
    PINK= 'pink',
    GREY= 'grey'
}


@Component({
    selector: 'ef-class-overlay-color',
    templateUrl: './color-overlay.component.html',
    styleUrls: ['./color-overlay.component.scss']
})
export class ColorOverlayComponent implements OnChanges {

    @Input() color: OVERLAY_COLORS;
    @Input('allowTransition') ioAllowTransition: boolean;

    public overlayColor: OVERLAY_COLORS;
    public allowTransition: boolean;

    public ngOnChanges(): void {
        this.overlayColor = this.color === undefined ? OVERLAY_COLORS.BLUE : this.color;
        this.allowTransition = this.ioAllowTransition === undefined ? true : this.ioAllowTransition;
    }
}
