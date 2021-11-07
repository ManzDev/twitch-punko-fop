import "../css/box-right.css";
import "./FunkoLogo.js";
import "./ManzDev.js";
import "./FunkoNumber.js";
import "./FunkoName.js";

class BoxRight extends HTMLElement {
  static get styles() {
    return /* css */`
      .box-right {
        position: relative;
        overflow: hidden;
      }

      .box-right funko-logo {
        position: absolute;
        top: 0;
        z-index: 10;
        transform-origin: 10px 25px;
        transform: scale(0.35) translate(250px, -40px);
      }

      .box-right manz-dev {
        transform: scale(0.6) translate(0, -10px) rotate(5deg);
        position: absolute;
        bottom: -125px;
        z-index: 10;
      }

      .box-right funko-number {
        position: absolute;
        bottom: 15px;
        right: 15px;
      }

      .box-right funko-name {
        transform-origin: 50% 50%;
        transform: rotate(90deg) translateX(-75px) scale(1.1);
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.number = this.getAttribute("number") ?? "01";
    this.subname = this.getAttribute("subname");
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <style>${BoxRight.styles}</style>
    <div class="box-right">
      <div class="front-top"></div>
      <div class="front-side">
        <funko-name name="${this.name}"></funko-name>
      </div>
      <div class="front-bottom">
        <funko-number number="${this.number}"></funko-number>
      </div>
      <funko-logo type="STREAMERS"></funko-logo>
      <manz-dev></manz-dev>
    </div>`;
  }
}

customElements.define("box-right", BoxRight);
