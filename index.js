import{a as J,i as l,A as Q,S as W,N as X,P as Y}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const k=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),Z=a.querySelector(".modal-window-close-btn"),ee=a.querySelectorAll("a"),te=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),O=document.body;function re(){a.classList.add("open"),a.setAttribute("aria-hidden","false"),k.setAttribute("aria-expanded","true"),O.style.overflow="hidden"}function f(){a.classList.remove("open"),a.setAttribute("aria-hidden","true"),k.setAttribute("aria-expanded","false"),O.style.overflow=""}k.addEventListener("click",re);Z.addEventListener("click",f);a.addEventListener("click",e=>{e.target===a&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.contains("open")&&f()});ee.forEach(e=>{e.addEventListener("click",()=>f())});te.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),f();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const C=document.querySelector(".header-logo");C&&C.addEventListener("click",e=>{e.preventDefault(),f();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},g=document.getElementById("loader"),u=()=>{g&&g.classList.remove("hidden")},d=()=>{g&&g.classList.add("hidden")},I=()=>{i.loadMoreListBtn.classList.remove("hidden")},w=()=>{i.loadMoreListBtn.classList.add("hidden")},oe="https://furniture-store.b.goit.study/api",v={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},h=J.create({baseURL:oe,headers:{"Content-Type":"application/json"}}),A=async e=>{u();try{return(await h.get(v.FURNITURES,{params:{page:e,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},ne=async(e,t=1)=>{u();try{return(await h.get(v.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},se=async(e=1,t)=>{u();try{return(await h.get(v.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},ie=async e=>{u();try{const t=await h.post(v.ORDERS,e);return l.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return l.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let F=[];const le=e=>{F=e},ce=e=>F.find(t=>t._id===e),N=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},T=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,ae=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:c,color:H,category:V}=e,y=N(o),j=Math.floor(y),z=y%1===.5,K=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,G=H.map((q,P)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${q}"
        class="color-item"
        id="color-${P}"
        ${P===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${q}"></span>
    </label>
  `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${K}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${V.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${z?"half":""} value-${j}"
        aria-label="Рейтинг ${y} з 5"
      >
        <div class="label-value" aria-hidden="true">${y}</div>
        ${T()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${G}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${c}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},E=e=>{le(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
    <li class="furniture-list-render-item" data-id="${n}">
      <img class="furniture-list-render-img" src="${r[0]}" alt="${o}" />
      <h3 class="furniture-list-render-title">${o}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${s} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `).join("");i.furnitureList.innerHTML=t};let m=1;d();const de=async()=>{m=1,u();const{furnitures:e,totalItems:t}=await A(m);d(),E(e);const r=Math.ceil(t/8);m>=r?l.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):I()},ue=async()=>{m++,w(),u();const{furnitures:e,totalItems:t}=await A(m);E(e),d();const r=Math.ceil(t/8);m>=r?l.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):I()};async function me(e){u();const t=await ne(e);d(),t&&t.furnitures?(w(),E(t.furnitures)):(w(),i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const pe=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(_(t),me(t.dataset.id))},fe=()=>{const e=document.querySelector(".btn-list-section-iv");e&&_(e)},_=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};de();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",pe),fe()});i.loadMoreListBtn.addEventListener("click",ue);new Q(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const R=document.getElementById("feedback-list");function ye({name:e,descr:t,rate:r}){const n=N(r),o=Math.floor(n),s=n%1===.5,c=document.createElement("div");return c.className="swiper-slide",c.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${s?"half":""} value-${o}"
        aria-label="Рейтинг ${n} з 5"
      >
        <div class="label-value" aria-hidden="true">${n}</div>
        ${T()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,c}async function ge(){R.innerHTML="";const t=(await se(1,10)).feedbacks||[];if(!t.length){l.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{R.appendChild(ye({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new W(".feedback-swiper",{modules:[X,Y],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}ge();const x=document.querySelector(".modal-window-close-btn"),p=document.querySelector(".order-modal"),ve=document.querySelector(".modal-window-form");let M=null,S=null;function he(e,t){M=e,S=t,p.style.display="block",p.classList.add("is-open"),document.body.style.overflow="hidden",document.body.classList.add("no-scroll")}function b(){p.style.display="none",p.classList.remove("is-open"),document.body.classList.remove("no-scroll"),M=null,S=null}x.addEventListener("click",b);x.addEventListener("keydown",e=>{e.key==="Escape"&&b()});p.addEventListener("click",e=>{e.target===p&&b()});ve.addEventListener("submit",be);async function be(e){e.preventDefault();const t=e.target.elements["#user-email"].value.trim(),r=e.target.elements["#user-tel"].value.trim(),n=e.target.elements["#user-comment"].value.trim();if(!t){l.warning({message:'Заповніть поле "Email"!'});return}if(!r){l.warning({message:"Вкажіть номер телефону!"});return}if(n.length<4||n.length>63){l.warning({message:"Комментар має бути від 5 до 64 символів"});return}await ie({email:t,phone:r,comment:n,color:S,modelId:M}),b(),e.target.reset()}let $=null,B=null;const D=e=>{e.code==="Escape"&&L()},U=e=>{e.target===i.productModal&&L()},Le=(e,t)=>{$=e,B=t,i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",D),i.productModal.addEventListener("click",U)},L=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",D),i.productModal.removeEventListener("click",U),$=null,B=null};i.modalCloseBtn.addEventListener("click",L);async function we(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id,o=(r==null?void 0:r.dataset.color)||null;if(!n)return;const s=ce(n);if(!s){l.error({title:"Error",message:"Товар не знайдено у кеші"});return}ae(s),Le(n,o)}i.furnitureList.addEventListener("click",we);document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(L(),he($,B))});
//# sourceMappingURL=index.js.map
