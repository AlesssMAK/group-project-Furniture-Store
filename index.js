import{a as H,i as a,A as V,S as j,N as z,P as K}from"./assets/vendor-B6mmEaK7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const w=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),G=l.querySelector(".modal-window-close-btn"),J=l.querySelectorAll("a"),P=document.body;function Q(){l.classList.add("open"),l.setAttribute("aria-hidden","false"),w.setAttribute("aria-expanded","true"),P.style.overflow="hidden"}function p(){l.classList.remove("open"),l.setAttribute("aria-hidden","true"),w.setAttribute("aria-expanded","false"),P.style.overflow=""}w.addEventListener("click",Q);G.addEventListener("click",p);l.addEventListener("click",e=>{e.target===l&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l.classList.contains("open")&&p()});J.forEach(e=>{e.addEventListener("click",()=>{p()})});const B=document.querySelector(".header-logo");B&&B.addEventListener("click",e=>{e.preventDefault(),p();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const R=document.querySelector(".buy-btn");R&&R.addEventListener("click",e=>{e.preventDefault(),p();const t=document.querySelector("#furniture");t&&t.scrollIntoView({behavior:"smooth"})});const i={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},f=document.getElementById("loader"),u=()=>{f&&f.classList.remove("hidden")},d=()=>{f&&f.classList.add("hidden")},C=()=>{i.loadMoreListBtn.classList.remove("hidden")},L=()=>{i.loadMoreListBtn.classList.add("hidden")},W="https://furniture-store.b.goit.study/api",y={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},v=H.create({baseURL:W,headers:{"Content-Type":"application/json"}}),I=async e=>{u();try{return(await v.get(y.FURNITURES,{params:{page:e,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},X=async(e,t=1)=>{u();try{return(await v.get(y.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},Y=async(e=1,t)=>{u();try{return(await v.get(y.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return a.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},Z=async e=>{u();try{const t=await v.post(y.ORDERS,e);return a.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return a.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let O=[];const ee=e=>{O=e},te=e=>O.find(t=>t._id===e),re=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:c,color:T,category:_}=e,x=Math.round(o*2)/2,D=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,U=T.map((S,$)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${S}"
        class="color-item"
        id="color-${$}"
        ${$===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${S}"></span>
    </label>
  `).join("");i.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${D}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${_.name}</p>
        <p class="product-price">${s} грн</p>
        <div class="css-star-rating" data-rating="${x}"></div>
        <div class="color-picker">${U}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${c}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},k=e=>{ee(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
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
    `).join("");i.furnitureList.innerHTML=t};let m=1;d();const oe=async()=>{m=1,u();const{furnitures:e,totalItems:t}=await I(m);d(),k(e);const r=Math.ceil(t/8);m>=r?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):C()},ne=async()=>{m++,L(),u();const{furnitures:e,totalItems:t}=await I(m);k(e),d();const r=Math.ceil(t/8);m>=r?a.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):C()};async function se(e){u();const t=await X(e);d(),t&&t.furnitures?(L(),k(t.furnitures)):(L(),i.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const ie=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(A(t),se(t.dataset.id))},ae=()=>{const e=document.querySelector(".btn-list-section-iv");e&&A(e)},A=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};oe();document.addEventListener("DOMContentLoaded",()=>{i.categoriesList.addEventListener("click",ie),ae()});i.loadMoreListBtn.addEventListener("click",ne);new V(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const q=document.getElementById("feedback-list");function ce(e){const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2}function le(){return`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`}function de({name:e,descr:t,rate:r}){const n=ce(r),o=Math.floor(n),s=n%1===.5,c=document.createElement("div");return c.className="swiper-slide",c.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${s?"half":""} value-${o}"
        aria-label="Рейтинг ${n} з 5"
      >
        <div class="label-value" aria-hidden="true">${n}</div>
        ${le()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,c}async function ue(){q.innerHTML="";const t=(await Y(1,10)).feedbacks||[];if(!t.length){a.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{q.appendChild(de({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new j(".feedback-swiper",{modules:[z,K],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}ue();const E=e=>{e.code==="Escape"&&h()},M=e=>{e.target===i.productModal&&h()},me=e=>{i.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",E),i.productModal.addEventListener("click",M)},h=()=>{i.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",E),i.productModal.removeEventListener("click",M)};i.modalCloseBtn.addEventListener("click",h);async function pe(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(!n)return;const o=te(n);if(!o){a.error({title:"Error",message:"Товар не знайдено у кеші"});return}re(o),me()}i.furnitureList.addEventListener("click",pe);const fe=()=>{i.orderModal.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",E),i.orderModal.addEventListener("click",M)};document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(h(),fe())});const F=document.querySelector(".modal-window-close-btn"),g=document.querySelector(".order-modal");document.querySelector(".modal-window-form");let N=null;function b(){g.style.display="none",g.classList.remove("is-open"),document.body.classList.remove("no-scroll"),N=null}F.addEventListener("click",b);F.addEventListener("keydown",e=>{e.key==="Escape"&&b()});g.addEventListener("click",e=>{e.target===g&&b()});form.addEventListener("submit",ge);async function ge(e){e.preventDefault();const t=e.target.elements["#user-email"].value.trim(),r=e.target.elements["#user-tel"].value.trim(),n=e.target.elements["#user-comment"].value.trim();if(!t){a.warning({message:'Заповніть поле "Email"!'});return}if(!r){a.warning({message:"Вкажіть номер телефону!"});return}if(n.length<4||n.length>63){a.warning({message:"Комментар не може бути від 5 до 64 символів"});return}await Z({email:t,phone:r,comment:n,color,modelId:N}),b(),e.target.reset()}
//# sourceMappingURL=index.js.map
