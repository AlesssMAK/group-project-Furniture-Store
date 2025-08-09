import{a as Q,i,A as W,S as X,N as Y,P as Z}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const M=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),ee=l.querySelector(".modal-window-close-btn"),te=l.querySelectorAll("a"),re=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),I=document.body;function oe(){l.classList.add("open"),l.setAttribute("aria-hidden","false"),M.setAttribute("aria-expanded","true"),I.style.overflow="hidden"}function f(){l.classList.remove("open"),l.setAttribute("aria-hidden","true"),M.setAttribute("aria-expanded","false"),I.style.overflow=""}M.addEventListener("click",oe);ee.addEventListener("click",f);l.addEventListener("click",e=>{e.target===l&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&l.classList.contains("open")&&f()});te.forEach(e=>{e.addEventListener("click",()=>f())});re.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),f();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const P=document.querySelector(".header-logo");P&&P.addEventListener("click",e=>{e.preventDefault(),f();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});const c={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},v=document.getElementById("loader"),u=()=>{v&&v.classList.remove("hidden")},d=()=>{v&&v.classList.add("hidden")},A=()=>{c.loadMoreListBtn.classList.remove("hidden")},E=()=>{c.loadMoreListBtn.classList.add("hidden")},ne="https://furniture-store.b.goit.study/api",h={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},b=Q.create({baseURL:ne,headers:{"Content-Type":"application/json"}}),O=async e=>{u();try{return(await b.get(h.FURNITURES,{params:{page:e,limit:8}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},se=async(e,t=1)=>{u();try{return(await b.get(h.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},ie=async(e=1,t)=>{u();try{return(await b.get(h.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return i.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},ce=async e=>{u();try{const t=await b.post(h.ORDERS,e);return i.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return i.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let F=[];const ae=e=>{F=e},le=e=>F.find(t=>t._id===e),T=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},N=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,de=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:a,color:V,category:j}=e,g=T(o),z=Math.floor(g),K=g%1===.5,G=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,J=V.map((B,q)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${B}"
        class="color-item"
        id="color-${q}"
        ${q===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${B}"></span>
    </label>
  `).join("");c.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${G}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${j.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${K?"half":""} value-${z}"
        aria-label="Рейтинг ${g} з 5"
      >
        <div class="label-value" aria-hidden="true">${g}</div>
        ${N()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${J}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${a}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},S=e=>{ae(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
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
    `).join("");c.furnitureList.innerHTML=t};let m=1;d();const ue=async()=>{m=1,u();const{furnitures:e,totalItems:t}=await O(m);d(),S(e);const r=Math.ceil(t/8);m>=r?i.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):A()},me=async()=>{m++,E(),u();const{furnitures:e,totalItems:t}=await O(m);S(e),d();const r=Math.ceil(t/8);m>=r?i.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):A()};async function fe(e){u();const t=await se(e);d(),t&&t.furnitures?(E(),S(t.furnitures)):(E(),c.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const pe=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(_(t),fe(t.dataset.id))},ge=()=>{const e=document.querySelector(".btn-list-section-iv");e&&_(e)},_=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};ue();document.addEventListener("DOMContentLoaded",()=>{c.categoriesList.addEventListener("click",pe),ge()});c.loadMoreListBtn.addEventListener("click",me);new W(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const R=document.getElementById("feedback-list");function ve({name:e,descr:t,rate:r}){const n=T(r),o=Math.floor(n),s=n%1===.5,a=document.createElement("div");return a.className="swiper-slide",a.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${s?"half":""} value-${o}"
        aria-label="Рейтинг ${n} з 5"
      >
        <div class="label-value" aria-hidden="true">${n}</div>
        ${N()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,a}async function ye(){R.innerHTML="";const t=(await ie(1,10)).feedbacks||[];if(!t.length){i.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{R.appendChild(ve({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new X(".feedback-swiper",{modules:[Y,Z],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}ye();const C=document.querySelector(".modal-window-close-btn"),p=document.querySelector(".order-modal"),k=document.querySelector(".modal-window-form");let y={};function he(e={}){y=e,p.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",x),p.addEventListener("click",D)}function L(){console.log("Закриваємо модалку"),p.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",x),p.removeEventListener("click",D),k.reset(),y={}}function x(e){e.key==="Escape"&&L()}function D(e){e.target===p&&L()}C&&C.addEventListener("click",L);function be(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function Le(e){return/^[0-9]{12}$/.test(e)}k&&k.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements["user-email"].value.trim(),r=e.target.elements["user-tel"].value.trim(),n=e.target.elements["user-comment"].value.trim();if(!be(t)){i.warning({message:"Введіть коректний Email!"});return}if(!Le(r)){i.warning({message:"Вкажіть коректний номер телефону!"});return}if(n.length<5||n.length>64){i.warning({message:"Комментар має бути від 5 до 64 символів"});return}try{await ce({email:t,phone:r,comment:n,color:y.color||null,modelId:y.productId||null}),i.success({message:"Заявку відправлено!"}),L()}catch{i.error({message:"Сталася помилка. Спробуйте ще раз."})}});let $=null;const U=e=>{e.code==="Escape"&&w()},H=e=>{e.target===c.productModal&&w()},we=(e,t)=>{$=e,c.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",U),c.productModal.addEventListener("click",H)},w=()=>{c.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",U),c.productModal.removeEventListener("click",H),$=null};c.modalCloseBtn.addEventListener("click",w);async function Ee(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(r!=null&&r.dataset.color,!n)return;const o=le(n);if(!o){i.error({title:"Error",message:"Товар не знайдено у кеші"});return}de(o),we(n)}c.furnitureList.addEventListener("click",Ee);document.addEventListener("click",e=>{e.target.closest(".order-btn")&&(w(),he($))});
//# sourceMappingURL=index.js.map
