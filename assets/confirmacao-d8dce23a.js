import{v as c,a as s}from"./vc-header-b67ae842.js";/* empty css                  */import{S as i}from"./sweetalert2.all-39c9ca13.js";document.querySelector("#vc-footer").innerHTML=c;document.querySelector("#vc-header").innerHTML=s;let t,d=1;window.go=e=>{e==="s"?(localStorage.setItem("go","s"),document.querySelector("#message-not-going").classList.add("-hide"),document.querySelector("#input-not-going").classList.add("-hide"),document.querySelector("#message-going").classList.remove("-hide")):(document.querySelector("#message-going").classList.add("-hide"),document.querySelector("#message-not-going").classList.remove("-hide"),document.querySelector("#input-not-going").classList.remove("-hide"),localStorage.setItem("go","n")),document.querySelector("#step-1").classList.add("-hide"),document.querySelector("#step-2").classList.remove("-hide")};window.submitForm=()=>{i.fire({title:localStorage.getItem("go")==="s"?"Confirmar presença":"Enviar nomes",html:`
            <b style="font-weight: 900;">Você confirma que todos esses convidados ${localStorage.getItem("go")==="n"?"NÃO":""}  estarão presentes no dia 25/02/2024?</b>
            <br><br>
            Por favor confire os nomes inseridos, pois ao enviar, você não poderá editar.
        `,icon:"",cancelButtonText:"Voltar",showCancelButton:!0,reverseButtons:!0,confirmButtonText:"Confirmo!",confirmButtonColor:"var(--color-primary)"}).then(e=>{if(e.isConfirmed){const o=document.querySelectorAll(".-convidado-input");let a=[];if(o.forEach(r=>{r.value&&a.push(r.value)}),!a.length){i.fire({title:"Ops!",text:"Por favor preencha com pelo menos 1 nome de convidado",icon:"error",confirmButtonText:"Fechar",confirmButtonColor:"var(--color-primary)"});return}let n=JSON.stringify({date:new Date,participants:a,go:!!localStorage.getItem("go","s"),message:document.querySelector("#input-not-going").value||""});fetch("https://64833921f2e76ae1b95c2935.mockapi.io/api/confirmation1",{method:"POST",headers:{"Content-Type":"application/json"},body:n}).then(()=>window.afterConfirmationFetch()).catch(()=>{fetch("https://64833921f2e76ae1b95c2935.mockapi.io/api/confirmation2",{method:"POST",headers:{"Content-Type":"application/json"},body:n}).then(()=>window.afterConfirmationFetch())})}})};window.afterConfirmationFetch=()=>{window.location.href="https://vitortakara.github.io/vc-casaments/pages/confirmacao-confirmado/",localStorage.setItem("formHasAlreadySubmited",!0)};window.removeConvidadoInput=()=>document.querySelector("#add-convidado-btn").remove();window.convidadoInputHandler=()=>{t===1&&removeConvidadoInput(),t--,d++,addConvidadoInput()};window.addConvidadoInput=()=>{let e=document.createElement("input");e.placeholder=`Nome do convidado ${d}`,e.classList.add("vc-input"),e.classList.add("-convidado-input"),document.querySelector("#convidados-inputs").appendChild(e)};window.buildInputsFromUrlParams=()=>{JSON.parse(localStorage.getItem("formHasAlreadySubmited"))&&(document.querySelector("#form").classList.add("-hide"),document.querySelector("#confirmed").classList.remove("-hide"));const o=new URL(location.href).searchParams.get("p");if(!o){removeConvidadoInput();return}addConvidadoInput(),t=atob(atob(atob(o)))-1,t||removeConvidadoInput()};buildInputsFromUrlParams();