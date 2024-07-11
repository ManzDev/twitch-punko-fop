(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();class p extends HTMLElement{connectedCallback(){this.type=this.getAttribute("type")??"FIGURE",this.render()}render(){this.innerHTML=`
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
    </div>`}}customElements.define("funko-logo",p);class g extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
    <div class="manzdev-container">
      <div class="manzdev"></div>
    </div>`}}customElements.define("manz-dev",g);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        font-size: 32px;
        color: #fff;
        transform: translate(0, 3px);
      }
    `}connectedCallback(){this.number=this.getAttribute("number"),this.render()}setNumber(e){this.shadowRoot.querySelector("span").textContent=e}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="box-number">
      <span>001</span>
    </div>`}}customElements.define("funko-number",a);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}showSubname(){return this.hasAttribute("subname")?`<div class="box-subname">${this.subname}</div>`:""}setName(e){this.shadowRoot.querySelector(".box-name").textContent=e}setSubName(e){this.shadowRoot.querySelector(".box-subname").textContent=e}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="box-data">
      <span class="box-name"></span>
      <span class="box-subname"></span>
    </div>`}}customElements.define("funko-name",i);class l extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
    <style>${l.styles}</style>
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
    </div>`}}customElements.define("box-front",l);class d extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
    <style>${d.styles}</style>
    <div class="box-left">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
        <funko-name only-name></funko-name>
        <funko-number></funko-number>
      </div>
    </div>`}}customElements.define("box-left",d);class c extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
    <style>${c.styles}</style>
    <div class="box-back">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
        <funko-number></funko-number>
      </div>
    </div>`}}customElements.define("box-back",c);class m extends HTMLElement{static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.innerHTML=`
    <style>${m.styles}</style>
    <div class="box-right">
      <div class="front-top"></div>
      <div class="front-side">
        <funko-name only-name></funko-name>
      </div>
      <div class="front-bottom">
        <funko-number></funko-number>
      </div>
      <funko-logo type="STREAMERS"></funko-logo>
      <manz-dev></manz-dev>
    </div>`}}customElements.define("box-right",m);class f extends HTMLElement{static get styles(){return`
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
    <style>${f.styles}</style>
    <div class="box-top">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
      </div>
    </div>`}}customElements.define("box-top",f);class u extends HTMLElement{static get styles(){return`
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
    <style>${u.styles}</style>
    <div class="box-bottom">
      <div class="inner-box">
        <funko-logo type="STREAMERS"></funko-logo>
        <manz-dev></manz-dev>
      </div>
    </div>`}}customElements.define("box-bottom",u);const h=new URL(location.href).searchParams.has("static");class b extends HTMLElement{static get styles(){return`
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
        transform: rotateY(26deg);

        & .figure-container {
          transform: translateZ(-25px) translateX(40px);
        }
      }

      .figure-container {
        width: 100%;
        height: 180%;
        display: grid;
        place-items: center;
        transform: translateZ(-100px) translateY(15px);

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
    `}connectedCallback(){this.render(),h&&this.classList.add("static"),this.setName(this.getAttribute("name")),this.setNumber(this.getAttribute("number")),this.setSubName(this.getAttribute("subname")),this.setImage(this.getAttribute("figure"))}static get observedAttributes(){return["name","number","subname","figure"]}setName(e){this.querySelectorAll("funko-name").forEach(t=>t.setName(e))}setSubName(e){this.querySelectorAll("funko-name").forEach(t=>t.setSubName(e))}setNumber(e){this.querySelectorAll("funko-number").forEach(t=>t.setNumber(e))}attributeChangedCallback(e,t,o){console.log({name:e,old:t,now:o}),e==="name"&&t&&this.setName(o),e==="subname"&&t&&this.setSubName(o),e==="number"&&t&&this.setNumber(o),e==="figure"&&t&&this.setImage(o)}setImage(e){const t=document.createElement("img");t.setAttribute("src",`https://manz.dev/assets/stickers/${e}`);const o=this.querySelector(".figure-container");o&&(o.innerHTML="",o.append(t))}render(){this.innerHTML=`
    <style>${b.styles}</style>
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
    </div>`}}customElements.define("punko-fop",b);
