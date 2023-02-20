import '/public/styles/main.scss';
import '/public/styles/components/vc-button.scss';
import '/public/pages/confirmacao/confirmacao.scss';

import { vcFooterHtml } from '/public/components/vc-footer/vc-footer.js';
import { vcHeaderHtml } from '/public/components/vc-header/vc-header.js';

document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

