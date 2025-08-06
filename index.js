import{a as l,i as u,S as c,N as a,P as f}from"./assets/vendor-B7ikqIBN.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();console.log("menu");const d="https://furniture-store.b.goit.study/api",p={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},m=l.create({baseURL:d,headers:{"Content-Type":"application/json"}});async function g(t=1,i=8){try{return(await m.get(p.FURNITURES,{params:{page:t,limit:i}})).data}catch{return u.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}}const y={furnitureList:document.querySelector(".furniture-list-render")};console.log("furniture-list");const h=async()=>{const{furnitures:t}=await g();b(t),console.log(t)};h();const b=t=>{const i=t.map(({images:s,_id:o,type:e,price:r})=>`
    <li class="furniture-list-render-item" data-id="${o}">
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
    `).join("");y.furnitureList.innerHTML=i};new c(".swiper",{modules:[a,f],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});console.log("feedback");console.log("furniture-details-modal");console.log("order-modal");
//# sourceMappingURL=index.js.map
