export default class LazyAnimations {
  constructor() {
    if (!this.vars()) return false;
    this.setupEvents();
  }

  vars() {
    this.selectors = {
      elementToAnim: "data-anim",
      animClass: "anim",
    };

    this.elementToAnim = document.querySelectorAll(`[${this.selectors.elementToAnim}]`);

    if (!this.elementToAnim) return false;
    return true;
  }

  setupEvents() {
    this.elementToAnim.forEach((element) => {
      this.animationObserver(element);
    });
  }

  animationObserver(element) {
    this.options = {
      rootMargin: "0px",
      threshold: 0.4,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? entry.target.classList.add(`${this.selectors.animClass}`) : false;
      });
    }, this.options);

    this.observer.observe(element);
  }
}
