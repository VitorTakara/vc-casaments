(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const l=`
    <footer class="vc-footer">
        2022 copyright - Vitor & Carol 
    </footer>
`;const n="/vc-casaments/assets/logo_2-9cb74f7d.svg",a=`
    <header class="vc-header">
        <div class="wrapper">
            <a class="link">Inicio</a>
            <div class="logo">
                <img src="${n}">
            </div>
            
            <a class="link">Presentes</a>
        </div>
    </header>
`;export{a,l as v};
