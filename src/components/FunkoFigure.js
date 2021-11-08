class FunkoFigure extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        transform-origin: 50% 50% -100px;
        transform: rotateY(20deg) translateX(-50px) translateZ(-100px) scale(0.6);
      }

      @keyframes figure-spin {
        0% { transform: rotateY(0deg) translateY(-20px) translateZ(-100px) scale(0.8); }
        100% { transform: rotateY(360deg) translateY(-20px) translateZ(-100px) scale(0.8); }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FunkoFigure.styles}</style>
    <svg width="128mm" height="128mm" viewBox="0 0 128 128" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg"><defs id="defs2"><filter style="color-interpolation-filters:sRGB" height="1.062" width="1.068" y="-.025" x="-.034" id="filter1481"><feGaussianBlur in="SourceAlpha" stdDeviation=".968" result="blur1" id="feGaussianBlur1457"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite1459"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 32.1057 -1.21" result="colormatrix1" id="feColorMatrix1461"/><feGaussianBlur stdDeviation=".429" result="blur2" id="feGaussianBlur1463"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1465"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix1467"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur1469"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1471"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood1473"/><feComposite in="flood" in2="colormatrix3" k2="1" operator="in" result="composite3" id="feComposite1475"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1477"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1479"/></filter><filter style="color-interpolation-filters:sRGB" height="1.049" width="1.05" y="-.019" x="-.025" id="filter1867"><feGaussianBlur in="SourceAlpha" stdDeviation=".489" result="blur1" id="feGaussianBlur1843"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite1845"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 32.1057 -1.21" result="colormatrix1" id="feColorMatrix1847"/><feGaussianBlur stdDeviation=".429" result="blur2" id="feGaussianBlur1849"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1851"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix1853"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur1855"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1857"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood1859"/><feComposite in="flood" in2="colormatrix3" k2="1" operator="in" result="composite3" id="feComposite1861"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1863"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1865"/></filter><filter style="color-interpolation-filters:sRGB" height="1.089" width="1.147" y="-.039" x="-.074" id="filter2942"><feGaussianBlur in="SourceAlpha" stdDeviation=".429" result="blur1" id="feGaussianBlur2918"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite2920"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 23.432 -2.71903" result="colormatrix1" id="feColorMatrix2922"/><feGaussianBlur stdDeviation="1.925" result="blur2" id="feGaussianBlur2924"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite2926"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix2928"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur2930"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix2932"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood2934"/><feComposite in="flood" in2="colormatrix3" k2="1" operator="in" result="composite3" id="feComposite2936"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite2938"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite2940"/></filter></defs><g id="layer1" transform="matrix(.94776 0 0 .94776 -.278 4.881)"><g id="g2080" style="filter:url(#filter2942)"><g class="arms" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g2044"><path d="M30.972 77.045C1.844 59.645 10.922 43 10.922 43" id="path2040"/><path d="M104.951 77.045C134.08 59.645 125 43 125 43" id="path2042"/></g><g class="feets" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g2050"><path d="M75.974 140.57c5.91 24.012-1.109 35.464-1.109 35.464h11.083" id="path2046"/><path d="M54.886 140.57c-5.91 24.012 1.109 35.464 1.109 35.464H44.912" id="path2048"/></g><path class="outer" fill="#2a670c" d="M65 5a40 54 0 0 0-40 54 40 54 0 0 0 0 9 50 50 0 0 0-9 30 50 50 0 0 0 49 49 50 50 0 0 0 50-49 50 50 0 0 0-10-30 40 54 0 0 0 1-9A40 54 0 0 0 65 5z" id="path2054"/><path class="inner" fill="#c1e20c" d="M65 12a36 48 0 0 0-36 48 36 48 0 0 0 1 8 44 44 0 0 0-9 26 44 44 0 0 0 44 44 44 44 0 0 0 45-44 44 44 0 0 0-9-26 36 48 0 0 0 0-8 36 48 0 0 0-36-48z" id="path2056"/><g class="seed" id="g2062"><circle cx="66" cy="93" r="20" fill="#452c0c" id="circle2058"/><path fill="#FFF2" d="M107-65a15 15 0 0 1-7 13 15 15 0 0 1-15 0 15 15 0 0 1-7-13" transform="rotate(90)" id="path2060"/></g><g class="face" id="g2078"><g class="eye izq" id="g2068"><circle cx="58" cy="42" r="6" id="circle2064"/><circle cx="56" cy="41" r="3" fill="#fff" id="circle2066"/></g><g class="eye der" id="g2074"><circle cx="73" cy="42" r="6" id="circle2070"/><circle cx="72" cy="41" r="3" fill="#fff" id="circle2072"/></g><path d="M73 53a8 8 0 0 1-4 7 8 8 0 0 1-8 0 8 8 0 0 1-4-7" id="path2076"/></g></g><g id="g869"><g class="arms" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g8"><path d="M30.972 77.045C1.844 59.645 10.922 43 10.922 43" id="path4"/><path d="M104.951 77.045C134.08 59.645 125 43 125 43" id="path6"/></g><g class="feets" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g14"><path d="M75.974 140.57c5.91 24.012-1.109 35.464-1.109 35.464h11.083" id="path10"/><path d="M54.886 140.57c-5.91 24.012 1.109 35.464 1.109 35.464H44.912" id="path12"/></g><path class="outer" fill="#2a670c" d="M65 5a40 54 0 0 0-40 54 40 54 0 0 0 0 9 50 50 0 0 0-9 30 50 50 0 0 0 49 49 50 50 0 0 0 50-49 50 50 0 0 0-10-30 40 54 0 0 0 1-9A40 54 0 0 0 65 5z" id="path18"/><path class="inner" fill="#c1e20c" d="M65 12a36 48 0 0 0-36 48 36 48 0 0 0 1 8 44 44 0 0 0-9 26 44 44 0 0 0 44 44 44 44 0 0 0 45-44 44 44 0 0 0-9-26 36 48 0 0 0 0-8 36 48 0 0 0-36-48z" id="path20"/><g class="seed" id="g28"><circle cx="66" cy="93" r="20" fill="#452c0c" id="circle24"/><path fill="#FFF2" d="M107-65a15 15 0 0 1-7 13 15 15 0 0 1-15 0 15 15 0 0 1-7-13" transform="rotate(90)" id="path26"/></g><g class="face" id="g44"><g class="eye izq" id="g34"><circle cx="58" cy="42" r="6" id="circle30"/><circle cx="56" cy="41" r="3" fill="#fff" id="circle32"/></g><g class="eye der" id="g40"><circle cx="73" cy="42" r="6" id="circle36"/><circle cx="72" cy="41" r="3" fill="#fff" id="circle38"/></g><path d="M73 53a8 8 0 0 1-4 7 8 8 0 0 1-8 0 8 8 0 0 1-4-7" id="path42"/></g></g></g><style id="style2"></style></svg>`;
  }
}

customElements.define("funko-figure", FunkoFigure);
