# Image Lazy Load

`image-lazy-load` is a lightweight JavaScript library for lazy loading images and background images in web applications.

## Installation

- You can install the package via npm:

```bash
npm install simple-image-lazy-load
```

## Usage

1. Import the library: In your JavaScript file, import the lazyLoadImages function from the package.

```js
const lazyLoadImages = require("simple-image-lazy-load");
```

1. Call the function: Use the `lazyLoadImages` function to lazy load images in your web application. You can provide optional configuration options to customize the lazy loading behavior.

```js
document.addEventListener("DOMContentLoaded", function () {
  lazyLoadImages({
    selector: ".lazy-image",
    threshold: 0.5,
    rootMargin: "100px",
    onLoad: (element) => {
      console.log("Image loaded:", element);
    },
  });
});
```

## Configuration Options

- selector (string, default: 'img.lazy'): CSS selector for lazy-loading elements.
- threshold (number, default: 0): Specifies the percentage of an element's visibility in the viewport at which lazy loading should occur.
- rootMargin (string, default: '0px'): Margin around the viewport boundary to trigger lazy loading earlier or later.
- onLoad (function, default: () => {}): Callback function to execute when an image is loaded.

## HTML Markup

- In your HTML file, mark the images you want to lazy load with the lazy class and provide the actual image source in the data-src attribute.

```html
<img
  class="lazy-image"
  data-src="path/to/your/image.jpg"
  alt="Lazy-loaded image"
/>
```

## Example

- You can find an example usage of the simple-image-lazy-load package in the <a href="https://jsfiddle.net/h5pksrqb/">JS Fiddle</a>.

## Dependencies

- The image-lazy-load package doesn't have any external dependencies.
