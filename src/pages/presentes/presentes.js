import '/public/styles/main.scss';
import './presentes.scss';
import '/public/styles/components/vc-button.scss';
import '/public/styles/components/vc-input.scss';
import { vcFooterHtml } from '/public/components/vc-footer/vc-footer.js';
import { vcHeaderHtml } from '/public/components/vc-header/vc-header.js';
document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

let step = 1;
const presentList = [{
    title: 'Casa',
    price: 2000,
    img: 'https://placekitten.com/g/300/300'
},{
    title: 'Ap',
    price: 5000,
    img: 'https://placekitten.com/g/300/300'
},{
    title: 'Mansao',
    price: 150000,
    img: 'https://placekitten.com/g/300/300'
}]

window.buildPresentList = () => {
    const gridPresentRef = document.querySelector("#step-1");
    presentList.forEach(present => gridPresentRef.insertAdjacentHTML("beforeend", getPresentCardTemplate(present)));
}

window.getPresentCardTemplate = (present) => {
    return `
        <div class="present-card">
            <div class="image">
                <img src="${present.img}">
            </div>

            <span class="title">${present.title}</span>
            <span class="price">${present.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>

            <div class="btn-wrapper">
                <button onclick="changeStep(2)" class="vc-button -small -fill">COMPRAR</button>
            </div>
        </div>
    `;
}

window.changeStep = (stepNumber) => {
    step = stepNumber;
    updateView();
}

window.updateView = () => {
    // Some com todo mundo
    document.querySelectorAll(".step").forEach(step => step.classList.add('-hide'));

    // Aparece com o step atual selecionado
    document.querySelector(`#step-${step}`).classList.remove('-hide');

    // Tela de sucesso handler
    if(step === 4){
        setTimeout(() => {
          step = 1;
          updateView();  
        }, 5000);
    }
}

window.generatePixQrCode = () => {
    // const pixKey = "+5511966378394";
    // const value = "100.00";

    
    // const qrCodePix = QrCodePix({
    //     version: '01',
    //     key: pixKey, //or any PIX key
    //     name: 'Vitor Teste',
    //     city: 'SAO PAULO',
    //     transactionId: '00020101021126360014', //max 25 characters
    //     message: 'Pay me :)',
    //     cep: '06719500',
    //     value: 150.99,
    // });

    new QRCode(document.getElementById("qrcode"), 'blabla');
}

buildPresentList();
generatePixQrCode();