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
        font-family: "Bebas Neue";
        font-weight: bold;
        font-size: 32px;
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
      <slot>---</slot>
    </div>`;
  }
}

customElements.define("funko-number", FunkoNumber);
