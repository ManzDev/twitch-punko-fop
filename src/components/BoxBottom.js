import "../css/box-bottom.css";
import "./FunkoLogo.js";
import "./ManzDev.js";

class BoxBottom extends HTMLElement {
  static get styles() {
    return /* css */`
      .box-bottom .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .box-bottom funko-logo {
        transform: scale(0.6) translate(125px, 175px);
      }

      .box-bottom manz-dev {
        transform: scale(0.8) translate(-300px, -25px) rotate(5deg);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <style>${BoxBottom.styles}</style>
    <div class="box-bottom">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
      </div>
    </div>`;
  }
}

customElements.define("box-bottom", BoxBottom);
