import{v as s,a as n}from"./vc-header-b67ae842.js";/* empty css                  */import{S as r}from"./sweetalert2.all-39c9ca13.js";const d="/vc-casaments/assets/250-2ca2d213.jpg",l="/vc-casaments/assets/500-35e0f4fc.jpg",m="/vc-casaments/assets/1000-b5a4a3c2.jpg",p="/vc-casaments/assets/2500-ccba2ad6.mp4",g="/vc-casaments/assets/5000-a33174b6.mp4",u="/vc-casaments/assets/10000-d27762f0.mp4",f="/vc-casaments/assets/250-2aa80db5.svg",v="/vc-casaments/assets/500-c86ae570.svg",b="/vc-casaments/assets/1000-dd54c0fd.svg",S="/vc-casaments/assets/2500-6529c881.svg",O="/vc-casaments/assets/5000-48c4e065.svg",y="/vc-casaments/assets/10000-7a408e82.svg";document.querySelector("#vc-footer").innerHTML=s;document.querySelector("#vc-header").innerHTML=n;let o=1;const i=[{id:1,title:"Bronze 🤎",price:250,img:d,mp:"https://www.mercadopago.com.br/checkout/v1/payment/redirect/da951989-0398-4ea8-8246-9f2a6fbe0d4f/payment-option-form/?router-request-id=30120a6a-492d-415d-8a09-c5b2c8434c5d&source=link&preference-id=308997953-ec15336e-3069-4a85-8f9b-b4a40ced94a3&p=5765991c1973d3a6e91b79c210aa1374#/",qr:"00020126400014BR.GOV.BCB.PIX0118vtakaraa@gmail.com5204000053039865406250.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO63041704"},{id:2,title:"Prata 🤍",price:500,img:l,mp:"https://www.mercadopago.com.br/payment-link/v1/redirect?preference-id=308997953-762ad138-f11b-4578-ab08-4a96bca7e385&source=link",qr:"00020126400014BR.GOV.BCB.PIX0118vtakaraa@gmail.com5204000053039865406500.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO6304A61E"},{id:3,title:"Ouro 💛",price:1e3,img:m,qr:"00020126400014BR.GOV.BCB.PIX0118vtakaraa@gmail.com52040000530398654071000.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO630406F0 "},{id:4,title:"Master 💷",price:2500,video:p,qr:"00020126580014BR.GOV.BCB.PIX013694266f83-4675-4348-a4ef-1247b6b0d74652040000530398654072500.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO630452EA"},{id:5,title:"Diamante 💎",price:5e3,video:g,qr:"00020126580014BR.GOV.BCB.PIX013694266f83-4675-4348-a4ef-1247b6b0d74652040000530398654075000.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO6304FF10 "},{id:6,title:"✨ Super ✨",price:1e4,video:u,qr:"00020126580014BR.GOV.BCB.PIX013694266f83-4675-4348-a4ef-1247b6b0d746520400005303986540810000.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO63044EC6 "}];window.buildPresentList=()=>{const e=document.querySelector("#step-1-presents-container");i.forEach(a=>e.insertAdjacentHTML("beforeend",getPresentCardTemplate(a)))};window.getPresentCardTemplate=e=>`
        <div class="present-card" onclick="selectGift(${e.id})">
            <div class="image">
                ${e.img?`<img src="${e.img}">`:`
                <video
                    src="${e.video}"
                    loop
                    muted
                    autoplay
                    playsinline
                    oncanplay="this.play()"
                    onloadedmetadata="this.muted = true"
                ></video>
                `}
            </div>

            <span class="title">${e.title}</span>
            <span class="price">${e.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</span>

            <div class="btn-wrapper">
                <button class="vc-button -small --thin">PRESENTEAR</button>
            </div>
        </div>
    `;window.changeStep=e=>{o=e,updateView()};window.goToPayment=()=>{let e=document.querySelector("#name").value,a=document.querySelector("#message").value;if(!e){r.fire({title:"Ops!",text:"Por favor preencha nome e sobrenome",icon:"error",confirmButtonText:"Fechar",confirmButtonColor:"var(--color-primary)"});return}let t=JSON.stringify({name:e,message:a,gift:localStorage.getItem("gift"),date:new Date});fetch("https://64833b17f2e76ae1b95c2cd2.mockapi.io/api/gift1",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).catch(()=>{fetch("https://64833b17f2e76ae1b95c2cd2.mockapi.io/api/gift2",{method:"POST",headers:{"Content-Type":"application/json"},body:t})}),changeStep(3)};window.selectPayment=e=>{if(e==="cc")r.fire({title:"Pagamento no Cartão",html:"Para finalizar o pagamento, você será redirecionado para o site oficial do Mercado Pago. <br>Não se preocupe, nós (Caroline e Vitor) garantimos que o processo é 100% seguro.",icon:"",confirmButtonText:"Ir para pagamento",confirmButtonColor:"var(--color-primary)"}).then(a=>{if(a.isConfirmed){let t=localStorage.getItem("giftlink");t?window.location.href=t:(r.fire({title:"Ops!",text:"Algo deu errado... Tente novamente mais tarde :(",icon:"error",confirmButtonText:"Ok",confirmButtonColor:"var(--color-primary)"}),changeStep(1))}});else{let a=parseFloat(localStorage.getItem("gift")),t;switch(a){case 250:t=f;break;case 500:t=v;break;case 1e3:t=b;break;case 2500:t=S;break;case 5e3:t=O;break;case 1e4:t=y;break}document.querySelector("#qr-code-area").setAttribute("src",t),changeStep(4)}};window.copyPixCode=()=>{let e=localStorage.getItem("giftqr");navigator.clipboard.writeText(e).then(()=>{r.fire({title:"Código PIX copiado!",text:"Cole o código no seu aplicativo de banco e depois clique em no botão finalizar :)",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"var(--color-primary)"})})};window.selectGift=e=>{const a=i.find(c=>c.id===e);let t=document.querySelector("#gift-selected-img");t.innerHTML="",t.style.background="url('')",a.img?(t.style.background=`url(${a.img})`,t.style.backgroundPosition="center",t.style.backgroundSize="cover"):t.insertAdjacentHTML("beforeend",`
            <video
                src="${a.video}"
                loop
                muted
                autoplay
                playsinline
                oncanplay="this.play()"
                onloadedmetadata="this.muted = true"
            ></video>
        `),document.querySelector("#gift-selected-name").innerHTML=a.title,localStorage.setItem("gift",a.price),localStorage.setItem("giftlink",a.mp),localStorage.setItem("giftqr",a.qr),changeStep(2)};window.updateView=()=>{document.querySelectorAll(".step").forEach(e=>e.classList.add("-hide")),document.querySelector(`#step-${o}`).classList.remove("-hide"),o===6&&setTimeout(()=>{o=1,updateView()},5e3)};window.redirectToSuccessPage=()=>{window.location.href="https://vitortakara.github.io/vc-casaments/pages/pagamento-confirmado/"};buildPresentList();
