import"./main-c8068ec8.js";import{v as t,a as n}from"./vc-header-c8ceb47e.js";document.querySelector("#vc-footer").innerHTML=t;document.querySelector("#vc-header").innerHTML=n;let d;window.submitForm=()=>{if(JSON.parse(localStorage.getItem("formHasAlreadySubmited")))return;const o=document.querySelectorAll(".convidado-input");let e=[];o.forEach(a=>e.push(a.value)),console.log(e)};window.convidadoInputHandler=()=>{d===1&&document.querySelector("#add-convidado-btn").remove(),d--,addConvidadoInput()};window.addConvidadoInput=()=>{let o=document.createElement("input");o.placeholder="Nome do convidado",o.classList.add("convidado-input"),document.querySelector("#convidados-inputs").appendChild(o)};window.buildInputsFromUrlParams=()=>{const e=new URL(location.href).searchParams.get("p");addConvidadoInput(),d=atob(atob(atob(e)))-1};buildInputsFromUrlParams();
