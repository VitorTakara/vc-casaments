import '/public/styles/main.scss';
import './presentes.scss';
import '/public/styles/components/vc-button.scss';
import '/public/styles/components/vc-input.scss';
import {
    vcFooterHtml
} from '/public/components/vc-footer/vc-footer.js';
import {
    vcHeaderHtml
} from '/public/components/vc-header/vc-header.js';
document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

import Swal from 'sweetalert2';

import p250 from '../../assets/images/gifts/250.jpg';
import p500 from '../../assets/images/gifts/500.jpg';
import p1000 from '../../assets/images/gifts/1000.jpg';
import p2500 from '../../assets/images/gifts/2500.jpg';
import p5000 from '../../assets/images/gifts/5000.jpg';
import p10000 from '../../assets/images/gifts/10000.jpg';

let step = 1;

const presentList = [{
    id: 1,
    title: 'Bronze 🤎',
    price: 250,
    img: p250,
    mp: 'https://www.mercadopago.com.br/payment-link/v1/redirect?preference-id=308997953-ec15336e-3069-4a85-8f9b-b4a40ced94a3&source=link'
}, {
    id: 2,
    title: 'Prata 🤍',
    price: 500,
    img: p500,
    mp: 'https://www.mercadopago.com.br/payment-link/v1/redirect?preference-id=308997953-762ad138-f11b-4578-ab08-4a96bca7e385&source=link'
}, {
    id: 3,
    title: 'Ouro 💛',
    price: 1000,
    img: p1000
}, {
    id: 4,
    title: 'Master 💷',
    price: 2500,
    img: p2500
}, {
    id: 5,
    title: 'Diamante 💎',
    price: 5000,
    img: p5000
}, {
    id: 6,
    title: '✨ Super ✨',
    price: 10000,
    img: p10000
}]

window.buildPresentList = () => {
    const gridPresentRef = document.querySelector("#step-1-presents-container");
    presentList.forEach(present => gridPresentRef.insertAdjacentHTML("beforeend", getPresentCardTemplate(present)));
}

window.getPresentCardTemplate = (present) => {
    return `
        <div class="present-card" onclick="selectGift(${present.id})">
            <div class="image">
                <img src="${present.img}">
            </div>

            <span class="title">${present.title}</span>
            <span class="price">${present.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>

            <div class="btn-wrapper">
                <button class="vc-button -small --thin">PRESENTEAR</button>
            </div>
        </div>
    `;
}

window.changeStep = (stepNumber) => {
    step = stepNumber;
    updateView();
}

window.goToPayment = () => {
    let name = document.querySelector("#name").value;
    let message = document.querySelector("#message").value;

    if (!name) {
        Swal.fire({
            title: 'Ops!',
            text: 'Por favor preencha nome e sobrenome',
            icon: 'error',
            confirmButtonText: 'Fechar',
            confirmButtonColor: 'var(--color-primary)'
          })
        return;
    }

    changeStep(3);
}

window.openMercadoPago = (paymentMethod) => {
    Swal.fire({
        title: `Pagamento no ${paymentMethod === 'pix' ? 'PIX' : 'Cartão'}`,
        html: 'Para finalizar o pagamento, você será redirecionado para o site oficial do Mercado Pago. <br>Não se preocupe, nós (Caroline e Vitor) garantimos que o processo é 100% seguro.',
        icon: 'info',
        confirmButtonText: 'Ir para pagamento',
        confirmButtonColor: 'var(--color-primary)'
      }).then(() => {
        let link = localStorage.getItem("giftlink");
        if(link) window.location.href = link;
        else {
            Swal.fire({
                title: 'Ops!',
                text: 'Algo deu errado... Tente novamente mais tarde :(',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'var(--color-primary)'
              })
            changeStep(1);
        }
      })
}

window.selectGift = (presentId) => {
    const giftSelected = presentList.find(present => present.id === presentId);

    let giftSelectedImg = document.querySelector("#gift-selected-img");
    giftSelectedImg.style.background = `url(${giftSelected.img})`;
    giftSelectedImg.style.backgroundPosition = 'center';
    giftSelectedImg.style.backgroundSize = 'cover';

    document.querySelector("#gift-selected-name").innerHTML = giftSelected.title;

    localStorage.setItem("gift", giftSelected.price);
    localStorage.setItem("giftlink", giftSelected.mp);

    changeStep(2);
}

window.updateView = () => {
    // Some com todo mundo
    document.querySelectorAll(".step").forEach(step => step.classList.add('-hide'));

    // Aparece com o step atual selecionado
    document.querySelector(`#step-${step}`).classList.remove('-hide');

    // Tela de sucesso handler
    if (step === 6)
        setTimeout(() => {
            step = 1;
            updateView();
        }, 5000);
}

buildPresentList();