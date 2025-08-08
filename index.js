import{a as x,i as a,A as U,S as D,N as H,P as j,R as z}from"./assets/vendor-0_PbKLAl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const h=document.querySelector(".burger"),c=document.querySelector(".mobile-menu"),K=c.querySelector(".modal-window-close-btn"),V=c.querySelectorAll("a"),$=document.body;function G(){c.classList.add("open"),c.setAttribute("aria-hidden","false"),h.setAttribute("aria-expanded","true"),$.style.overflow="hidden"}function u(){c.classList.remove("open"),c.setAttribute("aria-hidden","true"),h.setAttribute("aria-expanded","false"),$.style.overflow=""}h.addEventListener("click",G);K.addEventListener("click",u);c.addEventListener("click",e=>{e.target===c&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.contains("open")&&u()});V.forEach(e=>{e.addEventListener("click",()=>{u()})});const w=document.querySelector(".header-logo");w&&w.addEventListener("click",e=>{e.preventDefault(),u();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const M=document.querySelector(".buy-btn");M&&M.addEventListener("click",e=>{e.preventDefault(),u();const t=document.querySelector("#furniture");t&&t.scrollIntoView({behavior:"smooth"})});const i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},f=document.getElementById("loader"),m=()=>{f&&f.classList.remove("hidden")},l=()=>{f&&f.classList.add("hidden")},R=()=>{i.loadMoreListBtn.classList.remove("hidden")},g=()=>{i.loadMoreListBtn.classList.add("hidden")},J="https://furniture-store.b.goit.study/api",v={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},L=x.create({baseURL:J,headers:{"Content-Type":"application/json"}}),q=async e=>{m();try{return(await L.get(v.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{l()}},Q=async(e,t=1)=>{m();try{return(await L.get(v.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{l()}},W=async(e=1,t=3)=>{m();try{return(await L.get(v.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{l()}};let C=[];const X=e=>{C=e},Y=e=>C.find(t=>t._id===e),Z=e=>{const{name:t,description:o,images:s,rate:r,price:n,sizes:p,color:F,category:O}=e,T=Math.round(r*2)/2,_=`
      <div class="gallery">
        <img src="${s[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${s[1]}" alt="${t}" class="gallery__item" />
          <img src="${s[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,N=F.map((E,k)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${E}"
        class="color-item"
        id="color-${k}"
        ${k===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${E}"></span>
    </label>
  `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${_}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${O.name}</p>
        <p class="product-price">${n} грн</p>
        <div class="css-star-rating" data-rating="${T}"></div>
        <div class="color-picker">${N}</div>
        <p class="product-description">${o}</p>
        <p class="product-size">Розміри: ${p}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},b=e=>{X(e);const t=e.map(({images:o,_id:s,type:r,price:n})=>`
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
    `).join("");i.furnitureList.innerHTML=t};let d=1;l();const ee=async()=>{d=1,m();const{furnitures:e,totalItems:t}=await q(d);l(),b(e);const o=Math.ceil(t/8);d>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):R()},te=async()=>{d++,g(),m();const{furnitures:e,totalItems:t}=await q(d);b(e),l();const o=Math.ceil(t/8);d>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):R()};async function re(e){m();const t=await Q(e);l(),t&&t.furnitures?(g(),b(t.furnitures)):(g(),i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const oe=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(I(t),re(t.dataset.id))},se=()=>{const e=document.querySelector(".btn-list-section-iv");e&&I(e)},I=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};ee();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",oe),se()});i.loadMoreListBtn.addEventListener("click",te);new U(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const S=document.getElementById("feedback-list"),B=document.getElementById("feedback-loader");function ne(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e)}function ie({name:e,descr:t,rate:o}){const s=ne(o),r=document.createElement("div");return r.className="swiper-slide",r.innerHTML=`
    <div class="feedback-card">
      <div class="rating" data-score="${s}"></div>
      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,new z(r.querySelector(".rating"),{readOnly:!0,score:s,starType:"i",starOn:"★",starOff:"☆",starHalf:"⯨"}),r}async function ce(){B.classList.remove("visually-hidden"),S.innerHTML="";try{const e=await W(1,10);console.log("Відгуки з API:",e);const t=e.feedbacks||[];if(!t.length){a.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(o=>{const s=ie({name:o.name||"Анонім",descr:o.descr||"",rate:o.rate||0});S.appendChild(s)}),new D(".swiper",{modules:[H,j],loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}catch(e){console.error(e),a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте пізніше.",position:"topRight"})}finally{B.classList.add("visually-hidden")}}ce();const P=e=>{e.code==="Escape"&&y()},A=e=>{e.target===i.productModal&&y()},ae=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",P),i.productModal.addEventListener("click",A)},y=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",P),i.productModal.removeEventListener("click",A)};i.modalCloseBtn.addEventListener("click",y);async function le(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const o=t.closest(".furniture-list-render-item"),s=o==null?void 0:o.dataset.id;if(!s)return;const r=Y(s);if(!r){a.error({title:"Error",message:"Товар не знайдено у кеші"});return}Z(r),ae()}i.furnitureList.addEventListener("click",le);document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(y(),i.orderModal.classList.add("is-open"),document.body.style.overflow="hidden")});console.log("order-modal");
//# sourceMappingURL=index.js.map
