import{a as S,i as a,S as k,N as C,P as R}from"./assets/vendor-B7ikqIBN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();console.log("menu");const B="https://furniture-store.b.goit.study/api",d={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},u=S.create({baseURL:B,headers:{"Content-Type":"application/json"}});async function F(e=1,t=8){try{return(await u.get(d.FURNITURES,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}}async function T(e,t=1,s=8){try{return(await u.get(d.FURNITURES,{params:{category:e,page:t,limit:s}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}}const _=async e=>{try{return(await u.get(d.FURNITURES)).data.furnitures.find(r=>r._id===e)}catch(t){throw a.error({title:"Error",message:"Не вдалося завантажити дані товару"}),t}},n={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv")},l=document.getElementById("loader");function m(){l&&l.classList.remove("hidden")}function g(){l&&l.classList.add("hidden")}const y=e=>{const t=e.map(({images:s,_id:i,type:r,price:o})=>`
    <li class="furniture-list-render-item" data-id="${i}">
      <img class="furniture-list-render-img" src="${s[0]}" alt="${r}" />
      <h3 class="furniture-list-render-title">${r}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${o} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");n.furnitureList.innerHTML=t};async function N(){m();const e=await F();g(),e&&e.furnitures?y(e.furnitures):n.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"}async function O(e){m();const t=await T(e);g(),t&&t.furnitures?y(t.furnitures):n.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"}const P=async e=>{const t=e.target.closest(".btn-list-section-iv");t&&(v(t),O(t.dataset.id))},I=()=>{const e=document.querySelector(".btn-list-section-iv");e&&v(e)},v=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};N();document.addEventListener("DOMContentLoaded",()=>{n.categoriesList.addEventListener("click",P),I()});new k(".swiper",{modules:[C,R],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});console.log("feedback");const U=e=>{const{name:t,description:s,images:i,rate:r,price:o,sizes:c,color:b,category:E}=e,w=`
      <div class="gallery">
        <img src="${i[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${i[1]}" alt="${t}" class="gallery__item" />
          <img src="${i[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,$=b.map((f,M)=>`
        <label class="color-checkbox-label">
          <input type="checkbox" name="color" value="${f}" class="color-item" id="color-${M}" />
          <span class="color-checkbox-circle" style="background-color: ${f}"></span>
        </label>
      `).join("");n.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${w}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${E.name}</p>
        <p class="product-price">${o} грн</p>
        <svg class="product-rating">${r}</svg>
        <div class="color-picker">${$}</div>
        <p class="product-description">${s}</p>
        <p class="product-size">Розміри: ${c}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},h=e=>{e.code==="Escape"&&p()},L=e=>{e.target===n.productModal&&p()},q=e=>{n.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",h),n.productModal.addEventListener("click",L)},p=()=>{n.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",h),n.productModal.removeEventListener("click",L)};n.modalCloseBtn.addEventListener("click",p);async function x(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const s=t.closest(".furniture-list-render-item"),i=s==null?void 0:s.dataset.id;if(i)try{const r=await _(i);U(r),q()}catch(r){console.error("Не вдалося отримати дані товару:",r)}}n.furnitureList.addEventListener("click",x);console.log("order-modal");
//# sourceMappingURL=index.js.map
