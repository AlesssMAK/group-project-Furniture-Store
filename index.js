import{a as ee,i as l,A as te,S as re,N as oe,P as ne}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const $=document.querySelector(".burger"),d=document.querySelector(".mobile-menu"),se=d.querySelector(".modal-window-close-btn"),ie=d.querySelectorAll("a"),ce=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),B=document.body,F=e=>{e.code==="Escape"&&u()},_=e=>{e.target===d&&u()};function le(){d.classList.add("is-open"),$.setAttribute("aria-expanded","true"),B.style.overflow="hidden",window.addEventListener("keydown",F),d.addEventListener("click",_)}function u(){d.classList.remove("is-open"),$.setAttribute("aria-expanded","false"),B.style.overflow="",window.removeEventListener("keydown",F),d.removeEventListener("click",_)}$.addEventListener("click",le);se.addEventListener("click",u);d.addEventListener("click",e=>{e.target===d&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("open")&&u()});ie.forEach(e=>{e.addEventListener("click",()=>u())});ce.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),u();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const O=document.querySelector(".header-logo");O&&O.addEventListener("click",e=>{e.preventDefault(),u();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});B.setAttribute("tabindex","-1");const c={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal"),flOneBtn:document.querySelector(".fl-one")},h=document.getElementById("loader"),m=()=>{h&&h.classList.remove("hidden")},f=()=>{h&&h.classList.add("hidden")},b=()=>{c.loadMoreListBtn.classList.remove("hidden")},y=()=>{c.loadMoreListBtn.classList.add("hidden")},ae="https://furniture-store.b.goit.study/api",k={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},E=ee.create({baseURL:ae,headers:{"Content-Type":"application/json"}}),N=async e=>{m();try{return(await E.get(k.FURNITURES,{params:{page:e,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{f()}},T=async(e,t=1)=>{m();try{return(await E.get(k.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{f()}},de=async(e=1,t)=>{m();try{return(await E.get(k.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{f()}},ue=async e=>{m();try{const t=await E.post(k.ORDERS,e);return l.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return l.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{f()}};let x=[];const me=e=>{x=e},fe=e=>x.find(t=>t._id===e),D=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},U=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,pe=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:i,color:p,category:Q}=e,g=D(o),W=Math.floor(g),X=g%1===.5,Y=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,Z=p.map((R,I)=>`
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${R}"
        class="color-item"
        id="color-${I}"
        ${I===0?"checked":""}
      />
      <span class="color-checkbox-circle" style="background-color: ${R}"></span>
    </label>
  `).join("");c.productMadalContainer.innerHTML=`
      <div class="modal-product-img-gallery">${Y}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${Q.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${X?"half":""} value-${W}"
        aria-label="Рейтинг ${g} з 5"
      >
        <div class="label-value" aria-hidden="true">${g}</div>
        ${U()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${Z}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${i}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},L=e=>{me(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
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
    `).join("");c.furnitureList.innerHTML=t};let a=1;const w=8;document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=c.categoriesList)==null||e.addEventListener("click",ge),(t=c.loadMoreListBtn)==null||t.addEventListener("click",he),V(),ye()});const ye=()=>{const e=document.querySelector(".btn-list-section-iv");e&&H(e)},H=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")},V=async()=>{a=1,m();try{const{furnitures:e,totalItems:t}=await N(a);L(e);const r=Math.ceil(t/w);a<r?b():y()}catch{l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),y()}finally{f()}};async function ve(e,t=1){m();try{const{furnitures:r,totalItems:n}=await T(e,t);L(r);const o=Math.ceil(n/w);t<o?b():y()}catch{y(),c.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>"}finally{f()}}const ge=async e=>{const t=e.target.closest(".btn-list-section-iv");if(!t)return;H(t);const r=t.dataset.id;!r||r==="all"?await V():(a=1,await ve(r,a))},he=async()=>{const e=document.querySelector(".btn-list-section-iv.active-btn-iv"),t=e==null?void 0:e.dataset.id;a+=1,y(),m();try{if(!t||t==="all"){const{furnitures:r,totalItems:n}=await N(a);L(r);const o=Math.ceil(n/w);a<o&&b()}else{const{furnitures:r,totalItems:n}=await T(t,a);L(r);const o=Math.ceil(n/w);a<o&&b()}}catch{l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3})}finally{f()}};new te(".accordion-container",{duration:250,showMultiple:!1});const A=document.getElementById("feedback-list");function be({name:e,descr:t,rate:r}){const n=D(r),o=Math.floor(n),s=n%1===.5,i=document.createElement("div");return i.className="swiper-slide",i.innerHTML=`
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${s?"half":""} value-${o}"
        aria-label="Рейтинг ${n} з 5"
      >
        <div class="label-value" aria-hidden="true">${n}</div>
        ${U()}
      </div>

      <p class="feedback-text">"${t}"</p>
      <p class="feedback-author">— ${e}</p>
    </div>
  `,i}async function Le(){A.innerHTML="";const t=(await de(1,10)).feedbacks||[];if(!t.length){l.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{A.appendChild(be({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new re(".feedback-swiper",{modules:[oe,ne],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}Le();const we=document.querySelector(".modal-window-close-order-btn"),v=document.querySelector(".order-modal"),j=document.querySelector(".modal-window-form");let P=null,q=null;const z=e=>{e.code==="Escape"&&M()},G=e=>{e.target===v&&M()};function ke(e,t){P=e,q=t,v.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",z),v.addEventListener("click",G)}function M(){v.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",z),v.removeEventListener("click",G),P=null,q=null}we.addEventListener("click",M);j.addEventListener("submit",Ee);async function Ee(e){e.preventDefault();const t=e.target.elements["user-email"].value.trim(),r=e.target.elements["user-tel"].value.trim(),n=e.target.elements["user-comment"].value.trim();if(!t){l.warning({message:'Заповніть поле "Email"!'});return}let o="";for(let i=0;i<r.length;i++){const p=r[i];p>="0"&&p<="9"&&(o+=p)}if(o.length!=12){l.warning({message:"Вкажіть номер телефону!"});return}if(n.length<5||n.length>64){l.warning({message:"Коментар має бути від 5 до 64 символів"});return}const s={email:t,phone:o,comment:n,modelId:P,color:q};try{await ue(s),M(),j.reset()}catch{l.error({message:"Помилка при надсиланні замовлення. Спробуйте ще раз."})}}let C=null;const K=e=>{e.code==="Escape"&&S()},J=e=>{e.target===c.productModal&&S()},Me=(e,t)=>{C=e,c.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",K),c.productModal.addEventListener("click",J)},S=()=>{c.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",K),c.productModal.removeEventListener("click",J),C=null};c.modalCloseBtn.addEventListener("click",S);async function Se(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(r!=null&&r.dataset.color,!n)return;const o=fe(n);if(!o){l.error({title:"Error",message:"Товар не знайдено у кеші"});return}pe(o),Me(n)}c.furnitureList.addEventListener("click",Se);document.addEventListener("click",e=>{if(!e.target.closest(".order-btn"))return;const r=C,n=$e();S(),ke(r,n)});function $e(){const e=document.querySelector('input[name="color"]:checked');return e?e.value:null}
//# sourceMappingURL=index.js.map
