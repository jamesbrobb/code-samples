# EF Class Button

Renders a button using one of the available themes.

## IO

- **@Input(disabled):** `string`. Whether the button is disabled or not


## Styles

- **Types:** light | medium | dark | positive | warning | negative

- **Styles:** primary | secondary


## Usage

```html
<ef-class-button class="ef-class-{{type}} {{style}}"
    [disabled]="isDisabled">

    Content

</ef-class-button>
```

```html
<ef-class-button class="ef-class-{{type}} {{style}}"
    [disabled]="isDisabled">

    <span>Label</span>

    <ef-class-icon name="refresh"></ef-class-icon>

</ef-class-button>
```
