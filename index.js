import{a as Q,i as c,A as W,S as X,N as Y,P as Z}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const m=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),A=a.querySelector(".modal-window-close-btn"),ee=a.querySelectorAll("a"),te=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),h=document.body;function re(){a.classList.add("open"),a.setAttribute("aria-hidden","false"),m.setAttribute("aria-expanded","true"),h.style.overflow="hidden",m.focus(),m.style.display="none",A.focus()}function y(){a.classList.remove("open"),a.setAttribute("aria-hidden","true"),m.setAttribute("aria-expanded","false"),h.style.overflow="",m.style.display="",document.activeElement&&document.activeElement.blur(),h.focus({preventScroll:!0})}m.addEventListener("click",re);A.addEventListener("click",y);a.addEventListener("click",e=>{e.target===a&&y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.contains("open")&&y()});ee.forEach(e=>{e.addEventListener("click",()=>y())});te.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),y();const r=document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const O=document.querySelector(".header-logo");O&&O.addEventListener("click",e=>{e.preventDefault(),y();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});h.setAttribute("tabindex","-1");const l={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},b=document.getElementById("loader"),u=()=>{b&&b.classList.remove("hidden")},d=()=>{b&&b.classList.add("hidden")},F=()=>{l.loadMoreListBtn.classList.remove("hidden")},M=()=>{l.loadMoreListBtn.classList.add("hidden")},oe="https://furniture-store.b.goit.study/api",L={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},w=Q.create({baseURL:oe,headers:{"Content-Type":"application/json"}}),N=async e=>{u();try{return(await w.get(L.FURNITURES,{params:{page:e,limit:8}})).data}catch{return c.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},ne=async(e,t=1)=>{u();try{return(await w.get(L.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return c.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},se=async(e=1,t)=>{u();try{return(await w.get(L.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return c.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},ie=async e=>{u();try{const t=await w.post(L.ORDERS,e);return c.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return c.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let T=[];const le=e=>{T=e},ce=e=>T.find(t=>t._id===e),_=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},x=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,ae=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:i,color:g,category:j}=e,v=_(o),z=Math.floor(v),K=v%1===.5,G=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,J=g.map((q,R)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${q}"
        class="color-item"
        id="color-${R}"
        ${R===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${q}"></span>
    </label>
  `).join("");l.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${G}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${j.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${K?"half":""} value-${z}"
        aria-label="Рейтинг ${v} з 5"
      >
        <div class="label-value" aria-hidden="true">${v}</div>
        ${x()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${J}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${i}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},S=e=>{le(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
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
    `).join("");l.furnitureList.innerHTML=t};let p=1;d();const de=async()=>{p=1,u();const{furnitures:e,totalItems:t}=await N(p);d(),S(e);const r=Math.ceil(t/8);p>=r?c.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):F()},ue=async()=>{p++,M(),u();const{furnitures:e,totalItems:t}=await N(p);S(e),d();const r=Math.ceil(t/8);p>=r?c.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):F()};async function me(e){u();const t=await ne(e);d(),t&&t.furnitures?(M(),S(t.furnitures)):(M(),l.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const pe=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(D(t),me(t.dataset.id))},fe=()=>{const e=document.querySelector(".btn-list-section-iv");e&&D(e)},D=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};de();document.addEventListener("DOMContentLoaded",()=>{l.categoriesList.addEventListener("click",pe),fe()});l.loadMoreListBtn.addEventListener("click",ue);new W(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const I=document.getElementById("feedback-list");function ye({name:e,descr:t,rate:r}){const n=_(r),o=Math.floor(n),s=n%1===.5,i=document.createElement("div");return i.className="swiper-slide",i.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${s?"half":""} value-${o}"
        aria-label="Рейтинг ${n} з 5"
      >
        <div class="label-value" aria-hidden="true">${n}</div>
        ${x()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,i}async function ge(){I.innerHTML="";const t=(await se(1,10)).feedbacks||[];if(!t.length){c.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{I.appendChild(ye({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new X(".feedback-swiper",{modules:[Y,Z],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}ge();const U=document.querySelector(".modal-window-close-btn"),f=document.querySelector(".order-modal"),$=document.querySelector(".modal-window-form");let B=null,C=null;function ve(e,t){B=e,C=t,f.style.display="block",f.classList.add("is-open"),document.body.style.overflow="hidden",document.body.classList.add("no-scroll")}function E(){f.style.display="none",f.classList.remove("is-open"),document.body.classList.remove("no-scroll"),B=null,C=null}console.log($);U.addEventListener("click",E);U.addEventListener("keydown",e=>{e.key==="Escape"&&E()});f.addEventListener("click",e=>{e.target===f&&E()});$.addEventListener("submit",he);async function he(e){e.preventDefault();const t=e.target.elements["user-email"].value.trim(),r=e.target.elements["user-tel"].value.trim(),n=e.target.elements["user-comment"].value.trim();if(!t){c.warning({message:'Заповніть поле "Email"!'});return}let o="";for(let i=0;i<r.length;i++){const g=r[i];g>="0"&&g<="9"&&(o+=g)}if(o.length!=12){c.warning({message:"Вкажіть номер телефону!"});return}if(n.length<5||n.length>64){c.warning({message:"Коментар має бути від 5 до 64 символів"});return}const s={email:t,phone:o,comment:n,modelId:B,color:C};try{await ie(s),E(),$.reset()}catch{}}let P=null;const H=e=>{e.code==="Escape"&&k()},V=e=>{e.target===l.productModal&&k()},be=(e,t)=>{P=e,l.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",H),l.productModal.addEventListener("click",V)},k=()=>{l.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",H),l.productModal.removeEventListener("click",V),P=null};l.modalCloseBtn.addEventListener("click",k);async function Le(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(r!=null&&r.dataset.color,!n)return;const o=ce(n);if(!o){c.error({title:"Error",message:"Товар не знайдено у кеші"});return}ae(o),be(n)}l.furnitureList.addEventListener("click",Le);document.addEventListener("click",e=>{if(!e.target.closest(".order-btn"))return;const r=P,n=we();k(),ve(r,n)});function we(){const e=document.querySelector('input[name="color"]:checked');return e?e.value:null}
//# sourceMappingURL=index.js.map
