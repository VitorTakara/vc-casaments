(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=`
    <footer class="vc-footer">
        2022 copyright - Vitor & Carol 
    </footer>
`;const c=`
    <header class="vc-header">
        <div class="wrapper">
            <a class="link">Inicio</a>
            <div class="logo">
                <img src="/assets/images/logos/logo_2.svg">
            </div>
            
            <a class="link">Presentes</a>
        </div>
    </header>
`;document.querySelector("#vc-footer").innerHTML=l;document.querySelector("#vc-header").innerHTML=c;window.seeMoreBio=()=>{document.querySelector("#bio-text-area").classList.add("-see-more"),document.querySelector("#see-more-btn").remove()};window.atualizaContador=()=>{let i=new Date,n=new Date(2024,2-1,25,10,0,0),s=parseInt((n-i)/1),o=parseInt(s/1e3),e=parseInt(o/60),t=parseInt(e/60),r=parseInt(t/24);s=s-o*1e3,o=o-e*60,e=e-t*60,t=t-r*24,r+t+e+o>0&&(document.getElementById("dd").innerHTML=toString(r).length?r:"",document.getElementById("hh").innerHTML=toString(t).length?t:"",document.getElementById("mm").innerHTML=toString(e).length?e:"",document.getElementById("ss").innerHTML=o,setTimeout(atualizaContador,1e3))};atualizaContador();
