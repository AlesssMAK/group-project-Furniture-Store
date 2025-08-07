import{a as O,i as a,A as T,S as N,N as _,P as x,R as U}from"./assets/vendor-0_PbKLAl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const y=document.querySelector(".burger"),c=document.querySelector(".mobile-menu"),H=c.querySelector(".close"),w=c.querySelectorAll("a");function D(){c.classList.add("open"),c.setAttribute("aria-hidden","false"),y.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"}function u(){c.classList.remove("open"),c.setAttribute("aria-hidden","true"),y.setAttribute("aria-expanded","false"),document.body.style.overflow=""}y.addEventListener("click",D);H.addEventListener("click",u);c.addEventListener("click",e=>{e.target===c&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&c.classList.contains("open")&&u()});w.forEach(e=>{e.addEventListener("click",u)});w.forEach(e=>{e.addEventListener("click",u)});const j="https://furniture-store.b.goit.study/api",m={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},f=O.create({baseURL:j,headers:{"Content-Type":"application/json"}}),M=async e=>{try{return(await f.get(m.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},z=async(e,t=1)=>{try{return(await f.get(m.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},K=async(e=1,t=3)=>{try{return(await f.get(m.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}},G=async e=>{try{return(await f.get(m.FURNITURES)).data.furnitures.find(r=>r._id===e)}catch(t){throw a.error({title:"Error",message:"Не вдалося завантажити дані товару"}),t}},i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list")},p=document.getElementById("loader"),h=()=>{p&&p.classList.remove("hidden")},g=()=>{p&&p.classList.add("hidden")},S=()=>{i.loadMoreListBtn.classList.remove("hidden")},$=()=>{i.loadMoreListBtn.classList.add("hidden")},J=e=>{const{name:t,description:o,images:s,rate:r,price:n,sizes:d,color:A,category:F}=e,I=`
      <div class="gallery">
        <img src="${s[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${s[1]}" alt="${t}" class="gallery__item" />
          <img src="${s[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,P=A.map((b,q)=>`
        <label class="color-checkbox-label">
          <input type="checkbox" name="color" value="${b}" class="color-item" id="color-${q}" />
          <span class="color-checkbox-circle" style="background-color: ${b}"></span>
        </label>
      `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${I}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${F.name}</p>
        <p class="product-price">${n} грн</p>
        <svg class="product-rating">${r}</svg>
        <div class="color-picker">${P}</div>
        <p class="product-description">${o}</p>
        <p class="product-size">Розміри: ${d}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},v=e=>{const t=e.map(({images:o,_id:s,type:r,price:n})=>`
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
    `).join("");i.furnitureList.innerHTML=t};let l=1;g();const Q=async()=>{l=1,h();const{furnitures:e,totalItems:t}=await M(l);g(),$(),v(e);const o=Math.ceil(t/8);l>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):S()},V=async()=>{l++,$(),h();const{furnitures:e,totalItems:t}=await M(l);v(e),g();const o=Math.ceil(t/8);l>=o?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):S()},W=async e=>{h();const t=await z(e);g(),t&&t.furnitures?v(t.furnitures):i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"},X=async e=>{const t=e.target.closest(".btn-list-section-iv");t&&(B(t),W(t.dataset.id))},Y=()=>{const e=document.querySelector(".btn-list-section-iv");e&&B(e)},B=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};Q();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",X),Y()});i.loadMoreListBtn.addEventListener("click",V);new T(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const E=document.getElementById("feedback-list"),k=document.getElementById("feedback-loader");function Z(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e)}function ee({name:e,descr:t,rate:o}){const s=Z(o),r=document.createElement("div");return r.className="swiper-slide",r.innerHTML=`
    <div class="feedback-card">
      <div class="rating" data-score="${s}"></div>
      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,new U(r.querySelector(".rating"),{readOnly:!0,score:s,starType:"i",starOn:"★",starOff:"☆",starHalf:"⯨"}),r}async function te(){k.classList.remove("visually-hidden"),E.innerHTML="";try{const e=await K(1,10);console.log("Відгуки з API:",e);const t=e.feedbacks||[];if(!t.length){a.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(o=>{const s=ee({name:o.name||"Анонім",descr:o.descr||"",rate:o.rate||0});E.appendChild(s)}),new N(".swiper",{modules:[_,x],loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}catch(e){console.error(e),a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте пізніше.",position:"topRight"})}finally{k.classList.add("visually-hidden")}}te();const R=e=>{e.code==="Escape"&&L()},C=e=>{e.target===i.productModal&&L()},re=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",R),i.productModal.addEventListener("click",C)},L=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",R),i.productModal.removeEventListener("click",C)};i.modalCloseBtn.addEventListener("click",L);async function oe(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const o=t.closest(".furniture-list-render-item"),s=o==null?void 0:o.dataset.id;if(s)try{const r=await G(s);J(r),re()}catch(r){console.error("Не вдалося отримати дані товару:",r)}}i.furnitureList.addEventListener("click",oe);console.log("order-modal");
//# sourceMappingURL=index.js.map
