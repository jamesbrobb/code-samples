import {
    Component,
    Input, OnChanges,
    SimpleChanges
} from '@angular/core';


export enum FALLBACK_COLORS {
    BLUE= 'blue',
    GREEN= 'green',
    ORANGE= 'orange',
    PURPLE= 'purple',
    WHITE= 'white'
}

const SVGS: string[] = [
    `background-${FALLBACK_COLORS.BLUE}`,
    `background-${FALLBACK_COLORS.GREEN}`,
    `background-${FALLBACK_COLORS.ORANGE}`,
    `background-${FALLBACK_COLORS.PURPLE}`
];

@Component({
    selector: 'ef-class-fallback-image',
    templateUrl: './fallback-image.component.html',
    styleUrls: ['./fallback-image.component.scss']
})
export class FallbackImageComponent implements OnChanges {

    @Input() seed: string;
    @Input() color: FALLBACK_COLORS;

    private _fallbackSvgName: string;

    get fallbackSvgName(): string { return this._fallbackSvgName; }

    public ngOnChanges(changes: SimpleChanges): void {

        if (this.color) {
            this._fallbackSvgName = `background-${this.color}`;
            return;
        }

        this._fallbackSvgName = this._getSvgName(this.seed);
    }

    private _getSvgName(seed: string): string {

        let seedInt: number;

        if (seed) {
            seedInt = parseInt(seed.replace(/\D/g, ''));
            seedInt = isNaN(seedInt) ? NaN : seedInt;
        }

        const index = !isNaN(seedInt) ? seedInt % SVGS.length : Math.round(Math.random() * (SVGS.length - 1));

        return SVGS[index];
    }
}
