import "../css/logo.css";

class FunkoLogo extends HTMLElement {
  connectedCallback() {
    this.type = this.getAttribute("type") ?? "FIGURE";
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <div class="pop-logo">
      <div class="globe">
        <div class="pop-title">
          <div class="first p font">F</div>
          <div class="o font">o</div>
          <div class="second p font">P</div>
          <div class="exclamation font">!</div>
        </div>
        <div class="pop-subtitle">
          <span>${this.type}</span>
        </div>
      </div>
      <div class="triangle-container">
        <div class="triangle"></div>
      </div>
    </div>`;
  }
}

customElements.define("funko-logo", FunkoLogo);
