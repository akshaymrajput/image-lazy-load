function lazyLoadImages(options = {}) {
  const {
    selector = "img.lazy",
    threshold = 0,
    rootMargin = "0px",
    onLoad = () => {},
  } = options;

  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const src = element.getAttribute("data-src");
          if (src) {
            if (element.tagName === "IMG") {
              element.src = src;
            } else {
              element.style.backgroundImage = `url(${src})`;
            }
            element.removeAttribute("data-src");
            onLoad(element);
            observer.unobserve(element);
          }
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

module.exports = lazyLoadImages;
