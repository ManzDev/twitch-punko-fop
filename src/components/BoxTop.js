import "../css/box-top.css";
import "./FunkoLogo.js";
import "./ManzDev.js";

class BoxTop extends HTMLElement {
  static get styles() {
    return /* css */`
      .box-top .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .box-top funko-logo {
        transform: scale(0.6) translate(125px, 175px);
      }

      .box-top manz-dev {
        transform: scale(0.8) translate(-200px, -25px) rotate(5deg);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <style>${BoxTop.styles}</style>
    <div class="box-top">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
      </div>
    </div>`;
  }
}

customElements.define("box-top", BoxTop);
