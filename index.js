import{a as F,i as d,A as I,S as O,N as _,P as N}from"./assets/vendor-C_6HI8ht.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const f=document.querySelector(".burger"),c=document.querySelector(".mobile-menu"),T=c.querySelector(".close"),E=c.querySelectorAll("a");function U(){c.classList.add("open"),c.setAttribute("aria-hidden","false"),f.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"}function u(){c.classList.remove("open"),c.setAttribute("aria-hidden","true"),f.setAttribute("aria-expanded","false"),document.body.style.overflow=""}f.addEventListener("click",U);T.addEventListener("click",u);c.addEventListener("click",e=>{e.target===c&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.contains("open")&&u()});E.forEach(e=>{e.addEventListener("click",u)});E.forEach(e=>{e.addEventListener("click",u)});const x="https://furniture-store.b.goit.study/api",g={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},y=F.create({baseURL:x,headers:{"Content-Type":"application/json"}}),M=async e=>{try{return(await y.get(g.FURNITURES,{params:{page:e,limit:8}})).data}catch{return d.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},D=async(e,t=1)=>{try{return(await y.get(g.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return d.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},j=async e=>{try{return(await y.get(g.FURNITURES)).data.furnitures.find(r=>r._id===e)}catch(t){throw d.error({title:"Error",message:"Не вдалося завантажити дані товару"}),t}},i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list")},p=document.getElementById("loader"),L=()=>{p&&p.classList.remove("hidden")},m=()=>{p&&p.classList.add("hidden")},w=()=>{i.loadMoreListBtn.classList.remove("hidden")},k=()=>{i.loadMoreListBtn.classList.add("hidden")},z=e=>{const{name:t,description:o,images:n,rate:r,price:s,sizes:a,color:R,category:C}=e,q=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,P=R.map((b,A)=>`
        <label class="color-checkbox-label">
          <input type="checkbox" name="color" value="${b}" class="color-item" id="color-${A}" />
          <span class="color-checkbox-circle" style="background-color: ${b}"></span>
        </label>
      `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${q}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${C.name}</p>
        <p class="product-price">${s} грн</p>
        <svg class="product-rating">${r}</svg>
        <div class="color-picker">${P}</div>
        <p class="product-description">${o}</p>
        <p class="product-size">Розміри: ${a}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},v=e=>{const t=e.map(({images:o,_id:n,type:r,price:s})=>`
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
    `).join("");i.furnitureList.innerHTML=t};let l=1;m();const H=async()=>{l=1,L();const{furnitures:e,totalItems:t}=await M(l);m(),k(),v(e);const o=Math.ceil(t/8);l>=o?d.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):w()},K=async()=>{l++,k(),L();const{furnitures:e,totalItems:t}=await M(l);v(e),m();const o=Math.ceil(t/8);l>=o?d.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):w()},G=async e=>{L();const t=await D(e);m(),t&&t.furnitures?v(t.furnitures):i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"},J=async e=>{const t=e.target.closest(".btn-list-section-iv");t&&(S(t),G(t.dataset.id))},Q=()=>{const e=document.querySelector(".btn-list-section-iv");e&&S(e)},S=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};H();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",J),Q()});i.loadMoreListBtn.addEventListener("click",K);new I(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});new O(".swiper",{modules:[_,N],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});console.log("feedback");const $=e=>{e.code==="Escape"&&h()},B=e=>{e.target===i.productModal&&h()},V=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",$),i.productModal.addEventListener("click",B)},h=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",$),i.productModal.removeEventListener("click",B)};i.modalCloseBtn.addEventListener("click",h);async function W(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const o=t.closest(".furniture-list-render-item"),n=o==null?void 0:o.dataset.id;if(n)try{const r=await j(n);z(r),V()}catch(r){console.error("Не вдалося отримати дані товару:",r)}}i.furnitureList.addEventListener("click",W);console.log("order-modal");
//# sourceMappingURL=index.js.map
