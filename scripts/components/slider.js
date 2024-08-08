class Carousel extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render(h) {
    this.innerHTML = `
        <div style="width: 100%; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); z-index: 20;" class="text-center">
          <div class="wrapper">
            <ul class="carousel">
                <li class="card" style="background-image: url('../assets/image-1.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-3.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-2.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-4.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-8.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-5.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-6.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-7.jpg');"></li>
                <li class="card" style="background-image: url('../assets/image-9.jpg');"></li>
            </ul>
          </div>
        </div>
    `
  }
}

customElements.define('my-carousel', Carousel)
