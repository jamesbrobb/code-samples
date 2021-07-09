import { Component, Input } from '@angular/core';

/******************************************************
 *
 * EfClassButtonComponent
 *
 ******************************************************/

@Component({
    selector: 'ef-class-button',
    templateUrl: './ef-class-button.components.html',
    styleUrls: ['./ef-class-button.component.scss']
})
export class EfClassButtonComponent {

    @Input() color: string;
    @Input() disabled = false;
    @Input() size: string = 'normal';
}
