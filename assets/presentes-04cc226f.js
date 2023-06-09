import{v as a,a as n}from"./vc-header-ab3291e9.js";/* empty css                  *//* empty css                 */document.querySelector("#vc-footer").innerHTML=a;document.querySelector("#vc-header").innerHTML=n;let i=1;const r=[{id:1,title:"Bronze 🤎",price:250,img:"../../assets/images/gifts/250.jpg"},{id:2,title:"Prata 🤍",price:500,img:"../../assets/images/gifts/500.jpg"},{id:3,title:"Ouro 💛",price:1e3,img:"../../assets/images/gifts/1000.jpg"},{id:4,title:"Master 💷",price:2500,img:"../../assets/images/gifts/2500.jpg"},{id:5,title:"Diamante 💎",price:5e3,img:"../../assets/images/gifts/5000.jpg"},{id:6,title:"✨ Super ✨",price:1e4,img:"../../assets/images/gifts/10000.jpg"}];window.buildPresentList=()=>{const e=document.querySelector("#step-1-presents-container");r.forEach(t=>e.insertAdjacentHTML("beforeend",getPresentCardTemplate(t)))};window.getPresentCardTemplate=e=>`
        <div class="present-card" onclick="selectGift(${e.id})">
            <div class="image">
                <img src="${e.img}">
            </div>

            <span class="title">${e.title}</span>
            <span class="price">${e.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</span>

            <div class="btn-wrapper">
                <button class="vc-button -small --thin">PRESENTEAR</button>
            </div>
        </div>
    `;window.changeStep=e=>{i=e,updateView()};window.goToPayment=()=>{let e=document.querySelector("#name").value;if(document.querySelector("#message").value,!e){alert("Por favor preencha nome e sobrenome");return}changeStep(3)};window.openMercadoPago=()=>{};window.selectGift=e=>{const t=r.find(c=>c.id===e);let s=document.querySelector("#gift-selected-img");s.style.background=`url(${t.img})`,s.style.backgroundPosition="center",s.style.backgroundSize="cover",document.querySelector("#gift-selected-name").innerHTML=t.title,localStorage.setItem("gift",t.price),changeStep(2)};window.updateView=()=>{document.querySelectorAll(".step").forEach(e=>e.classList.add("-hide")),document.querySelector(`#step-${i}`).classList.remove("-hide"),i===6&&setTimeout(()=>{i=1,updateView()},5e3)};buildPresentList();
