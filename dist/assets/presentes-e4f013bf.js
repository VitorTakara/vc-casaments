import{v as r,a as c}from"./vc-header-8c13a6be.js";/* empty css                 */document.querySelector("#vc-footer").innerHTML=r;document.querySelector("#vc-header").innerHTML=c;let t=1;const s=[{title:"Casa",price:2e3,img:"https://placekitten.com/g/300/300"},{title:"Ap",price:5e3,img:"https://placekitten.com/g/300/300"},{title:"Mansao",price:15e4,img:"https://placekitten.com/g/300/300"}];window.buildPresentList=()=>{const e=document.querySelector("#step-1");s.forEach(i=>e.insertAdjacentHTML("beforeend",getPresentCardTemplate(i)))};window.getPresentCardTemplate=e=>`
        <div class="present-card">
            <div class="image">
                <img src="${e.img}">
            </div>

            <span class="title">${e.title}</span>
            <span class="price">${e.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</span>

            <div class="btn-wrapper">
                <button onclick="changeStep(2)" class="vc-button -small -fill">COMPRAR</button>
            </div>
        </div>
    `;window.changeStep=e=>{t=e,updateView()};window.updateView=()=>{document.querySelectorAll(".step").forEach(e=>e.classList.add("-hide")),document.querySelector(`#step-${t}`).classList.remove("-hide"),t===4&&setTimeout(()=>{t=1,updateView()},5e3)};window.generatePixQrCode=()=>{new QRCode(document.getElementById("qrcode"),"blabla")};buildPresentList();generatePixQrCode();
