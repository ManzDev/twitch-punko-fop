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

      .static .punko-fop {
        animation: none;
        transform: rotateY(-25deg) rotateX(5deg);
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
    this.render();

    this.setName(this.getAttribute("name"));
    this.setNumber(this.getAttribute("number"));
    this.setSubName(this.getAttribute("subname"));
    this.setImage(this.getAttribute("figure"));
  }

  static get observedAttributes() {
    return ["name", "number", "subname", "figure"];
  }

  setName(name) {
    this.querySelectorAll("funko-name").forEach(item => item.setName(name));
  }

  setSubName(subname) {
    this.querySelectorAll("funko-name").forEach(item => item.setSubName(subname));
  }

  setNumber(number) {
    this.querySelectorAll("funko-number").forEach(item => item.setNumber(number));
  }

  attributeChangedCallback(name, old, now) {
    console.log({ name, old, now });
    name === "name" && old && this.setName(now);
    name === "subname" && old && this.setSubName(now);
    name === "number" && old && this.setNumber(now);
    name === "figure" && old && this.setImage(now);
  }

  setImage(image) {
    const funkoFigure = document.createElement("img");
    funkoFigure.setAttribute("src", `https://manz.dev/assets/stickers/${image}`);
    const figureContainer = this.querySelector(".figure-container");
    if (figureContainer) {
      figureContainer.innerHTML = "";
      figureContainer.append(funkoFigure);
    }
  }

  render() {
    this.innerHTML = /* html */`
    <style>${PunkoFop.styles}</style>
    <div class="container">
      <div class="punko-fop">
        <box-top></box-top>
        <box-bottom></box-bottom>
        <box-right></box-right>
        <box-front></box-front>
        <box-left></box-left>
        <box-back></box-back>
        <div class="figure-container"></div>
      </div>
    </div>`;
  }
}

customElements.define("punko-fop", PunkoFop);
