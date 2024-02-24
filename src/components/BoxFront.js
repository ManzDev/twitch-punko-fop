import "../css/box-front.css";
import "./FunkoLogo.js";
import "./ManzDev.js";
import "./FunkoNumber.js";
import "./FunkoName.js";

class BoxFront extends HTMLElement {
  static get styles() {
    return /* css */`
      .box-front {
        position: relative;
        overflow: hidden;
      }

      .box-front funko-logo {
        position: absolute;
        top: 0;
        z-index: 10;
        transform-origin: 10px 25px;
        transform: scale(0.6);
      }

      .box-front .funko-logo-globe {
        width: 140px;
        height: 100px;
        clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%);
        border-radius: 50%;
        background: white;
        position: absolute;
        top: 0;
        z-index: 0;
        transform: translate(0, 15px);
      }

      .box-front manz-dev {
        position: absolute;
        bottom: 0;
        left: -85px;
        z-index: 10;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <style>${BoxFront.styles}</style>
    <div class="box-front">
      <div class="front-top">
        <div class="inner-box">
          <funko-number>001</funko-number>
        </div>
      </div>
      <div class="front-side">
        <div class="inner-box"></div>
      </div>
      <div class="front-bottom">
        <div class="inner-box">
          <funko-name></funko-name>
        </div>
      </div>
      <funko-logo type="STREAMERS"></funko-logo>
      <div class="funko-logo-globe"></div>
      <manz-dev></manz-dev>
    </div>`;
  }
}

customElements.define("box-front", BoxFront);
