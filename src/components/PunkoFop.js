import "./FunkoFigure.js";
import "./BoxFront.js";
import "./BoxLeft.js";
import "./BoxBack.js";
import "./BoxRight.js";
import "./BoxTop.js";
import "./BoxBottom.js";

class PunkoFop extends HTMLElement {
  static get styles() {
    return /* css */`
      .container {
        width: 350px;
        height: 250px;
        perspective: 1500px;
        position: relative;
      }

      .punko-fop {
        display: flex;
        width: 350px;
        height: 100%;
        margin: auto;
        gap: 10px;
        transform-style: preserve-3d;
        transform-origin: 50% 50% -100px;
        transform: rotateY(-22deg) rotateX(360deg);
        animation: spin 5s linear infinite;
      }

      .figure-container {
        width: 100%;
        height: 180%;
        display: grid;
        place-items: center;
        transform: translateZ(-100px);

        & img {
          image-rendering: pixelated;
          transform: scale(15);
        }
      }

      box-right,
      box-left,
      box-back,
      box-front,
      box-top,
      box-bottom {
        position: absolute;
      }

      box-left {
        transform-origin: 0% 100%;
        transform: rotateY(-90deg) translateX(-100%);
      }

      box-right {
        transform-origin: 350px 0%;
        transform: rotateY(90deg) translateX(350px);
      }

      box-back {
        transform-origin: 50% 50%;
        transform: scaleX(-1) translateZ(-225px);
      }

      box-top {
        transform-origin: 100% 100%;
        transform: translateZ(0) translateY(-225px) rotateX(90deg) scaleY(1);
        animation: open 160s ease infinite;
      }

      box-bottom {
        transform-origin: 0% 0%;
        transform: rotateX(270deg) translateZ(450px);
      }

      @keyframes spin {
        0% {
          transform: rotateY(0deg);
        }

        100% {
          transform: rotateY(360deg);
        }
      }

      @keyframes open {
        0%, 90%, 100% {
          transform: translateZ(0) translateY(-225px) rotateX(90deg) scaleY(1);
        }

        95% {
          transform: translateZ(0) translateY(-225px) rotateX(-100deg) scaleY(1);
        }
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.number = this.getAttribute("number") ?? "01";
    this.subname = this.getAttribute("subname");
    this.figure = this.getAttribute("figure");
    this.render();
    this.setImage(this.figure);
  }

  setImage(url) {
    const funkoFigure = document.createElement("img");
    funkoFigure.setAttribute("src", `https://manz.dev/assets/stickers/${this.figure}`);
    this.querySelector(".figure-container").appendChild(funkoFigure);
  }

  render() {
    this.innerHTML = /* html */`
    <style>${PunkoFop.styles}</style>
    <div class="container">
      <div class="punko-fop">
        <box-top></box-top>
        <box-bottom></box-bottom>
        <box-right number="${this.number}" name="${this.name}"></box-right>
        <box-front number="${this.number}" name="${this.name}" subname="${this.subname}"></box-front>
        <box-left number="${this.number}" name="${this.name}"></box-left>
        <box-back number="${this.number}"></box-back>
        <div class="figure-container"></div>
      </div>
    </div>`;
  }
}

customElements.define("punko-fop", PunkoFop);
