let convidadosTotal;

function submitForm() {
    // Bloqueia usuario de seguir com submit
    if(JSON.parse(localStorage.getItem('formHasAlreadySubmited'))) return;

    const convidadosInput = document.querySelectorAll('.convidado-input');
    let convidados = [];
    
    convidadosInput.forEach(input => convidados.push(input.value))
    console.log(convidados);

    // localStorage.setItem('formHasAlreadySubmited', true)
}

function convidadoInputHandler() {    
    if(convidadosTotal === 1) document.querySelector('#add-convidado-btn').remove();

    convidadosTotal--;

    addConvidadoInput();
}

function addConvidadoInput() {
    let input = document.createElement('input');
    input.placeholder = 'Nome do convidado';
    input.classList.add('convidado-input');

    document.querySelector('#convidados-inputs').appendChild(input);
}

function buildInputsFromUrlParams() {
    const urlParams = new URL(location.href);
    const pParam = urlParams.searchParams.get("p");

    addConvidadoInput();

    convidadosTotal = atob(pParam) - 1;

    console.log(convidadosTotal)
}

buildInputsFromUrlParams();