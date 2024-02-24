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

      :host([only-name]) .box-subname {
        display: none;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  showSubname() {
    return this.hasAttribute("subname") ? /* html */`<div class="box-subname">${this.subname}</div>` : "";
  }

  setName(name) {
    this.shadowRoot.querySelector(".box-name").textContent = name;
  }

  setSubName(subname) {
    this.shadowRoot.querySelector(".box-subname").textContent = subname;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FunkoName.styles}</style>
    <div class="box-data">
      <span class="box-name"></span>
      <span class="box-subname"></span>
    </div>`;
  }
}

customElements.define("funko-name", FunkoName);
