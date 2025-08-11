import{a as ie,i,S as F,N as T,P as _,A as ce}from"./assets/vendor-CC0EzOv2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const S=document.querySelector(".burger"),d=document.querySelector(".mobile-menu"),le=d.querySelector(".modal-window-close-btn"),ae=d.querySelectorAll("a"),de=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),$=document.body,x=e=>{e.code==="Escape"&&u()},N=e=>{e.target===d&&u()};function ue(){d.classList.add("is-open"),S.setAttribute("aria-expanded","true"),$.style.overflow="hidden",window.addEventListener("keydown",x),d.addEventListener("click",N)}function u(){d.classList.remove("is-open"),S.setAttribute("aria-expanded","false"),$.style.overflow="",window.removeEventListener("keydown",x),d.removeEventListener("click",N)}S.addEventListener("click",ue);le.addEventListener("click",u);d.addEventListener("click",e=>{e.target===d&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("open")&&u()});ae.forEach(e=>{e.addEventListener("click",()=>u())});de.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),u();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const O=document.querySelector(".header-logo");O&&O.addEventListener("click",e=>{e.preventDefault(),u();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});$.setAttribute("tabindex","-1");const c={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal"),flOneBtn:document.querySelector(".fl-one"),swiperContainer:document.querySelector("#popular-products-list")},w=document.getElementById("loader"),p=()=>{w&&w.classList.remove("hidden")},m=()=>{w&&w.classList.add("hidden")},L=()=>{c.loadMoreListBtn.classList.remove("hidden")},y=()=>{c.loadMoreListBtn.classList.add("hidden")},pe="https://furniture-store.b.goit.study/api",h={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks",POPULARPRD:"/furnitures?type=popular"},v=ie.create({baseURL:pe,headers:{"Content-Type":"application/json"}}),D=async e=>{p();try{return(await v.get(h.FURNITURES,{params:{page:e,limit:8}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{m()}},U=async(e,t=1)=>{p();try{return(await v.get(h.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{m()}},me=async(e=1,t)=>{p();try{return(await v.get(h.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{m()}},fe=async e=>{p();try{const t=await v.post(h.ORDERS,e);return i.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return i.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{m()}};let V=[];const ye=e=>{V=e},ge=e=>V.find(t=>t._id===e),H=[];function he(e){H.push(...e)}function ve(e){return H.find(t=>t._id===e)}const be=async(e=1)=>{p();try{return(await v.get(h.POPULARPRD,{params:{page:e}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{m()}},j=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},z=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,G=e=>{const{name:t,description:r,images:s,rate:o,price:n,sizes:l,color:f,category:te}=e,b=j(o),re=Math.floor(b),oe=b%1===.5,se=`
      <div class="gallery">
        <img src="${s[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${s[1]}" alt="${t}" class="gallery__item" />
          <img src="${s[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,ne=f.map((q,I)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${q}"
        class="color-item"
        id="color-${I}"
        ${I===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${q}"></span>
    </label>
  `).join("");c.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${se}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${te.name}</p>
        <p class="product-price">${n} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${oe?"half":""} value-${re}"
        aria-label="Рейтинг ${b} з 5"
      >
        <div class="label-value" aria-hidden="true">${b}</div>
        ${z()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${ne}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${l}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},E=e=>{ye(e);const t=e.map(({images:r,_id:s,type:o,price:n})=>`
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
    `).join("");c.furnitureList.innerHTML=t},we=({images:e,_id:t,type:r,price:s})=>{const o=document.createElement("div");return o.className="swiper-slide",o.innerHTML=`
  <li class="popular-products-render-item" data-id="${t}">
    <img class="popular-products-render-img" src="${e[0]}" alt="${r}" />
    <h3 class="popular-products-render-title">${r}</h3>
    <ul class="popular-products-render-color-list">
      <li class="popular-products-render-color-list-item popular-products-render-color-list-item-current-one"></li>
      <li class="popular-products-render-color-list-item popular-products-render-color-list-item-current-two"></li>
      <li class="popular-products-render-color-list-item popular-products-render-color-list-item-current-three"></li>
    </ul>
    <p class="popular-products-render-price">${s} грн</p>
    <button class="popular-products-render-btn" type="button">Детальніше</button>
  </li>
  `,o};let a=1;const k=8;document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=c.categoriesList)==null||e.addEventListener("click",ke),(t=c.loadMoreListBtn)==null||t.addEventListener("click",Pe),W(),Le()});const Le=()=>{const e=document.querySelector(".btn-list-section-iv");e&&K(e)},K=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")},W=async()=>{a=1,p();try{const{furnitures:e,totalItems:t}=await D(a);E(e);const r=Math.ceil(t/k);a<r?L():y()}catch{i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),y()}finally{m()}};async function Ee(e,t=1){p();try{const{furnitures:r,totalItems:s}=await U(e,t);E(r);const o=Math.ceil(s/k);t<o?L():y()}catch{y(),c.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"}finally{m()}}const ke=async e=>{const t=e.target.closest(".btn-list-section-iv");if(!t)return;K(t);const r=t.dataset.id;!r||r==="all"?await W():(a=1,await Ee(r,a))},Pe=async()=>{const e=document.querySelector(".btn-list-section-iv.active-btn-iv"),t=e==null?void 0:e.dataset.id;a+=1,y(),p();try{if(!t||t==="all"){const{furnitures:r,totalItems:s}=await D(a);E(r);const o=Math.ceil(s/k);a<o&&L()}else{const{furnitures:r,totalItems:s}=await U(t,a);E(r);const o=Math.ceil(s/k);a<o&&L()}}catch{i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3})}finally{m()}};async function Me(){const e=document.getElementById("popular-products-list");e.innerHTML="";const r=(await be(1)).furnitures||[];if(he(r),!r.length){i.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}r.forEach(s=>{const o=we(s);e.appendChild(o)}),new F(".popular-products-swiper",{modules:[T,_],loop:!1,slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:4,spaceBetween:24}}})}Me();new ce(".accordion-container",{duration:250,showMultiple:!1});const A=document.getElementById("feedback-list");function Se({name:e,descr:t,rate:r}){const s=j(r),o=Math.floor(s),n=s%1===.5,l=document.createElement("div");return l.className="swiper-slide",l.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${n?"half":""} value-${o}"
        aria-label="Рейтинг ${s} з 5"
      >
        <div class="label-value" aria-hidden="true">${s}</div>
        ${z()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,l}async function $e(){A.innerHTML="";const t=(await me(1,10)).feedbacks||[];if(!t.length){i.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{A.appendChild(Se({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new F(".feedback-swiper",{modules:[T,_],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}$e();const Be=document.querySelector(".modal-window-close-order-btn"),g=document.querySelector(".order-modal"),J=document.querySelector(".modal-window-form");let B=null,C=null;const Q=e=>{e.code==="Escape"&&P()},X=e=>{e.target===g&&P()};function Ce(e,t){B=e,C=t,g.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",Q),g.addEventListener("click",X)}function P(){g.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",Q),g.removeEventListener("click",X),B=null,C=null}Be.addEventListener("click",P);J.addEventListener("submit",Re);async function Re(e){e.preventDefault();const t=e.target.elements["user-email"].value.trim(),r=e.target.elements["user-tel"].value.trim(),s=e.target.elements["user-comment"].value.trim();if(!t){i.warning({message:'Заповніть поле "Email"!'});return}let o="";for(let l=0;l<r.length;l++){const f=r[l];f>="0"&&f<="9"&&(o+=f)}if(o.length!=12){i.warning({message:"Вкажіть номер телефону!"});return}if(s.length<5||s.length>64){i.warning({message:"Коментар має бути від 5 до 64 символів"});return}const n={email:t,phone:o,comment:s,modelId:B,color:C};try{await fe(n),P(),J.reset()}catch{i.error({message:"Помилка при надсиланні замовлення. Спробуйте ще раз."})}}let R=null;const Y=e=>{e.code==="Escape"&&M()},Z=e=>{e.target===c.productModal&&M()},ee=(e,t)=>{R=e,c.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",Y),c.productModal.addEventListener("click",Z)},M=()=>{c.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",Y),c.productModal.removeEventListener("click",Z),R=null};c.modalCloseBtn.addEventListener("click",M);async function qe(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),s=r==null?void 0:r.dataset.id;if(r!=null&&r.dataset.color,!s)return;const o=ge(s);if(!o){i.error({title:"Error",message:"Товар не знайдено у кеші"});return}G(o),ee(s)}c.furnitureList.addEventListener("click",qe);document.addEventListener("click",e=>{if(!e.target.closest(".order-btn"))return;const r=R,s=Ie();M(),Ce(r,s)});function Ie(){const e=document.querySelector('input[name="color"]:checked');return e?e.value:null}c.swiperContainer.addEventListener("click",Oe);function Oe(e){const t=e.target.closest(".popular-products-render-btn");if(!t)return;const r=t.closest(".popular-products-render-item"),s=r==null?void 0:r.dataset.id;if(!s)return;const o=ve(s);if(!o){i.error({title:"Error",message:"Товар не знайдено у кеші"});return}G(o),ee(s)}
//# sourceMappingURL=index.js.map
