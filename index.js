import{a as U,i as a,A as D,S as H,N as j,P as z,R as K}from"./assets/vendor-0_PbKLAl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const g=document.querySelector(".burger"),c=document.querySelector(".mobile-menu"),V=c.querySelector(".modal-window-close-btn"),G=c.querySelectorAll("a"),S=document.body;function J(){c.classList.add("open"),c.setAttribute("aria-hidden","false"),g.setAttribute("aria-expanded","true"),S.style.overflow="hidden"}function d(){c.classList.remove("open"),c.setAttribute("aria-hidden","true"),g.setAttribute("aria-expanded","false"),S.style.overflow=""}g.addEventListener("click",J);V.addEventListener("click",d);c.addEventListener("click",e=>{e.target===c&&d()});document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.contains("open")&&d()});G.forEach(e=>{e.addEventListener("click",()=>{d()})});const E=document.querySelector(".header-logo");E&&E.addEventListener("click",e=>{e.preventDefault(),d();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const k=document.querySelector(".buy-btn");k&&k.addEventListener("click",e=>{e.preventDefault(),d();const t=document.querySelector("#furniture");t&&t.scrollIntoView({behavior:"smooth"})});const i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},p=document.getElementById("loader"),f=()=>{p&&p.classList.remove("hidden")},m=()=>{p&&p.classList.add("hidden")},B=()=>{i.loadMoreListBtn.classList.remove("hidden")},$=()=>{i.loadMoreListBtn.classList.add("hidden")},Q="https://furniture-store.b.goit.study/api",h={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},v=U.create({baseURL:Q,headers:{"Content-Type":"application/json"}}),R=async e=>{f();try{return(await v.get(h.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{m()}},W=async(e=1,t=3)=>{f();try{return(await v.get(h.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{m()}};let q=[];const P=e=>{q=e},X=e=>q.find(t=>t._id===e),Y=async()=>{try{const t=(await v.get(h.FURNITURES)).data.furnitures;return P(t),t}catch(e){throw a.error({title:"Error",message:"Не вдалося завантажити товари"}),e}};async function Z(){try{await Y()}catch(e){console.error(e)}}Z();const ee=e=>{const{name:t,description:o,images:s,rate:r,price:n,sizes:u,color:F,category:T}=e,_=Math.round(r*2)/2,N=`
      <div class="gallery">
        <img src="${s[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${s[1]}" alt="${t}" class="gallery__item" />
          <img src="${s[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,x=F.map((L,b)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${L}"
        class="color-item"
        id="color-${b}"
        ${b===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${L}"></span>
    </label>
  `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${N}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${T.name}</p>
        <p class="product-price">${n} грн</p>
        <div class="css-star-rating" data-rating="${_}"></div>
        <div class="color-picker">${x}</div>
        <p class="product-description">${o}</p>
        <p class="product-size">Розміри: ${u}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},C=e=>{P(e);const t=e.map(({images:o,_id:s,type:r,price:n})=>`
    <li class="furniture-list-render-item" data-id="${s}">
      <img class="furniture-list-render-img" src="${o[0]}" alt="${r}" />
      <h3 class="furniture-list-render-title">${r}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${n} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");i.furnitureList.innerHTML=t};let l=1;m();const te=async()=>{l=1,f();const{furnitures:e,totalItems:t}=await R(l);m(),$(),C(e);const o=Math.ceil(t/8);l>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):B()},re=async()=>{l++,$(),f();const{furnitures:e,totalItems:t}=await R(l);C(e),m();const o=Math.ceil(t/8);l>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):B()},oe=async e=>{const t=e.target.closest(".btn-list-section-iv");t&&(I(t),loadFurnitureByCategory(t.dataset.id))},se=()=>{const e=document.querySelector(".btn-list-section-iv");e&&I(e)},I=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};te();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",oe),se()});i.loadMoreListBtn.addEventListener("click",re);new D(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const w=document.getElementById("feedback-list"),M=document.getElementById("feedback-loader");function ne(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e)}function ie({name:e,descr:t,rate:o}){const s=ne(o),r=document.createElement("div");return r.className="swiper-slide",r.innerHTML=`
    <div class="feedback-card">
      <div class="rating" data-score="${s}"></div>
      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,new K(r.querySelector(".rating"),{readOnly:!0,score:s,starType:"i",starOn:"★",starOff:"☆",starHalf:"⯨"}),r}async function ce(){M.classList.remove("visually-hidden"),w.innerHTML="";try{const e=await W(1,10);console.log("Відгуки з API:",e);const t=e.feedbacks||[];if(!t.length){a.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(o=>{const s=ie({name:o.name||"Анонім",descr:o.descr||"",rate:o.rate||0});w.appendChild(s)}),new H(".swiper",{modules:[j,z],loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}catch(e){console.error(e),a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте пізніше.",position:"topRight"})}finally{M.classList.add("visually-hidden")}}ce();const A=e=>{e.code==="Escape"&&y()},O=e=>{e.target===i.productModal&&y()},ae=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",A),i.productModal.addEventListener("click",O)},y=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",A),i.productModal.removeEventListener("click",O)};i.modalCloseBtn.addEventListener("click",y);async function le(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const o=t.closest(".furniture-list-render-item"),s=o==null?void 0:o.dataset.id;if(!s)return;const r=X(s);if(!r){a.error({title:"Error",message:"Товар не знайдено у кеші"});return}ee(r),ae()}i.furnitureList.addEventListener("click",le);document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(y(),i.orderModal.classList.add("is-open"),document.body.style.overflow="hidden")});console.log("order-modal");
//# sourceMappingURL=index.js.map
