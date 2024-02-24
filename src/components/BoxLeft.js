import "../css/box-left.css";
import "./FunkoLogo.js";
import "./ManzDev.js";
import "./FunkoNumber.js";
import "./FunkoName.js";

class BoxLeft extends HTMLElement {
  static get styles() {
    return /* css */`
      .box-left .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .box-left funko-logo {
        transform: scale(0.6) translateY(50px);
      }

      .box-left manz-dev {
        transform: scale(0.6) translate(-110px, -125px) rotate(5deg);
      }

      .box-left funko-name {
        transform: scale(0.8) translate(-55px, -100px);
      }

      .box-left funko-number {
        transform: scale(0.8) translate(0, -100px);
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.number = this.getAttribute("number") ?? "01";
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <style>${BoxLeft.styles}</style>
    <div class="box-left">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
        <funko-name>${this.name}</funko-name>
        <funko-number>${this.number}</funko-number>
      </div>
    </div>`;
  }
}

customElements.define("box-left", BoxLeft);
