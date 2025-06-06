$('#copy-button').on('click', async event => {
	event.preventDefault();
	const textElement = $(event.target).find('p');

	if (textElement.text() !== 'Copied!') {
		await navigator.clipboard.writeText('somewhere.mc.in.th:24752');
		textElement.text('Copied!');
		setTimeout(() => {
			textElement.text('somewhere.mc.in.th:24752');
		}, 1500);
	}
});

new Typed('#title', {
	strings: ['<span class="text-2xl">Welcome to <h2 class="inline text-white">States of Somewhere!</h2></span>'],
	typeSpeed: 40,
	startDelay: 750,
	loop: false,
	cursorChar: '<span class="text-2xl">|</span>',
	onComplete: self => {
		self.cursor.remove();
		$('[data-hidden]').fadeIn('slow', function () {
			$(this).removeAttr('class');
			$(this).removeAttr('style');
			$(this).removeAttr('data-hidden');
		});
	},
});

tsParticles.load('tsparticles', {
	emitters: {
		direction: 'top',
		size: {
			width: 600,
			height: 200,
		},
		position: {
			x: 50,
			y: 100,
		},
		rate: {
			delay: 0.2,
			quantity: 1,
		},
	},
	particles: {
		number: {
			value: 0,
			density: {
				enable: true,
				value_area: 500,
			},
		},
		color: {
			value: '#ffffff',
		},
		opacity: {
			value: 0.08,
			anim: {
				enable: true,
				speed: 0.07,
				opacity_min: 0.02,
				sync: false,
			},
		},
		size: {
			value: 50,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'destroy',
		},
	},
});
