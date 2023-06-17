import '/public/styles/main.scss';
import '/public/styles/components/vc-button.scss';
import '/public/styles/components/vc-input.scss';
import './confirmacao.scss';

import {
    vcFooterHtml
} from '/public/components/vc-footer/vc-footer.js';
import {
    vcHeaderHtml
} from '/public/components/vc-header/vc-header.js';

document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

import Swal from 'sweetalert2';

let convidadosTotal;
let convidadosTotalReversed = 1;


window.go = (answer) => {
    if (answer === "s") {
        localStorage.setItem('go', 's');
        document.querySelector("#message-not-going").classList.add('-hide');
        document.querySelector("#input-not-going").classList.add('-hide');

        document.querySelector("#message-going").classList.remove('-hide');
    } else {
        document.querySelector("#message-going").classList.add('-hide');

        document.querySelector("#message-not-going").classList.remove('-hide');
        document.querySelector("#input-not-going").classList.remove('-hide');
        localStorage.setItem('go', 'n');
    }

    document.querySelector("#step-1").classList.add('-hide');
    document.querySelector("#step-2").classList.remove('-hide');
}

window.submitForm = () => {
    // Bloqueia usuario de seguir com submit
    // if(JSON.parse(localStorage.getItem('formHasAlreadySubmited'))) return;
    

    Swal.fire({
        title: localStorage.getItem('go')  === 's' ? 'Confirmar presença' : 'Enviar nomes',
        html:  `
            <b style="font-weight: 900;">Você confirma que todos esses convidados ${localStorage.getItem('go') === 'n' ? 'NÃO' : ''}  estarão presentes no dia 25/02/2024?</b>
            <br><br>
            Por favor confire os nomes inseridos, pois ao enviar, você não poderá editar.
        `,
        icon: '',
        cancelButtonText: 'Voltar',
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonText: 'Confirmo!',
        confirmButtonColor: 'var(--color-primary)'
    }).then((r) => {
        if (r.isConfirmed) {
            const convidadosInput = document.querySelectorAll('.-convidado-input');
            let convidados = [];

            convidadosInput.forEach(input => {
               if(input.value)
                convidados.push(input.value)
            })

            if (!convidados.length) {
                Swal.fire({
                    title: 'Ops!',
                    text: 'Por favor preencha com pelo menos 1 nome de convidado',
                    icon: 'error',
                    confirmButtonText: 'Fechar',
                    confirmButtonColor: 'var(--color-primary)'
                })
                return;
            }

            let payload = JSON.stringify({
                date: new Date(),
                participants: convidados,
                go: localStorage.getItem('go', 's') ? true : false,
                message: document.querySelector("#input-not-going").value || "",
            })

            fetch('https://64833921f2e76ae1b95c2935.mockapi.io/api/confirmation1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payload
            }).then((res) => {
                if(res.status === 400)
                    fetch('https://64833921f2e76ae1b95c2935.mockapi.io/api/confirmation2', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: payload
                    }).then(() => window.afterConfirmationFetch())
                else if(res.ok)
                    window.afterConfirmationFetch()
                else
                    Swal.fire({
                        title: 'Ops!',
                        text: 'Algo deu errado nos nossos serviços... Por favor contatar um dos noivos',
                        icon: 'error',
                        confirmButtonText: 'Fechar',
                        confirmButtonColor: 'var(--color-primary)'
                    })
            })
        }
    })

}

window.afterConfirmationFetch = () => {
    window.location.href = "https://vitortakara.github.io/vc-casaments/pages/confirmacao-confirmado/";
    localStorage.setItem('formHasAlreadySubmited', true)
}

window.removeConvidadoInput = () => document.querySelector('#add-convidado-btn').remove();

window.convidadoInputHandler = () => {
    if (convidadosTotal === 1) removeConvidadoInput();

    convidadosTotal--;
    convidadosTotalReversed++;

    addConvidadoInput();
}

window.addConvidadoInput = () => {
    let input = document.createElement('input');
    input.placeholder = `Nome do convidado ${convidadosTotalReversed}`;
    input.classList.add('vc-input');
    input.classList.add('-convidado-input');

    document.querySelector('#convidados-inputs').appendChild(input);
}

window.buildInputsFromUrlParams = () => {
    if(JSON.parse(localStorage.getItem('formHasAlreadySubmited'))) {
        document.querySelector("#form").classList.add('-hide');
        document.querySelector("#confirmed").classList.remove('-hide');
    };

    const urlParams = new URL(location.href);
    const pParam = urlParams.searchParams.get("p");

    // Se não ter parametros
    if (!pParam) {
        removeConvidadoInput();
        return;
    }

    addConvidadoInput();

    convidadosTotal = atob(atob(atob(pParam))) - 1;

    // Handle de casos do convidados for = 1;
    if (!convidadosTotal) removeConvidadoInput();
}

buildInputsFromUrlParams();