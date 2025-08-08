import{a as x,i as c,A as D,S as H,N as j,P as z,R as K}from"./assets/vendor-0_PbKLAl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const g=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),V=a.querySelector(".modal-window-close-btn"),G=a.querySelectorAll("a"),$=document.body;function J(){a.classList.add("open"),a.setAttribute("aria-hidden","false"),g.setAttribute("aria-expanded","true"),$.style.overflow="hidden"}function d(){a.classList.remove("open"),a.setAttribute("aria-hidden","true"),g.setAttribute("aria-expanded","false"),$.style.overflow=""}g.addEventListener("click",J);V.addEventListener("click",d);a.addEventListener("click",e=>{e.target===a&&d()});document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.contains("open")&&d()});G.forEach(e=>{e.addEventListener("click",()=>{d()})});const w=document.querySelector(".header-logo");w&&w.addEventListener("click",e=>{e.preventDefault(),d();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const k=document.querySelector(".buy-btn");k&&k.addEventListener("click",e=>{e.preventDefault(),d();const t=document.querySelector("#furniture");t&&t.scrollIntoView({behavior:"smooth"})});const Q="https://furniture-store.b.goit.study/api",m={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},f=x.create({baseURL:Q,headers:{"Content-Type":"application/json"}}),B=async e=>{try{return(await f.get(m.FURNITURES,{params:{page:e,limit:8}})).data}catch{return c.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},W=async(e,t=1)=>{try{return(await f.get(m.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return c.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}},X=async(e=1,t=3)=>{try{return(await f.get(m.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return c.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}};let R=[];const q=e=>{R=e},Y=e=>R.find(t=>t._id===e),Z=async()=>{try{const t=(await f.get(m.FURNITURES)).data.furnitures;return q(t),t}catch(e){throw c.error({title:"Error",message:"Не вдалося завантажити товари"}),e}},i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list")},p=document.getElementById("loader"),h=()=>{p&&p.classList.remove("hidden")},y=()=>{p&&p.classList.add("hidden")},C=()=>{i.loadMoreListBtn.classList.remove("hidden")},I=()=>{i.loadMoreListBtn.classList.add("hidden")};async function ee(){try{await Z()}catch(e){console.error(e)}}ee();const te=e=>{const{name:t,description:o,images:s,rate:r,price:n,sizes:u,color:O,category:T}=e,N=Math.round(r*2)/2,_=`
      <div class="gallery">
        <img src="${s[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${s[1]}" alt="${t}" class="gallery__item" />
          <img src="${s[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,U=O.map((b,E)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${b}"
        class="color-item"
        id="color-${E}"
        ${E===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${b}"></span>
    </label>
  `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${_}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${T.name}</p>
        <p class="product-price">${n} грн</p>
        <div class="css-star-rating" data-rating="${N}"></div>
        <div class="color-picker">${U}</div>
        <p class="product-description">${o}</p>
        <p class="product-size">Розміри: ${u}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},v=e=>{q(e);const t=e.map(({images:o,_id:s,type:r,price:n})=>`
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
    `).join("");i.furnitureList.innerHTML=t};let l=1;y();const re=async()=>{l=1,h();const{furnitures:e,totalItems:t}=await B(l);y(),I(),v(e);const o=Math.ceil(t/8);l>=o?c.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):C()},oe=async()=>{l++,I(),h();const{furnitures:e,totalItems:t}=await B(l);v(e),y();const o=Math.ceil(t/8);l>=o?c.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):C()},se=async e=>{h();const t=await W(e);y(),t&&t.furnitures?v(t.furnitures):i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"},ne=async e=>{const t=e.target.closest(".btn-list-section-iv");t&&(P(t),se(t.dataset.id))},ie=()=>{const e=document.querySelector(".btn-list-section-iv");e&&P(e)},P=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};re();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",ne),ie()});i.loadMoreListBtn.addEventListener("click",oe);new D(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const M=document.getElementById("feedback-list"),S=document.getElementById("feedback-loader");function ce(e){return e>=3.3&&e<=3.7?3.5:e>=3.8&&e<=4.2?4:Math.round(e)}function ae({name:e,descr:t,rate:o}){const s=ce(o),r=document.createElement("div");return r.className="swiper-slide",r.innerHTML=`
    <div class="feedback-card">
      <div class="rating" data-score="${s}"></div>
      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,new K(r.querySelector(".rating"),{readOnly:!0,score:s,starType:"i",starOn:"★",starOff:"☆",starHalf:"⯨"}),r}async function le(){S.classList.remove("visually-hidden"),M.innerHTML="";try{const e=await X(1,10);console.log("Відгуки з API:",e);const t=e.feedbacks||[];if(!t.length){c.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(o=>{const s=ae({name:o.name||"Анонім",descr:o.descr||"",rate:o.rate||0});M.appendChild(s)}),new H(".swiper",{modules:[j,z],loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}catch(e){console.error(e),c.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте пізніше.",position:"topRight"})}finally{S.classList.add("visually-hidden")}}le();const A=e=>{e.code==="Escape"&&L()},F=e=>{e.target===i.productModal&&L()},de=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",A),i.productModal.addEventListener("click",F)},L=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",A),i.productModal.removeEventListener("click",F)};i.modalCloseBtn.addEventListener("click",L);async function ue(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const o=t.closest(".furniture-list-render-item"),s=o==null?void 0:o.dataset.id;if(!s)return;const r=Y(s);if(!r){c.error({title:"Error",message:"Товар не знайдено у кеші"});return}te(r),de()}i.furnitureList.addEventListener("click",ue);console.log("order-modal");
//# sourceMappingURL=index.js.map
