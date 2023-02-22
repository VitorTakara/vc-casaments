import '/public/styles/main.scss';
import '/public/styles/components/vc-button.scss';
import './confirmacao.scss';

import { vcFooterHtml } from '/public/components/vc-footer/vc-footer.js';
import { vcHeaderHtml } from '/public/components/vc-header/vc-header.js';

document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

let convidadosTotal;

window.submitForm = () => {
    // Bloqueia usuario de seguir com submit
    if(JSON.parse(localStorage.getItem('formHasAlreadySubmited'))) return;

    const convidadosInput = document.querySelectorAll('.convidado-input');
    let convidados = [];
    
    convidadosInput.forEach(input => convidados.push(input.value))
    console.log(convidados);

    // localStorage.setItem('formHasAlreadySubmited', true)
}

window.removeConvidadoInput = () => document.querySelector('#add-convidado-btn').remove();

window.convidadoInputHandler = () => {
    if(convidadosTotal === 1) removeConvidadoInput();

    convidadosTotal--;

    addConvidadoInput();
}

window.addConvidadoInput = () => {
    let input = document.createElement('input');
    input.placeholder = 'Nome do convidado';
    input.classList.add('convidado-input');

    document.querySelector('#convidados-inputs').appendChild(input);
}

window.buildInputsFromUrlParams = () => {
    const urlParams = new URL(location.href);
    const pParam = urlParams.searchParams.get("p");

    // Se não ter parametros
    if(!pParam) {
        removeConvidadoInput();
        return;
    }

    addConvidadoInput();

    convidadosTotal = atob(atob(atob(pParam))) - 1;
    
    // Handle de casos do convidados for = 1;
    if(!convidadosTotal) removeConvidadoInput();
}

buildInputsFromUrlParams();