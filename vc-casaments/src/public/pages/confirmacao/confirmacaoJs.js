function submitForm() {
    const convidadosInput = document.querySelectorAll('.convidado-input');
    let convidados = [];
    
    convidadosInput.forEach(input => convidados.push(input.value))
    console.log(convidados);
}

function addConvidadoInput(){
    let input = document.createElement('input');
    input.placeholder = 'Nome do convidado';
    input.classList.add('convidado-input');

    document.querySelector('#convidados-inputs').appendChild(input);
}

function buildInputsFromUrlParams() {
    const urlParams = new URL(location.href);
    const participantes = urlParams.searchParams.get("p");

    for(let num = 0; num < participantes; num++) {
        addConvidadoInput();
    }
}

buildInputsFromUrlParams();