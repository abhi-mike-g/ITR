(() => {
	// Mobile menu
	const toggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.main-nav');
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			const open = nav.classList.toggle('is-open');
			toggle.setAttribute('aria-expanded', String(open));
		});
	}

	// Hero slider: auto-advances, pauses on hover.
	const hero = document.querySelector('[data-slider]');
	if (hero) {
		const slides = hero.querySelectorAll('.hero-slide');
		const dots = hero.querySelectorAll('.hero-dots button');
		let current = 0;
		let timer;

		const show = (index) => {
			slides[current].classList.remove('is-active');
			dots[current].classList.remove('is-active');
			current = (index + slides.length) % slides.length;
			slides[current].classList.add('is-active');
			dots[current].classList.add('is-active');
		};

		const start = () => {
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
			timer = setInterval(() => show(current + 1), 5000);
		};
		const stop = () => clearInterval(timer);

		dots.forEach((dot, i) =>
			dot.addEventListener('click', () => {
				stop();
				show(i);
				start();
			})
		);
		hero.addEventListener('mouseenter', stop);
		hero.addEventListener('mouseleave', start);
		start();
	}

	// Product carousel arrows scroll by one card.
	const carousel = document.querySelector('[data-carousel]');
	if (carousel) {
		const step = () => {
			const card = carousel.querySelector('.product-card');
			return card ? card.getBoundingClientRect().width + 20 : 300;
		};
		document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => carousel.scrollBy({ left: -step() }));
		document.querySelector('[data-carousel-next]')?.addEventListener('click', () => carousel.scrollBy({ left: step() }));
	}
})();
