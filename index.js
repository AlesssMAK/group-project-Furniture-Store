import{a as l,S as u,N as c,P as a}from"./assets/vendor-DzSGsl1D.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();console.log("menu");const f="https://furniture-store.b.goit.study/api/",d={FORNITURES:"furnitures"};l.defaults.baseURL=f;const p=async()=>{const{data:t}=await l(`${d.FORNITURES}?page=1&limit=8`);return t},m={furnitureList:document.querySelector(".furniture-list-render")};console.log("furniture-list");const g=async()=>{const{furnitures:t}=await p();y(t),console.log(t)};g();const y=t=>{const i=t.map(({images:s,_id:n,type:e,price:r})=>`
    <li class="furniture-list-render-item" data-id="${n}">
      <img class="furniture-list-render-img" src="${s[0]}" alt="${e}" />
      <h3 class="furniture-list-render-title">${e}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
        <p class="furniture-list-render-price">${r} грн</p>
        <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");m.furnitureList.innerHTML=i};new u(".swiper",{modules:[c,a],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});console.log("feedback");console.log("furniture-details-modal");console.log("order-modal");
//# sourceMappingURL=index.js.map
