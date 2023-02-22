import '/public/styles/main.scss';
import '/public/styles/components/vc-button.scss';
import './home.scss';

import { vcFooterHtml } from '/public/components/vc-footer/vc-footer.js';
import { vcHeaderHtml } from '/public/components/vc-header/vc-header.js';

document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

window.seeMoreBio = () => {
    document.querySelector('#bio-text-area').classList.add('-see-more');
    document.querySelector('#see-more-btn').remove();
}

window.atualizaContador = () => {
	let hoje = new Date();
	let futuro = new Date(2024,2-1,25,10,0,0);
	
	let ms = parseInt((futuro - hoje)/1);
	let ss = parseInt(ms / 1000);
	let mm = parseInt(ss / 60);
	let hh = parseInt(mm / 60);
	let dd = parseInt(hh / 24);
			
	ms = ms - (ss * 1000);
	ss = ss - (mm * 60);
	mm = mm - (hh * 60);
	hh = hh - (dd * 24);

	if (dd+hh+mm+ss > 0) {
		document.getElementById('dd').innerHTML = (toString(dd).length) ? dd : ''; 
		document.getElementById('hh').innerHTML = (toString(hh).length) ? hh : '';
		document.getElementById('mm').innerHTML = (toString(mm).length) ? mm : '';
		document.getElementById('ss').innerHTML = ss;
		setTimeout(atualizaContador,1000);
	}
}

atualizaContador();