import{a as c,i as a,S as d,N as f,P as p}from"./assets/vendor-B7ikqIBN.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();console.log("menu");const m="https://furniture-store.b.goit.study/api",g={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},h=c.create({baseURL:m,headers:{"Content-Type":"application/json"}});async function y(t=1,i=8){try{return(await h.get(g.FURNITURES,{params:{page:t,limit:i}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}}const u={furnitureList:document.querySelector(".furniture-list-render")},o=document.getElementById("loader");function L(){o&&o.classList.remove("hidden")}function b(){o&&o.classList.add("hidden")}const E=t=>{const i=t.map(({images:n,_id:s,type:e,price:r})=>`
    <li class="furniture-list-render-item" data-id="${s}">
      <img class="furniture-list-render-img" src="${n[0]}" alt="${e}" />
      <h3 class="furniture-list-render-title">${e}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${r} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");u.furnitureList.innerHTML=i};async function w(){L();const t=await y();b(),t&&t.furnitures?E(t.furnitures):u.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"}w();new d(".swiper",{modules:[f,p],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});console.log("feedback");console.log("furniture-details-modal");console.log("order-modal");
//# sourceMappingURL=index.js.map
