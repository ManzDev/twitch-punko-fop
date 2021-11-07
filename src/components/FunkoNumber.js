class FunkoNumber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .box-number {
        width: 50px;
        height: 50px;
        background: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      span {
        font-family: "Bebas Neue";
        font-weight: bold;
        font-size: 36px;
        color: #fff;
        transform: translate(0, 3px);
      }
    `;
  }

  connectedCallback() {
    this.number = this.getAttribute("number");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FunkoNumber.styles}</style>
    <div class="box-number">
      <span>${this.number}</span>
    </div>`;
  }
}

customElements.define("funko-number", FunkoNumber);
