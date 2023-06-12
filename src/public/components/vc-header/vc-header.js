import '/public/styles/main.scss';
import '/public/components/vc-header/vc-header.scss';

import logo from '../../../assets/images/logos/logo_2.svg';

export const vcHeaderHtml = `
    <header class="vc-header">
        <div class="wrapper">
            <a class="link" href="https://vitortakara.github.io/vc-casaments/pages/home/">Inicio</a>
            
            <a class="logo" href="https://vitortakara.github.io/vc-casaments/pages/home/">
                <img src="${logo}">
            </a>
            
            <a class="link" href="https://vitortakara.github.io/vc-casaments/pages/presentes/">Presentes</a>
        </div>
    </header>
`