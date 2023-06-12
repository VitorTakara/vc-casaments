import '/public/styles/main.scss';
import './pagamento-confirmado.scss';
import {
    vcFooterHtml
} from '/public/components/vc-footer/vc-footer.js';
import {
    vcHeaderHtml
} from '/public/components/vc-header/vc-header.js';
document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;
import thank from '../../assets/animations/thank.json';


const animate = bodymovin.loadAnimation({
    container: document.querySelector(`#lottie-thank`),
    animationData: thank,
    loop:false
})

animate.setSpeed(2)