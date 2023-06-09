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

let step = 1;

const presentList = [{
    id: 1,
    title: 'Bronze 🤎',
    price: 250,
    img: '../../assets/images/gifts/250.jpg'
}, {
    id: 2,
    title: 'Prata 🤍',
    price: 500,
    img: '../../assets/images/gifts/500.jpg'
}, {
    id: 3,
    title: 'Ouro 💛',
    price: 1000,
    img: '../../assets/images/gifts/1000.jpg'
}, {
    id: 4,
    title: 'Master 💷',
    price: 2500,
    img: '../../assets/images/gifts/2500.jpg'
}, {
    id: 5,
    title: 'Diamante 💎',
    price: 5000,
    img: '../../assets/images/gifts/5000.jpg'
}, {
    id: 6,
    title: '✨ Super ✨',
    price: 10000,
    img: '../../assets/images/gifts/10000.jpg'
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
        alert("Por favor preencha nome e sobrenome")
        return;
    }

    changeStep(3);
}

window.openMercadoPago = () => {
  
}

window.selectGift = (presentId) => {
    const giftSelected = presentList.find(present => present.id === presentId);

    let giftSelectedImg = document.querySelector("#gift-selected-img");
    giftSelectedImg.style.background = `url(${giftSelected.img})`;
    giftSelectedImg.style.backgroundPosition = 'center';
    giftSelectedImg.style.backgroundSize = 'cover';

    document.querySelector("#gift-selected-name").innerHTML = giftSelected.title;

    localStorage.setItem("gift", giftSelected.price);

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