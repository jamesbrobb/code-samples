### EfClassImage

Renders an image component.

### IO

- **@Input(url):** `string`. The url to the image
- **@Input(fallbackSeed):** `string`. A seed to determine the fallback image
- **@Input(color):** [`FALLBACK_COLORS`](https://github.com/EFEducationFirstMobile/ef-class-web/blob/master/libraries/components/src/lib/media/image/fallback/fallback-image.component.ts) If supplied overrides seed value to explicitly select fallback background color
- **@Input(size):** `string`. the image size to request. Defaults to '1044w'
- **@Input(blur):** `boolean`. whether to blur the image and fallback

#### Usage

```html
<ef-class-image
    [url]="url_to_image"
    [fallbackSeed]="seed"
    [fallbackColor]="color"
    [size]="size"
    [blur]="blur">
</ef-class-image>
```
