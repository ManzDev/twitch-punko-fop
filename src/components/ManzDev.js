import "../css/manzdev.css";

class ManzDev extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <div class="manzdev-container">
      <div class="manzdev"></div>
    </div>`;
  }
}

customElements.define("manz-dev", ManzDev);
