import{a as Q,i as l,A as W,S as X,N as Y,P as Z}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const v=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),ee=a.querySelector(".modal-window-close-btn"),te=a.querySelectorAll("a"),re=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),h=document.body;function oe(){a.classList.add("open"),a.setAttribute("aria-hidden","false"),v.setAttribute("aria-expanded","true"),h.style.overflow="hidden",v.focus()}function f(){a.classList.remove("open"),a.setAttribute("aria-hidden","true"),v.setAttribute("aria-expanded","false"),h.style.overflow="",document.activeElement&&document.activeElement.blur(),h.focus({preventScroll:!0})}v.addEventListener("click",oe);ee.addEventListener("click",f);a.addEventListener("click",e=>{e.target===a&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.contains("open")&&f()});te.forEach(e=>{e.addEventListener("click",()=>f())});re.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),f();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const R=document.querySelector(".header-logo");R&&R.addEventListener("click",e=>{e.preventDefault(),f();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});h.setAttribute("tabindex","-1");const c={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},b=document.getElementById("loader"),u=()=>{b&&b.classList.remove("hidden")},d=()=>{b&&b.classList.add("hidden")},I=()=>{c.loadMoreListBtn.classList.remove("hidden")},M=()=>{c.loadMoreListBtn.classList.add("hidden")},ne="https://furniture-store.b.goit.study/api",L={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},w=Q.create({baseURL:ne,headers:{"Content-Type":"application/json"}}),A=async e=>{u();try{return(await w.get(L.FURNITURES,{params:{page:e,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},se=async(e,t=1)=>{u();try{return(await w.get(L.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{d()}},ie=async(e=1,t)=>{u();try{return(await w.get(L.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{d()}},ce=async e=>{u();try{const t=await w.post(L.ORDERS,e);return l.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return l.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{d()}};let F=[];const le=e=>{F=e},ae=e=>F.find(t=>t._id===e),N=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},T=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,de=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:i,color:p,category:j}=e,y=N(o),z=Math.floor(y),K=y%1===.5,G=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,J=p.map((P,q)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${P}"
        class="color-item"
        id="color-${q}"
        ${q===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${P}"></span>
    </label>
  `).join("");c.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${G}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${j.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${K?"half":""} value-${z}"
        aria-label="Рейтинг ${y} з 5"
      >
        <div class="label-value" aria-hidden="true">${y}</div>
        ${T()}
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
    `).join("");c.furnitureList.innerHTML=t};let m=1;d();const ue=async()=>{m=1,u();const{furnitures:e,totalItems:t}=await A(m);d(),S(e);const r=Math.ceil(t/8);m>=r?l.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):I()},me=async()=>{m++,M(),u();const{furnitures:e,totalItems:t}=await A(m);S(e),d();const r=Math.ceil(t/8);m>=r?l.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):I()};async function fe(e){u();const t=await se(e);d(),t&&t.furnitures?(M(),S(t.furnitures)):(M(),c.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const pe=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(_(t),fe(t.dataset.id))},ge=()=>{const e=document.querySelector(".btn-list-section-iv");e&&_(e)},_=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};ue();document.addEventListener("DOMContentLoaded",()=>{c.categoriesList.addEventListener("click",pe),ge()});c.loadMoreListBtn.addEventListener("click",me);new W(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const O=document.getElementById("feedback-list");function ye({name:e,descr:t,rate:r}){const n=N(r),o=Math.floor(n),s=n%1===.5,i=document.createElement("div");return i.className="swiper-slide",i.innerHTML=`
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
  `,i}async function ve(){O.innerHTML="";const t=(await ie(1,10)).feedbacks||[];if(!t.length){l.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{O.appendChild(ye({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new X(".feedback-swiper",{modules:[Y,Z],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}ve();const he=document.querySelector(".modal-window-close-order-btn"),g=document.querySelector(".order-modal"),x=document.querySelector(".modal-window-form");let $=null,B=null;const D=e=>{e.code==="Escape"&&k()},U=e=>{e.target===g&&k()};function be(e,t){$=e,B=t,g.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",D),g.addEventListener("click",U)}function k(){console.log("ok"),g.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",D),g.removeEventListener("click",U),$=null,B=null}he.addEventListener("click",k);x.addEventListener("submit",Le);async function Le(e){e.preventDefault();const t=e.target.elements["user-email"].value.trim(),r=e.target.elements["user-tel"].value.trim(),n=e.target.elements["user-comment"].value.trim();if(!t){l.warning({message:'Заповніть поле "Email"!'});return}let o="";for(let i=0;i<r.length;i++){const p=r[i];p>="0"&&p<="9"&&(o+=p)}if(o.length!=12){l.warning({message:"Вкажіть номер телефону!"});return}if(n.length<5||n.length>64){l.warning({message:"Коментар має бути від 5 до 64 символів"});return}const s={email:t,phone:o,comment:n,modelId:$,color:B};try{await ce(s),k(),x.reset()}catch{}}let C=null;const H=e=>{e.code==="Escape"&&E()},V=e=>{e.target===c.productModal&&E()},we=(e,t)=>{C=e,c.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",H),c.productModal.addEventListener("click",V)},E=()=>{c.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",H),c.productModal.removeEventListener("click",V),C=null};c.modalCloseBtn.addEventListener("click",E);async function ke(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(r!=null&&r.dataset.color,!n)return;const o=ae(n);if(!o){l.error({title:"Error",message:"Товар не знайдено у кеші"});return}de(o),we(n)}c.furnitureList.addEventListener("click",ke);document.addEventListener("click",e=>{if(!e.target.closest(".order-btn"))return;const r=C,n=Ee();E(),be(r,n)});function Ee(){const e=document.querySelector('input[name="color"]:checked');return e?e.value:null}
//# sourceMappingURL=index.js.map
