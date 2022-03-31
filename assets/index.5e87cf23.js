var D=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(o,e,t)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,C=(o,e)=>{for(var t in e||(e={}))A.call(e,t)&&x(o,t,e[t]);if(y)for(var t of y(e))R.call(e,t)&&x(o,t,e[t]);return o};import{E as z,F as O,o as d,c as p,a as w,b as c,d as b,e as u,u as v,f as F,v as L,g as U,h as l,r as I,w as M,i as g,j as E,k,R as B,l as V,m as N,n as P,p as T}from"./vendor.88e9cdda.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};q();var J="./logo.svg";const H="modulepreload",$={},K="./",G=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${K}${i}`,i in $)return;$[i]=!0;const s=i.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":H,s||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),s)return new Promise((a,h)=>{r.addEventListener("load",a),r.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};var W=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
`,Y=`import { createApp } from 'vue'
import App from './App.vue'
import dsaUI from '@qif/dsa-ui-v3'
import "@qif/dsa-ui-v3/dist/theme-default/index.css"; // \u6D4B\u8BD5

createApp(App).use(dsaUI).mount('#app')
`,Z=`{
  "name": "vite-vue-starter",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.0",
		"@qif/dsa-ui-v3": "0.0.6"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.4.0",
    "@vue/compiler-sfc": "^3.2.0",
    "vite": "^2.4.4"
  }
}`,Q=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
`,X=`# Vite Vue Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
npm install
npm run dev

# if using yarn:
yarn
yarn dev
\`\`\`
`;const ee=["dsa-ui-v3.js","import-map.json"];function te(o){z.confirm("\u662F\u5426\u4E0B\u8F7D\u9879\u76EE","",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{const{default:e}=await G(()=>import("./jszip.min.976f7155.js").then(function(r){return r.j}),["assets/jszip.min.976f7155.js","assets/vendor.88e9cdda.js"]),t=new e;t.file("index.html",W),t.file("package.json",Z),t.file("vite.config.js",Q),t.file("README.md",X);const i=t.folder("src");i.file("main.js",Y);const s=o.getFiles();for(const r in s)if(!ee.includes(r)){let a=s[r];r==="App.vue"&&(a=a.replace(`import { setupDsaUi } from './dsa-ui-v3.js'
`,"").replace(`setupDsaUi()
`,"")),i.file(r,s[r])}const n=await t.generateAsync({type:"blob"});O.exports.saveAs(n,"vue-project.zip")})}var m=(o,e)=>{const t=o.__vccOpts||o;for(const[i,s]of e)t[i]=s;return t};const se={},ne={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ie=w('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),oe=[ie];function re(o,e){return d(),p("svg",ne,oe)}var ce=m(se,[["render",re]]);const ae={},le={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ue=c("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),de=[ue];function pe(o,e){return d(),p("svg",le,de)}var fe=m(ae,[["render",pe]]);const he={},me={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},ve=w('<g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),_e=[ve];function ge(o,e){return d(),p("svg",me,_e)}var we=m(he,[["render",ge]]);const ye={},xe={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24"},Ce=w('<g fill="#666"><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g>',1),Ee=[Ce];function ke(o,e){return d(),p("svg",xe,Ee)}var $e=m(ye,[["render",ke]]);const je={},be={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24"},Fe=c("path",{fill:"#666",d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"},null,-1),Me=[Fe];function Se(o,e){return d(),p("svg",be,Me)}var De=m(je,[["render",Se]]);const Ae=c("h1",null,[c("img",{alt:"logo",src:J}),c("span",null,"dsa ui Playground")],-1),Re={class:"links"},ze={title:"\u8DF3\u8F6C\u5230\u4EE3\u7801\u4ED3\u5E93",class:"github"},Oe={href:"http://172.26.1.145/pro/software/devlib/software_products_RD/dev/dept_platform/commonlib/web/dsa-design-v3/tree/main/playground",target:"_blank"},Le=b({props:["store"],setup(o){async function e(){await navigator.clipboard.writeText(location.href),F.success("\u5206\u4EAB\u94FE\u63A5\u5DF2\u590D\u5236")}function t(){const i=document.documentElement.classList;i.toggle("dark"),localStorage.setItem("vue-sfc-playground-prefer-dark",String(i.contains("dark")))}return(i,s)=>(d(),p("nav",null,[Ae,c("div",Re,[c("button",{title:"\u5207\u6362\u4E3B\u9898",class:"toggle-dark",onClick:t},[u(ce,{class:"light"}),u(fe,{class:"dark"})]),c("button",{title:"\u5206\u4EAB",class:"share",onClick:e},[u(we)]),c("button",{title:"\u4E0B\u8F7D\u9879\u76EE\u6587\u4EF6",class:"download",onClick:s[0]||(s[0]=n=>v(te)(o.store))},[u($e)]),c("button",ze,[c("a",Oe,[u(De)])])])]))}});function Ue(o){return btoa(unescape(encodeURIComponent(o)))}function Ie(o){return decodeURIComponent(escape(atob(o)))}const f="App.vue",_="dsa-ui-v3.js",Be={"@qif/dsa-ui-v3":"./dsa.esm.js"},Ve="./dsa.css",j=`<script setup lang='ts'>
import { ref } from 'vue'
import { setupDsaUi } from './${_}'

setupDsaUi()

const msg = ref('Hello DsaUI!')
<\/script>

<template>
  <h1>{{msg}}</h1>
  <com-icon icon='home-fill'></com-icon>
</template>
`,Ne=`import dsaUI from '@qif/dsa-ui-v3'
import { getCurrentInstance } from 'vue'

await loadStyle()

export function setupDsaUi() {
  const instance = getCurrentInstance()
  instance.appContext.app.use(dsaUI)
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${Ve}'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}
`;class Pe{constructor({serializedState:e="",defaultVueRuntimeURL:t=`https://unpkg.com/@vue/runtime-dom@${L}/dist/runtime-dom.esm-browser.js`,showOutput:i=!1,outputMode:s="preview"}){this.compiler=U,this.initialOutputMode="preview";let n={};if(e){const a=JSON.parse(Ie(e));for(const h of Object.keys(a))n[h]=new l(h,a[h])}else n={[f]:new l(f,j)};this.defaultVueRuntimeURL=t,this.initialShowOutput=i,this.initialOutputMode=s;let r=f;n[r]||(r=Object.keys(n)[0]),this.state=I({mainFile:r,files:n,activeFile:n[r],errors:[],vueRuntimeURL:this.defaultVueRuntimeURL}),this.initImportMap(),this.state.files[_]=new l(_,Ne,!0),M(()=>g(this,this.state.activeFile));for(const a in this.state.files)a!==f&&g(this,this.state.files[a])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new l(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){if(e===_){F.warning("dsa \u4F9D\u8D56\u8FD9\u4E2A\u6587\u4EF6");return}confirm(`\u662F\u5426\u60F3\u8981\u5220\u9664\u8FD9\u4E2A\u6587\u4EF6 ${e}?`)&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}serialize(){return"#"+Ue(JSON.stringify(this.getFiles()))}getFiles(){const e={};for(const t in this.state.files)e[t]=this.state.files[t].code;return e}async setFiles(e,t=f){const i={};t===f&&!e[t]&&(i[t]=new l(t,j));for(const[s,n]of Object.entries(e))i[s]=new l(s,n);for(const s of Object.values(i))await g(this,s);this.state.mainFile=t,this.state.files=i,this.initImportMap(),this.setActive(t)}initImportMap(){const e=this.state.files["import-map.json"];if(!e)this.state.files["import-map.json"]=new l("import-map.json",JSON.stringify({imports:C({vue:this.defaultVueRuntimeURL},Be)},null,2));else try{const t=JSON.parse(e.code);t.imports.vue||(t.imports.vue=this.defaultVueRuntimeURL,e.code=JSON.stringify(t,null,2))}catch{}}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}}const Te=b({setup(o){const e=()=>{document.documentElement.style.setProperty("--vh",window.innerHeight+"px")};window.addEventListener("resize",e),e();const t=new Pe({serializedState:location.hash.slice(1),defaultVueRuntimeURL:void 0}),i={script:{reactivityTransform:!0}};return M(()=>history.replaceState({},"",t.serialize())),(s,n)=>(d(),p(V,null,[u(Le,{store:v(t)},null,8,["store"]),u(v(B),{onKeydown:[n[0]||(n[0]=E(k(()=>{},["ctrl","prevent"]),["s"])),n[1]||(n[1]=E(k(()=>{},["meta","prevent"]),["s"]))],store:v(t),showCompileOutput:!0,autoResize:!0,sfcOptions:i,clearConsole:!1},null,8,["store"])],64))}});const S=N(Te);S.use(P,{locale:T});S.mount("#app");
