# EF Class Responsive container

A directive that adds responsive behaviour to an element.

## Usage

```html
<some-component>
    <!-- internal mark up of component that uses directive -->
    
    <div [efClassResponsiveContainer]>
        
        <div class="thing"></div>
        
    </div>
    
</some-component>
```

```css
/* internal style of component */

:host {
    --thing-background-color: blue;
    --LG: 400;
    --MD: 200;
}

:host.LG {
    --thing-background-color: red;
}

:host.MD {
    --thing-background-color: green;
}

:host .thing {
    width: 100px;
    height: 100px;
    background-color: var(--thing-background-color);
}

```

