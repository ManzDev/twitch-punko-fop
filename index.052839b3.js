const h=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};h();class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        transform-origin: 50% 50% -100px;
        transform: rotateY(20deg) translateX(-50px) translateZ(-100px) scale(0.6);
      }

      @keyframes figure-spin {
        0% { transform: rotateY(0deg) translateY(-20px) translateZ(-100px) scale(0.8); }
        100% { transform: rotateY(360deg) translateY(-20px) translateZ(-100px) scale(0.8); }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <svg width="128mm" height="128mm" viewBox="0 0 128 128" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg"><defs id="defs2"><filter style="color-interpolation-filters:sRGB" height="1.062" width="1.068" y="-.025" x="-.034" id="filter1481"><feGaussianBlur in="SourceAlpha" stdDeviation=".968" result="blur1" id="feGaussianBlur1457"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite1459"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 32.1057 -1.21" result="colormatrix1" id="feColorMatrix1461"/><feGaussianBlur stdDeviation=".429" result="blur2" id="feGaussianBlur1463"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1465"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix1467"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur1469"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1471"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood1473"/><feComposite in="flood" in2="colormatrix3" k2="1" operator="in" result="composite3" id="feComposite1475"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1477"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1479"/></filter><filter style="color-interpolation-filters:sRGB" height="1.049" width="1.05" y="-.019" x="-.025" id="filter1867"><feGaussianBlur in="SourceAlpha" stdDeviation=".489" result="blur1" id="feGaussianBlur1843"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite1845"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 32.1057 -1.21" result="colormatrix1" id="feColorMatrix1847"/><feGaussianBlur stdDeviation=".429" result="blur2" id="feGaussianBlur1849"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite1851"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix1853"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur1855"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix1857"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood1859"/><feComposite in="flood" in2="colormatrix3" k2="1" operator="in" result="composite3" id="feComposite1861"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite1863"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite1865"/></filter><filter style="color-interpolation-filters:sRGB" height="1.089" width="1.147" y="-.039" x="-.074" id="filter2942"><feGaussianBlur in="SourceAlpha" stdDeviation=".429" result="blur1" id="feGaussianBlur2918"/><feComposite in="blur1" in2="SourceGraphic" operator="xor" result="composite1" id="feComposite2920"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 23.432 -2.71903" result="colormatrix1" id="feColorMatrix2922"/><feGaussianBlur stdDeviation="1.925" result="blur2" id="feGaussianBlur2924"/><feComposite in="blur2" in2="blur2" operator="out" result="composite2" id="feComposite2926"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9.07553 -0" result="colormatrix2" id="feColorMatrix2928"/><feGaussianBlur stdDeviation=".407" result="blur3" id="feGaussianBlur2930"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1" result="colormatrix3" id="feColorMatrix2932"/><feFlood flood-opacity="1" flood-color="#FFF" result="flood" id="feFlood2934"/><feComposite in="flood" in2="colormatrix3" k2="1" operator="in" result="composite3" id="feComposite2936"/><feComposite in="SourceGraphic" in2="colormatrix3" operator="out" result="composite4" id="feComposite2938"/><feComposite in="composite4" in2="composite3" k2="1" k3="1" operator="arithmetic" result="composite5" id="feComposite2940"/></filter></defs><g id="layer1" transform="matrix(.94776 0 0 .94776 -.278 4.881)"><g id="g2080" style="filter:url(#filter2942)"><g class="arms" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g2044"><path d="M30.972 77.045C1.844 59.645 10.922 43 10.922 43" id="path2040"/><path d="M104.951 77.045C134.08 59.645 125 43 125 43" id="path2042"/></g><g class="feets" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g2050"><path d="M75.974 140.57c5.91 24.012-1.109 35.464-1.109 35.464h11.083" id="path2046"/><path d="M54.886 140.57c-5.91 24.012 1.109 35.464 1.109 35.464H44.912" id="path2048"/></g><path class="outer" fill="#2a670c" d="M65 5a40 54 0 0 0-40 54 40 54 0 0 0 0 9 50 50 0 0 0-9 30 50 50 0 0 0 49 49 50 50 0 0 0 50-49 50 50 0 0 0-10-30 40 54 0 0 0 1-9A40 54 0 0 0 65 5z" id="path2054"/><path class="inner" fill="#c1e20c" d="M65 12a36 48 0 0 0-36 48 36 48 0 0 0 1 8 44 44 0 0 0-9 26 44 44 0 0 0 44 44 44 44 0 0 0 45-44 44 44 0 0 0-9-26 36 48 0 0 0 0-8 36 48 0 0 0-36-48z" id="path2056"/><g class="seed" id="g2062"><circle cx="66" cy="93" r="20" fill="#452c0c" id="circle2058"/><path fill="#FFF2" d="M107-65a15 15 0 0 1-7 13 15 15 0 0 1-15 0 15 15 0 0 1-7-13" transform="rotate(90)" id="path2060"/></g><g class="face" id="g2078"><g class="eye izq" id="g2068"><circle cx="58" cy="42" r="6" id="circle2064"/><circle cx="56" cy="41" r="3" fill="#fff" id="circle2066"/></g><g class="eye der" id="g2074"><circle cx="73" cy="42" r="6" id="circle2070"/><circle cx="72" cy="41" r="3" fill="#fff" id="circle2072"/></g><path d="M73 53a8 8 0 0 1-4 7 8 8 0 0 1-8 0 8 8 0 0 1-4-7" id="path2076"/></g></g><g id="g869"><g class="arms" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g8"><path d="M30.972 77.045C1.844 59.645 10.922 43 10.922 43" id="path4"/><path d="M104.951 77.045C134.08 59.645 125 43 125 43" id="path6"/></g><g class="feets" fill="none" stroke="#000" stroke-linecap="round" stroke-width="4" id="g14"><path d="M75.974 140.57c5.91 24.012-1.109 35.464-1.109 35.464h11.083" id="path10"/><path d="M54.886 140.57c-5.91 24.012 1.109 35.464 1.109 35.464H44.912" id="path12"/></g><path class="outer" fill="#2a670c" d="M65 5a40 54 0 0 0-40 54 40 54 0 0 0 0 9 50 50 0 0 0-9 30 50 50 0 0 0 49 49 50 50 0 0 0 50-49 50 50 0 0 0-10-30 40 54 0 0 0 1-9A40 54 0 0 0 65 5z" id="path18"/><path class="inner" fill="#c1e20c" d="M65 12a36 48 0 0 0-36 48 36 48 0 0 0 1 8 44 44 0 0 0-9 26 44 44 0 0 0 44 44 44 44 0 0 0 45-44 44 44 0 0 0-9-26 36 48 0 0 0 0-8 36 48 0 0 0-36-48z" id="path20"/><g class="seed" id="g28"><circle cx="66" cy="93" r="20" fill="#452c0c" id="circle24"/><path fill="#FFF2" d="M107-65a15 15 0 0 1-7 13 15 15 0 0 1-15 0 15 15 0 0 1-7-13" transform="rotate(90)" id="path26"/></g><g class="face" id="g44"><g class="eye izq" id="g34"><circle cx="58" cy="42" r="6" id="circle30"/><circle cx="56" cy="41" r="3" fill="#fff" id="circle32"/></g><g class="eye der" id="g40"><circle cx="73" cy="42" r="6" id="circle36"/><circle cx="72" cy="41" r="3" fill="#fff" id="circle38"/></g><path d="M73 53a8 8 0 0 1-4 7 8 8 0 0 1-8 0 8 8 0 0 1-4-7" id="path42"/></g></g></g><style id="style2"></style></svg>`}}customElements.define("funko-figure",n);class g extends HTMLElement{connectedCallback(){var e;this.type=(e=this.getAttribute("type"))!=null?e:"FIGURE",this.render()}render(){this.innerHTML=`
    <div class="pop-logo">
      <div class="globe">
        <div class="pop-title">
          <div class="first p font">F</div>
          <div class="o font">o</div>
          <div class="second p font">P</div>
          <div class="exclamation font">!</div>
        </div>
        <div class="pop-subtitle">
          <span>${this.type}</span>
        </div>
      </div>
      <div class="triangle-container">
        <div class="triangle"></div>
      </div>
    </div>`}}customElements.define("funko-logo",g);class v extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
    <div class="manzdev-container">
      <div class="manzdev"></div>
    </div>`}}customElements.define("manz-dev",v);class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.number=this.getAttribute("number"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="box-number">
      <span>${this.number}</span>
    </div>`}}customElements.define("funko-number",a);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.name=this.getAttribute("name"),this.subname=this.getAttribute("subname"),this.render()}showSubname(){return this.hasAttribute("subname")?`<div class="box-subname">${this.subname}</div>`:""}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="box-data">
      <div class="box-name">${this.name}</div>
      ${this.showSubname()}
    </div>`}}customElements.define("funko-name",l);class d extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){var e;this.name=this.getAttribute("name"),this.number=(e=this.getAttribute("number"))!=null?e:"01",this.subname=this.getAttribute("subname"),this.render()}render(){this.innerHTML=`
    <style>${d.styles}</style>
    <div class="box-front">
      <div class="front-top">
        <div class="inner-box">
          <funko-number number="${this.number}"></funko-number>
        </div>
      </div>
      <div class="front-side">
        <div class="inner-box"></div>
      </div>
      <div class="front-bottom">
        <div class="inner-box">
          <funko-name name="${this.name}" subname="${this.subname}"></funko-name>
        </div>
      </div>
      <funko-logo type="STREAMERS"></funko-logo>
      <div class="funko-logo-globe"></div>
      <manz-dev></manz-dev>
    </div>`}}customElements.define("box-front",d);class c extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){var e;this.name=this.getAttribute("name"),this.number=(e=this.getAttribute("number"))!=null?e:"01",this.render()}render(){this.innerHTML=`
    <style>${c.styles}</style>
    <div class="box-left">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
        <funko-name name="${this.name}"></funko-name>
        <funko-number number="${this.number}"></funko-number>
      </div>
    </div>`}}customElements.define("box-left",c);class f extends HTMLElement{static get styles(){return`
      .box-back {
        position: relative;
      }

      .box-back .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .box-back funko-logo {
        transform: scale(0.6) translateY(-20px);
      }

      .box-back manz-dev {
        transform: scale(1) translate(0px, -40px) rotate(5deg);
      }

      .box-back funko-number {
        transform: scale(0.8) translate(-20px, 20px);
        position: absolute;
        top: 0;
        right :0;
      }
    `}connectedCallback(){var e;this.number=(e=this.getAttribute("number"))!=null?e:"01",this.render()}render(){this.innerHTML=`
    <style>${f.styles}</style>
    <div class="box-back">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
        <funko-number number="${this.number}"></funko-number>
      </div>
    </div>`}}customElements.define("box-back",f);class u extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){var e;this.name=this.getAttribute("name"),this.number=(e=this.getAttribute("number"))!=null?e:"01",this.subname=this.getAttribute("subname"),this.render()}render(){this.innerHTML=`
    <style>${u.styles}</style>
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
    </div>`}}customElements.define("box-right",u);class m extends HTMLElement{static get styles(){return`
      .box-top .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .box-top funko-logo {
        transform: scale(0.6) translate(125px, 175px);
      }

      .box-top manz-dev {
        transform: scale(0.8) translate(-200px, -25px) rotate(5deg);
      }
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
    <style>${m.styles}</style>
    <div class="box-top">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
      </div>
    </div>`}}customElements.define("box-top",m);class p extends HTMLElement{static get styles(){return`
      .box-bottom .inner-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .box-bottom funko-logo {
        transform: scale(0.6) translate(125px, 175px);
      }

      .box-bottom manz-dev {
        transform: scale(0.8) translate(-300px, -25px) rotate(5deg);
      }
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
    <style>${p.styles}</style>
    <div class="box-bottom">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
      </div>
    </div>`}}customElements.define("box-bottom",p);class b extends HTMLElement{static get styles(){return`
      .container {
        width: 350px;
        height: 250px;
        perspective: 1500px;
        position: relative;
      }

      .punko-fop {
        display: flex;
        width: 350px;
        margin: auto;
        gap: 10px;
        transform-style: preserve-3d;
        transform-origin: 50% 50% -100px;
        transform: rotateY(-22deg) rotateX(360deg);
        animation: spin 5s linear infinite;
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
    `}connectedCallback(){var i;this.name=this.getAttribute("name"),this.number=(i=this.getAttribute("number"))!=null?i:"01",this.subname=this.getAttribute("subname"),this.render();const e=new URL(location.href).searchParams.get("avocado")==="1";if(console.log(e),e){const s=document.createElement("funko-figure");this.querySelector(".punko-fop").appendChild(s)}}render(){this.innerHTML=`
    <style>${b.styles}</style>
    <div class="container">
      <div class="punko-fop">
        <box-top></box-top>
        <box-bottom></box-bottom>
        <box-right number="${this.number}" name="${this.name}"></box-right>
        <box-front number="${this.number}" name="${this.name}" subname="${this.subname}"></box-front>
        <box-left number="${this.number}" name="${this.name}"></box-left>
        <box-back number="${this.number}"></box-back>
      </div>
    </div>`}}customElements.define("punko-fop",b);
