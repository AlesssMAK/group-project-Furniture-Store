import{a as K,i as a,A as G,S as J,N as Q,P as W}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const k=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),X=l.querySelector(".modal-window-close-btn"),Y=l.querySelectorAll("a"),C=document.body;function Z(){l.classList.add("open"),l.setAttribute("aria-hidden","false"),k.setAttribute("aria-expanded","true"),C.style.overflow="hidden"}function p(){l.classList.remove("open"),l.setAttribute("aria-hidden","true"),k.setAttribute("aria-expanded","false"),C.style.overflow=""}k.addEventListener("click",Z);X.addEventListener("click",p);l.addEventListener("click",e=>{e.target===l&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l.classList.contains("open")&&p()});Y.forEach(e=>{e.addEventListener("click",()=>{p()})});const q=document.querySelector(".header-logo");q&&q.addEventListener("click",e=>{e.preventDefault(),p();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const P=document.querySelector(".buy-btn");P&&P.addEventListener("click",e=>{e.preventDefault(),p();const t=document.querySelector("#furniture");t&&t.scrollIntoView({behavior:"smooth"})});const i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},g=document.getElementById("loader"),u=()=>{g&&g.classList.remove("hidden")},d=()=>{g&&g.classList.add("hidden")},I=()=>{i.loadMoreListBtn.classList.remove("hidden")},w=()=>{i.loadMoreListBtn.classList.add("hidden")},ee="https://furniture-store.b.goit.study/api",v={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},h=K.create({baseURL:ee,headers:{"Content-Type":"application/json"}}),O=async e=>{u();try{return(await h.get(v.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},te=async(e,t=1)=>{u();try{return(await h.get(v.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},re=async(e=1,t)=>{u();try{return(await h.get(v.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},oe=async e=>{u();try{const t=await h.post(v.ORDERS,e);return a.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return a.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let A=[];const se=e=>{A=e},ne=e=>A.find(t=>t._id===e),F=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},N=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,ie=e=>{const{name:t,description:r,images:s,rate:o,price:n,sizes:c,color:D,category:U}=e,f=F(o),H=Math.floor(f),V=f%1===.5,j=`
      <div class="gallery">
        <img src="${s[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${s[1]}" alt="${t}" class="gallery__item" />
          <img src="${s[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,z=D.map(($,B)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${$}"
        class="color-item"
        id="color-${B}"
        ${B===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${$}"></span>
    </label>
  `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${j}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${U.name}</p>
        <p class="product-price">${n} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${V?"half":""} value-${H}"
        aria-label="Рейтинг ${f} з 5"
      >
        <div class="label-value" aria-hidden="true">${f}</div>
        ${N()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${z}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${c}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},E=e=>{se(e);const t=e.map(({images:r,_id:s,type:o,price:n})=>`
    <li class="furniture-list-render-item" data-id="${s}">
      <img class="furniture-list-render-img" src="${r[0]}" alt="${o}" />
      <h3 class="furniture-list-render-title">${o}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${n} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");i.furnitureList.innerHTML=t};let m=1;d();const ae=async()=>{m=1,u();const{furnitures:e,totalItems:t}=await O(m);d(),E(e);const r=Math.ceil(t/8);m>=r?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):I()},ce=async()=>{m++,w(),u();const{furnitures:e,totalItems:t}=await O(m);E(e),d();const r=Math.ceil(t/8);m>=r?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):I()};async function le(e){u();const t=await te(e);d(),t&&t.furnitures?(w(),E(t.furnitures)):(w(),i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const de=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(T(t),le(t.dataset.id))},ue=()=>{const e=document.querySelector(".btn-list-section-iv");e&&T(e)},T=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};ae();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",de),ue()});i.loadMoreListBtn.addEventListener("click",ce);new G(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const R=document.getElementById("feedback-list");function me({name:e,descr:t,rate:r}){const s=F(r),o=Math.floor(s),n=s%1===.5,c=document.createElement("div");return c.className="swiper-slide",c.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${n?"half":""} value-${o}"
        aria-label="Рейтинг ${s} з 5"
      >
        <div class="label-value" aria-hidden="true">${s}</div>
        ${N()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,c}async function pe(){R.innerHTML="";const t=(await re(1,10)).feedbacks||[];if(!t.length){a.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{R.appendChild(me({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new J(".feedback-swiper",{modules:[Q,W],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}pe();const M=e=>{e.code==="Escape"&&b()},S=e=>{e.target===i.productModal&&b()},fe=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",M),i.productModal.addEventListener("click",S)},b=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",M),i.productModal.removeEventListener("click",S)};i.modalCloseBtn.addEventListener("click",b);async function ge(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),s=r==null?void 0:r.dataset.id;if(!s)return;const o=ne(s);if(!o){a.error({title:"Error",message:"Товар не знайдено у кеші"});return}ie(o),fe()}i.furnitureList.addEventListener("click",ge);const ye=()=>{i.orderModal.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",M),i.orderModal.addEventListener("click",S)};document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(b(),ye())});const _=document.querySelector(".modal-window-close-btn"),y=document.querySelector(".order-modal");document.querySelector(".modal-window-form");let x=null;function L(){y.style.display="none",y.classList.remove("is-open"),document.body.classList.remove("no-scroll"),x=null}_.addEventListener("click",L);_.addEventListener("keydown",e=>{e.key==="Escape"&&L()});y.addEventListener("click",e=>{e.target===y&&L()});form.addEventListener("submit",ve);async function ve(e){e.preventDefault();const t=e.target.elements["#user-email"].value.trim(),r=e.target.elements["#user-tel"].value.trim(),s=e.target.elements["#user-comment"].value.trim();if(!t){a.warning({message:'Заповніть поле "Email"!'});return}if(!r){a.warning({message:"Вкажіть номер телефону!"});return}if(s.length<4||s.length>63){a.warning({message:"Комментар не може бути від 5 до 64 символів"});return}await oe({email:t,phone:r,comment:s,color,modelId:x}),L(),e.target.reset()}
//# sourceMappingURL=index.js.map
