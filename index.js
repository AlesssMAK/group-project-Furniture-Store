import{a as C,i as a,S as P,N as F,P as I}from"./assets/vendor-T0aOC-0K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();console.log("menu");const _="https://furniture-store.b.goit.study/api",p={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},m=C.create({baseURL:_,headers:{"Content-Type":"application/json"}}),v=async e=>{try{return(await m.get(p.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},N=async(e,t=1)=>{try{return(await m.get(p.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},O=async e=>{try{return(await m.get(p.FURNITURES)).data.furnitures.find(r=>r._id===e)}catch(t){throw a.error({title:"Error",message:"Не вдалося завантажити дані товару"}),t}},i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list")},d=document.getElementById("loader"),f=()=>{d&&d.classList.remove("hidden")},u=()=>{d&&d.classList.add("hidden")},L=()=>{i.loadMoreListBtn.classList.remove("hidden")},b=()=>{i.loadMoreListBtn.classList.add("hidden")},T=e=>{const{name:t,description:o,images:n,rate:r,price:s,sizes:l,color:$,category:k}=e,S=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,B=$.map((h,R)=>`
        <label class="color-checkbox-label">
          <input type="checkbox" name="color" value="${h}" class="color-item" id="color-${R}" />
          <span class="color-checkbox-circle" style="background-color: ${h}"></span>
        </label>
      `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${S}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${k.name}</p>
        <p class="product-price">${s} грн</p>
        <svg class="product-rating">${r}</svg>
        <div class="color-picker">${B}</div>
        <p class="product-description">${o}</p>
        <p class="product-size">Розміри: ${l}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},g=e=>{const t=e.map(({images:o,_id:n,type:r,price:s})=>`
    <li class="furniture-list-render-item" data-id="${n}">
      <img class="furniture-list-render-img" src="${o[0]}" alt="${r}" />
      <h3 class="furniture-list-render-title">${r}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${s} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");i.furnitureList.innerHTML=t};let c=1;u();const q=async()=>{c=1,f();const{furnitures:e,totalItems:t}=await v(c);u(),b(),g(e);const o=Math.ceil(t/8);c>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):L()},U=async()=>{c++,b(),f();const{furnitures:e,totalItems:t}=await v(c);g(e),u();const o=Math.ceil(t/8);c>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):L()},x=async e=>{f();const t=await N(e);u(),t&&t.furnitures?g(t.furnitures):i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"},A=async e=>{const t=e.target.closest(".btn-list-section-iv");t&&(M(t),x(t.dataset.id))},D=()=>{const e=document.querySelector(".btn-list-section-iv");e&&M(e)},M=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};q();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",A),D()});i.loadMoreListBtn.addEventListener("click",U);new P(".swiper",{modules:[F,I],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});console.log("feedback");const E=e=>{e.code==="Escape"&&y()},w=e=>{e.target===i.productModal&&y()},j=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",E),i.productModal.addEventListener("click",w)},y=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",E),i.productModal.removeEventListener("click",w)};i.modalCloseBtn.addEventListener("click",y);async function z(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const o=t.closest(".furniture-list-render-item"),n=o==null?void 0:o.dataset.id;if(n)try{const r=await O(n);T(r),j()}catch(r){console.error("Не вдалося отримати дані товару:",r)}}i.furnitureList.addEventListener("click",z);console.log("order-modal");
//# sourceMappingURL=index.js.map
