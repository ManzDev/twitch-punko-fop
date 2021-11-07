import "../css/box-back.css";
import "./FunkoLogo.js";
import "./ManzDev.js";
import "./FunkoNumber.js";

class BoxBack extends HTMLElement {
  static get styles() {
    return /* css */`
      .box-back {
        position: relative;
      }

      .box-back .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .box-back funko-logo {
        transform: scale(0.6) translateY(-20px);
      }

      .box-back manz-dev {
        transform: scale(1) translate(0px, -40px) rotate(5deg);
      }

      .box-back funko-number {
        transform: scale(0.8) translate(-20px, 20px);
        position: absolute;
        top: 0;
        right :0;
      }
    `;
  }

  connectedCallback() {
    this.number = this.getAttribute("number") ?? "01";
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <style>${BoxBack.styles}</style>
    <div class="box-back">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
        <funko-number number="${this.number}"></funko-number>
      </div>
    </div>`;
  }
}

customElements.define("box-back", BoxBack);
