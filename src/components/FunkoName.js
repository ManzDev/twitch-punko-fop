class FunkoName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .box-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(60px);
      }

      .box-name {
        font-family: "Bebas Neue";
        font-size: 42px;
        font-weight: bold;
        color: #000;
        line-height: 90%;
      }

      .box-subname {
        font-family: "Bebas Neue";
        font-size: 20px;
        color: #000;
        line-height: 90%;
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.subname = this.getAttribute("subname");
    this.render();
  }

  showSubname() {
    return this.hasAttribute("subname") ? /* html */`<div class="box-subname">${this.subname}</div>` : "";
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FunkoName.styles}</style>
    <div class="box-data">
      <div class="box-name">${this.name}</div>
      ${this.showSubname()}
    </div>`;
  }
}

customElements.define("funko-name", FunkoName);
