window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const sliderBlock = document.querySelector('.slider__block');
	const next = document.querySelector('.slider-next');
	const prev = document.querySelector('.slider-prev');
	const sliderBlockCount = document.querySelector('.slider__switch-count');
	const sliderItem = document.querySelectorAll('.slider__item');
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const form = document.querySelector('.form');
	const btn = document.querySelectorAll('.btn');
	const body = document.querySelector('body');
	const close = document.querySelector('.form__close');
	//hamburger
	hamburger.addEventListener('click', () => {
		menu.classList.toggle('active');
		hamburger.classList.toggle('hamburger-active');
	});



	// Slider
	let offset = 0;
	let current = 1;
	next.addEventListener('click', function () {
		offset = offset + 1200;
		current = current + 1;
		if (offset > 3600) {
			offset = 0;
			current = 1;
		}
		sliderBlock.style.left = -offset + 'px';
		sliderCurrent.textContent = current;
	});

	prev.addEventListener('click', function () {
		offset = offset - 1200;
		current = current - 1;
		if (offset < 0) {
			offset = 3600;
			current = +sliderItem.length;
		}
		sliderBlock.style.left = -offset + 'px';
		sliderCurrent.textContent = current;
	});
	// slider current
	const sliderCurrent = document.createElement('div');
	sliderCurrent.classList.add('slider__switch-current');
	sliderCurrent.textContent = current;
	sliderBlockCount.prepend(sliderCurrent);
	// slider count
	const sliderCount = document.createElement('div');
	sliderCount.classList.add('slider__switch-count');
	sliderCount.textContent = +sliderItem.length;
	sliderBlockCount.append(sliderCount);

	// Modal

	btn.forEach(item => {
		item.addEventListener('click', () => {
			form.classList.add('form__active');
			body.style.overflow = 'hidden';
		})
	});
	close.addEventListener('click', () => {
		form.classList.remove('form__active');
		body.style.overflow = 'visible';
	})

});

