(()=>{"use strict";var t={244:(t,e,n)=>{t.exports=n.p+"./favicon.ico"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{n(244);const t=document.getElementById("menu-btn"),e=document.getElementById("sidebar"),r=document.getElementById("close-menu-btn"),i=document.getElementById("shade");t.addEventListener("click",(()=>{c()})),r.addEventListener("click",(()=>{c()})),i.addEventListener("click",(()=>{c()})),window.addEventListener("resize",(()=>{window.innerWidth>=768&&!i.classList.contains("hidden")&&c()}));const c=()=>{e.classList.toggle("-translate-x-full"),i.classList.toggle("hidden")}})()})();