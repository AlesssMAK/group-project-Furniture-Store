import{a as z,i as a,A as K,S as G,N as J,P as Q}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const E=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),W=l.querySelector(".modal-window-close-btn"),X=l.querySelectorAll("a"),Y=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),R=document.body;function Z(){l.classList.add("open"),l.setAttribute("aria-hidden","false"),E.setAttribute("aria-expanded","true"),R.style.overflow="hidden"}function p(){l.classList.remove("open"),l.setAttribute("aria-hidden","true"),E.setAttribute("aria-expanded","false"),R.style.overflow=""}E.addEventListener("click",Z);W.addEventListener("click",p);l.addEventListener("click",e=>{e.target===l&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l.classList.contains("open")&&p()});X.forEach(e=>{e.addEventListener("click",()=>p())});Y.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),p();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const q=document.querySelector(".header-logo");q&&q.addEventListener("click",e=>{e.preventDefault(),p();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},y=document.getElementById("loader"),u=()=>{y&&y.classList.remove("hidden")},d=()=>{y&&y.classList.add("hidden")},C=()=>{i.loadMoreListBtn.classList.remove("hidden")},w=()=>{i.loadMoreListBtn.classList.add("hidden")},ee="https://furniture-store.b.goit.study/api",v={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},h=z.create({baseURL:ee,headers:{"Content-Type":"application/json"}}),I=async e=>{u();try{return(await h.get(v.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},te=async(e,t=1)=>{u();try{return(await h.get(v.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},re=async(e=1,t)=>{u();try{return(await h.get(v.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},oe=async e=>{u();try{const t=await h.post(v.ORDERS,e);return a.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return a.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let O=[];const ne=e=>{O=e},se=e=>O.find(t=>t._id===e),A=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},F=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,ie=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:c,color:x,category:D}=e,f=A(o),U=Math.floor(f),H=f%1===.5,V=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,j=x.map(($,B)=>`
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
      <div class="modal-product-img-gallery">${V}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${D.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${H?"half":""} value-${U}"
        aria-label="Рейтинг ${f} з 5"
      >
        <div class="label-value" aria-hidden="true">${f}</div>
        ${F()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${j}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${c}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},k=e=>{ne(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
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
    `).join("");i.furnitureList.innerHTML=t};let m=1;d();const ae=async()=>{m=1,u();const{furnitures:e,totalItems:t}=await I(m);d(),k(e);const r=Math.ceil(t/8);m>=r?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):C()},ce=async()=>{m++,w(),u();const{furnitures:e,totalItems:t}=await I(m);k(e),d();const r=Math.ceil(t/8);m>=r?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):C()};async function le(e){u();const t=await te(e);d(),t&&t.furnitures?(w(),k(t.furnitures)):(w(),i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const de=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(N(t),le(t.dataset.id))},ue=()=>{const e=document.querySelector(".btn-list-section-iv");e&&N(e)},N=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};ae();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",de),ue()});i.loadMoreListBtn.addEventListener("click",ce);new K(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const P=document.getElementById("feedback-list");function me({name:e,descr:t,rate:r}){const n=A(r),o=Math.floor(n),s=n%1===.5,c=document.createElement("div");return c.className="swiper-slide",c.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${s?"half":""} value-${o}"
        aria-label="Рейтинг ${n} з 5"
      >
        <div class="label-value" aria-hidden="true">${n}</div>
        ${F()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,c}async function pe(){P.innerHTML="";const t=(await re(1,10)).feedbacks||[];if(!t.length){a.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{P.appendChild(me({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new G(".feedback-swiper",{modules:[J,Q],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}pe();const M=e=>{e.code==="Escape"&&b()},S=e=>{e.target===i.productModal&&b()},fe=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",M),i.productModal.addEventListener("click",S)},b=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",M),i.productModal.removeEventListener("click",S)};i.modalCloseBtn.addEventListener("click",b);async function ye(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(!n)return;const o=se(n);if(!o){a.error({title:"Error",message:"Товар не знайдено у кеші"});return}ie(o),fe()}i.furnitureList.addEventListener("click",ye);const ge=()=>{i.orderModal.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",M),i.orderModal.addEventListener("click",S)};document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(b(),ge())});const T=document.querySelector(".modal-window-close-btn"),g=document.querySelector(".order-modal");document.querySelector(".modal-window-form");let _=null;function L(){g.style.display="none",g.classList.remove("is-open"),document.body.classList.remove("no-scroll"),_=null}T.addEventListener("click",L);T.addEventListener("keydown",e=>{e.key==="Escape"&&L()});g.addEventListener("click",e=>{e.target===g&&L()});form.addEventListener("submit",ve);async function ve(e){e.preventDefault();const t=e.target.elements["#user-email"].value.trim(),r=e.target.elements["#user-tel"].value.trim(),n=e.target.elements["#user-comment"].value.trim();if(!t){a.warning({message:'Заповніть поле "Email"!'});return}if(!r){a.warning({message:"Вкажіть номер телефону!"});return}if(n.length<4||n.length>63){a.warning({message:"Комментар не може бути від 5 до 64 символів"});return}await oe({email:t,phone:r,comment:n,color,modelId:_}),L(),e.target.reset()}
//# sourceMappingURL=index.js.map
