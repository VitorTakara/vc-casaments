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
import p2500 from '../../assets/videos/2500.mp4';
import p5000 from '../../assets/videos/5000.mp4';
import p10000 from '../../assets/videos/10000.mp4';

import qr250 from '../../assets/images/gifts/qrcode/250.svg';
import qr500 from '../../assets/images/gifts/qrcode/500.svg';
import qr1000 from '../../assets/images/gifts/qrcode/1000.svg';
import qr2500 from '../../assets/images/gifts/qrcode/2500.svg';
import qr5000 from '../../assets/images/gifts/qrcode/5000.svg';
import qr10000 from '../../assets/images/gifts/qrcode/10000.svg';

let step = 1;

const presentList = [{
    id: 1,
    title: 'Bronze 🤎',
    price: 250,
    img: p250,
    mp: 'https://www.mercadopago.com.br/checkout/v1/payment/redirect/a9d572cd-5261-4099-b3dc-1fb675f43958/payment-option-form/?router-request-id=5d4835a5-ed47-4d32-a8a8-d5140a75879a&source=link&preference-id=308997953-ec15336e-3069-4a85-8f9b-b4a40ced94a3&p=75d58db4a13119a7cca04eb770bb231f#/',
    qr: '00020126400014BR.GOV.BCB.PIX0118vtakaraa@gmail.com5204000053039865406250.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO63041704'
}, {
    id: 2,
    title: 'Prata 🤍',
    price: 500,
    img: p500,
    mp: 'https://www.mercadopago.com.br/payment-link/v1/redirect?preference-id=308997953-762ad138-f11b-4578-ab08-4a96bca7e385&source=link',
    qr: '00020126400014BR.GOV.BCB.PIX0118vtakaraa@gmail.com5204000053039865406500.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO6304A61E'
}, {
    id: 3,
    title: 'Ouro 💛',
    price: 1000,
    img: p1000,
    qr: '00020126400014BR.GOV.BCB.PIX0118vtakaraa@gmail.com52040000530398654071000.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO630406F0'
}, {
    id: 4,
    title: 'Master 💷',
    price: 2500,
    video: p2500,
    qr: '00020126580014BR.GOV.BCB.PIX013694266f83-4675-4348-a4ef-1247b6b0d74652040000530398654072500.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO630452EA'
}, {
    id: 5,
    title: 'Diamante 💎',
    price: 5000,
    video: p5000,
    qr: '00020126580014BR.GOV.BCB.PIX013694266f83-4675-4348-a4ef-1247b6b0d74652040000530398654075000.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO6304FF10'
}, {
    id: 6,
    title: '✨ Super ✨',
    price: 10000,
    video: p10000,
    qr: '00020126580014BR.GOV.BCB.PIX013694266f83-4675-4348-a4ef-1247b6b0d746520400005303986540810000.005802BR5925Vitor Masaaki De Jesus Ta6009SAO PAULO61080540900062260522VITORCAROLINECASAMENTO63044EC6'
}]

window.buildPresentList = () => {
    const gridPresentRef = document.querySelector("#step-1-presents-container");
    presentList.forEach(present => gridPresentRef.insertAdjacentHTML("beforeend", getPresentCardTemplate(present)));
}

window.getPresentCardTemplate = (present) => {
    return `
        <div class="present-card" onclick="selectGift(${present.id})">
            <div class="image">
                ${present.img ? `<img src="${present.img}">`:  `
                <video
                    src="${present.video}"
                    loop
                    muted
                    disableRemotePlayback
                    autoplay
                    playsinline
                    oncanplay="this.play()"
                    onloadedmetadata="this.muted = true"
                ></video>
                ` }
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

    let payload = JSON.stringify({
        name,
        message,
        gift: localStorage.getItem("gift"),
        date: new Date()
    })

    fetch('https://64833b17f2e76ae1b95c2cd2.mockapi.io/api/gift1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload
    }).then((res) => {
        if(res.ok) return;

        if(res.status === 400)
            fetch('https://64833b17f2e76ae1b95c2cd2.mockapi.io/api/gift2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payload
            })
        else
            Swal.fire({
                title: 'Ops!',
                text: 'Algo deu errado nos nossos serviços... Por favor contatar um dos noivos',
                icon: 'error',
                confirmButtonText: 'Fechar',
                confirmButtonColor: 'var(--color-primary)'
            })
    })

    changeStep(3);
}

window.selectPayment = (paymentMethod) => {
    if (paymentMethod === 'cc')
        Swal.fire({
            title: 'Pagamento no Cartão',
            html: 'Para finalizar o pagamento, você será redirecionado para o site oficial do Mercado Pago. <br>Não se preocupe, nós (Caroline e Vitor) garantimos que o processo é 100% seguro.',
            icon: '',
            confirmButtonText: 'Ir para pagamento',
            confirmButtonColor: 'var(--color-primary)'
        }).then((r) => {
            if (r.isConfirmed) {
                let link = localStorage.getItem("giftlink");
                if (link) window.location.href = link;
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
            }
        })
    else {
        // PIX Mode
        let giftValue = parseFloat(localStorage.getItem("gift"));

        let img;

        switch (giftValue) {
            case 250:
                img = qr250;
                break;

            case 500:
                img = qr500;
                break;

            case 1000:
                img = qr1000;
                break;

            case 2500:
                img = qr2500;
                break;

            case 5000:
                img = qr5000;
                break;

            case 10000:
                img = qr10000;
                break;
        }

        document.querySelector('#qr-code-area').setAttribute('src', img);

        changeStep(4);
    }
}

window.copyPixCode = () => {
    let text = localStorage.getItem("giftqr");

    navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
            title: 'Código PIX copiado!',
            text: 'Cole o código no seu aplicativo de banco e depois clique em no botão finalizar :)',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: 'var(--color-primary)'
        })
    });
}

window.selectGift = (presentId) => {
    const giftSelected = presentList.find(present => present.id === presentId);

    let giftSelectedImg = document.querySelector("#gift-selected-img");

    // Reset Styles
    giftSelectedImg.innerHTML = "";
    giftSelectedImg.style.background = `url('')`;

    // Set Bg
    if (giftSelected.img) {
        giftSelectedImg.style.background = `url(${giftSelected.img})`;
        giftSelectedImg.style.backgroundPosition = 'center';
        giftSelectedImg.style.backgroundSize = 'cover';
    } else {
        giftSelectedImg.insertAdjacentHTML("beforeend", `
            <video
                src="${giftSelected.video}"
                loop
                muted
                disableRemotePlayback
                autoplay
                playsinline
                oncanplay="this.play()"
                onloadedmetadata="this.muted = true"
            ></video>
        `)

    }

    document.querySelector("#gift-selected-name").innerHTML = giftSelected.title;

    localStorage.setItem("gift", giftSelected.price);
    localStorage.setItem("giftlink", giftSelected.mp);
    localStorage.setItem("giftqr", giftSelected.qr);

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

window.redirectToSuccessPage = () => {
    window.location.href = "https://vitortakara.github.io/vc-casaments/pages/pagamento-confirmado/";
}

buildPresentList();