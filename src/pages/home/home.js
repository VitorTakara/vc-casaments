import '/public/styles/main.scss';
import '/public/styles/components/vc-button.scss';
import './home.scss';

import { vcFooterHtml } from '/public/components/vc-footer/vc-footer.js';
import { vcHeaderHtml } from '/public/components/vc-header/vc-header.js';
import plant from '../../assets/animations/plant.json';

// import Swiper, {
//     SwiperPluginLazyload,
//     SwiperPluginPagination
// } from 'tiny-swiper'
// import SwiperPluginAutoPlay from 'tiny-swiper/lib/modules/autoPlay.min.js'

// Swiper.use([ SwiperPluginLazyload, SwiperPluginPagination, SwiperPluginAutoPlay  ])

// 	const swiper = new Swiper('.swiper-container',
// 	{
//         pagination: {
//           el: ".swiper-plugin-pagination",
//           clickable: true,
//           bulletClass: "swiper-plugin-pagination__item",
//           bulletActiveClass: "is-active"
//         },
// 		loop: true,
// 		autoplay: {
//             delay: 3000,
// 			disableOnInteraction: true
//         }
// 	})

document.querySelector('#vc-footer').innerHTML = vcFooterHtml;
document.querySelector('#vc-header').innerHTML = vcHeaderHtml;

[0,1,2,3].forEach(i => {
	bodymovin.loadAnimation({
		container: document.querySelector(`#lottie${i}`),
		animationData: plant
	})
})

// document.querySelector('#lottie').innerHTML = `<lottie-player src="${{...plant}}"  background="transparent"  speed="1" muted  loop autoplay></lottie-player>`

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