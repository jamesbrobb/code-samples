# EF Class Grid Layout

Component for rendering a grid layout

## IO

- **@Input(dataProvider):** `array`. An array of data objects to be rendered


## Usage

```html
<ef-class-grid-layout class="grid"
                      [dataProvider]="dataProvider">

    <ng-template let-item="item">

        <button class="grid-item"
                (click)="onItemSelect(item)">

            <some-item-to-render
                    [dataProvider]="item">
            </some-item-to-render>

        </button>

    </ng-template>

</ef-class-grid-layout>
```
