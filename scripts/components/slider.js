class Carousel extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render(h) {
    this.innerHTML = `
       
    `
  }
}

customElements.define('my-carousel', Carousel)
