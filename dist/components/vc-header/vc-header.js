import '/public/styles/main.scss';
import '/public/components/vc-header/vc-header.scss';

import logo from '../../../assets/images/logos/logo_2.svg';

export const vcHeaderHtml = `
    <header class="vc-header">
        <div class="wrapper">
            <a class="link">Inicio</a>
            <div class="logo">
                <img src="${logo}">
            </div>
            
            <a class="link">Presentes</a>
        </div>
    </header>
`