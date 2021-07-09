### FallbackImage

Renders a fallback image.

### IO

- **@Input(seed):** `string`. A seed value used to select the background svg
- **@Input(color):** [`FALLBACK_COLORS`](https://github.com/EFEducationFirstMobile/ef-class-web/blob/master/libraries/components/src/lib/media/image/fallback/fallback-image.component.ts) If supplied overrides seed value to explicitly select background color

#### Usage

```html
<ef-class-fallback-image
    [seed]="seed"
    [color]="color">
</ef-class-fallback-image>
```
