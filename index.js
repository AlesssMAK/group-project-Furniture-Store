import{a as X,i as l,A as Y,S as Z,N as ee,P as te}from"./assets/vendor-DGn7RuFN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const E=document.querySelector(".burger"),a=document.querySelector(".mobile-menu"),re=a.querySelector(".modal-window-close-btn"),oe=a.querySelectorAll("a"),ne=document.querySelectorAll(".btn-buy, .btn-buy-mobile"),M=document.body,I=e=>{e.code==="Escape"&&d()},A=e=>{e.target===a&&d()};function se(){a.classList.add("is-open"),E.setAttribute("aria-expanded","true"),M.style.overflow="hidden",window.addEventListener("keydown",I),a.addEventListener("click",A)}function d(){a.classList.remove("is-open"),E.setAttribute("aria-expanded","false"),M.style.overflow="",window.removeEventListener("keydown",I),a.removeEventListener("click",A)}E.addEventListener("click",se);re.addEventListener("click",d);a.addEventListener("click",e=>{e.target===a&&d()});document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.contains("open")&&d()});oe.forEach(e=>{e.addEventListener("click",()=>d())});ne.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),d();const r=document.querySelector("#furniture")||document.querySelector("#furniture-list");r&&r.scrollIntoView({behavior:"smooth"})})});const R=document.querySelector(".header-logo");R&&R.addEventListener("click",e=>{e.preventDefault(),d();const t=document.querySelector("#hero");t?t.scrollIntoView({behavior:"smooth"}):window.location.href="index.html"});M.setAttribute("tabindex","-1");const c={furnitureList:document.querySelector(".furniture-list-render"),productModal:document.querySelector(".furniture-details-modal"),productMadalContainer:document.querySelector(".furniture-modal-product"),modalOrderBtn:document.querySelector(".order-btn"),modalCloseBtn:document.querySelector(".modal-furnt-close-btn"),categoriesList:document.querySelector(".menu-list-section-iv"),loadMoreListBtn:document.querySelector(".btn-load-more-list"),orderModal:document.querySelector(".order-modal")},y=document.getElementById("loader"),m=()=>{y&&y.classList.remove("hidden")},u=()=>{y&&y.classList.add("hidden")},F=()=>{c.loadMoreListBtn.classList.remove("hidden")},k=()=>{c.loadMoreListBtn.classList.add("hidden")},ie="https://furniture-store.b.goit.study/api",h={FURNITURES:"/furnitures",CATEGORIES:"/categories",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},b=X.create({baseURL:ie,headers:{"Content-Type":"application/json"}}),N=async e=>{m();try{return(await b.get(h.FURNITURES,{params:{page:e,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{u()}},ce=async(e,t=1)=>{m();try{return(await b.get(h.FURNITURES,{params:{category:e,page:t,limit:8}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити меблі. Спробуйте пізніше.",position:"topRight",timeout:4e3}),null}finally{u()}},le=async(e=1,t)=>{m();try{return(await b.get(h.FEEDBACKS,{params:{page:e,limit:t}})).data}catch{return l.error({title:"Помилка",message:"Не вдалося завантажити відгуки. Спробуйте оновити сторінку.",position:"topRight",timeout:4e3}),null}finally{u()}},ae=async e=>{m();try{const t=await b.post(h.ORDERS,e);return l.success({title:"Успіх!",message:"Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",position:"topRight",timeout:4e3}),t.data}catch{return l.error({title:"Помилка замовлення",message:"Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.",position:"topRight",timeout:4e3}),null}finally{u()}};let T=[];const de=e=>{T=e},ue=e=>T.find(t=>t._id===e),_=e=>{const t=Math.max(0,Math.min(5,Number(e)||0));return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.round(t*2)/2},x=()=>`
    <div class="star-container">
      ${Array.from({length:5}).map(()=>`
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`).join("")}
    </div>`,me=e=>{const{name:t,description:r,images:n,rate:o,price:s,sizes:i,color:f,category:K}=e,v=_(o),G=Math.floor(v),J=v%1===.5,Q=`
      <div class="gallery">
        <img src="${n[0]}" alt="${t}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${n[1]}" alt="${t}" class="gallery__item" />
          <img src="${n[2]}" alt="${t}" class="gallery__item" />
        </div>
      </div>
    `,W=f.map((P,q)=>`
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
      <div class="modal-product-img-gallery">${Q}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${t}</h2>
        <p class="gategory-text">${K.name}</p>
        <p class="product-price">${s} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${J?"half":""} value-${G}"
        aria-label="Рейтинг ${v} з 5"
      >
        <div class="label-value" aria-hidden="true">${v}</div>
        ${x()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${W}</div>
        <p class="product-description">${r}</p>
        <p class="product-size">Розміри: ${i}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `},S=e=>{de(e);const t=e.map(({images:r,_id:n,type:o,price:s})=>`
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
    `).join("");c.furnitureList.innerHTML=t};let p=1;u();const pe=async()=>{p=1,m();const{furnitures:e,totalItems:t}=await N(p);u(),S(e);const r=Math.ceil(t/8);p>=r?l.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):F()},fe=async()=>{p++,k(),m();const{furnitures:e,totalItems:t}=await N(p);S(e),u();const r=Math.ceil(t/8);p>=r?l.info({title:"Повідомлення",message:"Всі меблі завантаженні.",position:"topRight",timeout:4e3}):F()};async function ge(e){m();const t=await ce(e);u(),t&&t.furnitures?(k(),S(t.furnitures)):(k(),c.furnitureList.innerHTML="<p>Не вдалося завантажити меблі.</p>")}const ve=async e=>{const t=e.target.closest(".btn-list-section-iv");console.log(t),t&&(D(t),ge(t.dataset.id))},ye=()=>{const e=document.querySelector(".btn-list-section-iv");e&&D(e)},D=e=>{document.querySelectorAll(".btn-list-section-iv").forEach(t=>t.classList.remove("active-btn-iv")),e.classList.add("active-btn-iv")};pe();document.addEventListener("DOMContentLoaded",()=>{c.categoriesList.addEventListener("click",ve),ye()});c.loadMoreListBtn.addEventListener("click",fe);new Y(".accordion-container",{duration:250,showMultiple:!1,onOpen:function(e){console.log(e)}});const O=document.getElementById("feedback-list");function he({name:e,descr:t,rate:r}){const n=_(r),o=Math.floor(n),s=n%1===.5,i=document.createElement("div");return i.className="swiper-slide",i.innerHTML=`
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
  `,i}async function be(){O.innerHTML="";const t=(await le(1,10)).feedbacks||[];if(!t.length){l.error({title:"Помилка",message:"Не отримано список відгуків з API",position:"topRight"});return}t.forEach(r=>{O.appendChild(he({name:r.name||"Анонім",descr:r.descr||"",rate:r.rate??0}))}),new Z(".feedback-swiper",{modules:[ee,te],loop:!1,centeredSlides:!1,initialSlide:0,watchOverflow:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:24}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}be();const Le=document.querySelector(".modal-window-close-order-btn"),g=document.querySelector(".order-modal"),U=document.querySelector(".modal-window-form");let $=null,B=null;const H=e=>{e.code==="Escape"&&L()},V=e=>{e.target===g&&L()};function we(e,t){$=e,B=t,g.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",H),g.addEventListener("click",V)}function L(){console.log("ok"),g.classList.remove("is-open"),document.body.style.overflow="",window.removeEventListener("keydown",H),g.removeEventListener("click",V),$=null,B=null}Le.addEventListener("click",L);U.addEventListener("submit",ke);async function ke(e){e.preventDefault();const t=e.target.elements["user-email"].value.trim(),r=e.target.elements["user-tel"].value.trim(),n=e.target.elements["user-comment"].value.trim();if(!t){l.warning({message:'Заповніть поле "Email"!'});return}let o="";for(let i=0;i<r.length;i++){const f=r[i];f>="0"&&f<="9"&&(o+=f)}if(o.length!=12){l.warning({message:"Вкажіть номер телефону!"});return}if(n.length<5||n.length>64){l.warning({message:"Коментар має бути від 5 до 64 символів"});return}const s={email:t,phone:o,comment:n,modelId:$,color:B};try{await ae(s),L(),U.reset()}catch{}}let C=null;const j=e=>{e.code==="Escape"&&w()},z=e=>{e.target===c.productModal&&w()},Ee=(e,t)=>{C=e,c.productModal.classList.add("modal-is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",j),c.productModal.addEventListener("click",z)},w=()=>{c.productModal.classList.remove("modal-is-open"),document.body.style.overflow="",window.removeEventListener("keydown",j),c.productModal.removeEventListener("click",z),C=null};c.modalCloseBtn.addEventListener("click",w);async function Me(e){const t=e.target.closest(".furniture-list-render-btn");if(!t)return;const r=t.closest(".furniture-list-render-item"),n=r==null?void 0:r.dataset.id;if(r!=null&&r.dataset.color,!n)return;const o=ue(n);if(!o){l.error({title:"Error",message:"Товар не знайдено у кеші"});return}me(o),Ee(n)}c.furnitureList.addEventListener("click",Me);document.addEventListener("click",e=>{if(!e.target.closest(".order-btn"))return;const r=C,n=Se();w(),we(r,n)});function Se(){const e=document.querySelector('input[name="color"]:checked');return e?e.value:null}
//# sourceMappingURL=index.js.map
