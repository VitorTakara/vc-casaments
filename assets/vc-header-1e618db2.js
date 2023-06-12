(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=`
    <footer class="vc-footer">
        2023 copyright - Vitor & Caroline
    </footer>
`;const c="/vc-casaments/assets/logo_2-9cb74f7d.svg",l=`
    <header class="vc-header">
        <div class="wrapper">
            <a class="link" href="https://vitortakara.github.io/vc-casaments/pages/home/">Inicio</a>
            
            <a class="logo" href="https://vitortakara.github.io/vc-casaments/pages/home/">
                <img src="${c}">
            </a>
            
            <a class="link" href="https://vitortakara.github.io/vc-casaments/pages/presentes/">Presentes</a>
        </div>
    </header>
`;export{l as a,n as v};
