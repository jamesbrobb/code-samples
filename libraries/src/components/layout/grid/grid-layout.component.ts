import {Component, ContentChild, Input, TemplateRef} from '@angular/core';



@Component({
    selector: 'ef-class-grid-layout',
    templateUrl: './grid-layout.component.html',
    styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent {

    @Input() dataProvider: any[];

    @ContentChild(TemplateRef, {static: true})
    public itemTemplate: TemplateRef<any>;

    public trackById(index: number, item: any): string {
        return item['id'] ?? undefined;
    }
}
