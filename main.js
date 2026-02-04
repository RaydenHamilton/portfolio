// https://github.com/tsparticles/tsparticles/tree/main
// All options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
// The slim version doesn't have the following plugins:
// Absorbers, Emitters, PolygonMask, Interactivity Trail
const options = {

	background: {
		"color": {
			"value": "#131313"
		},
	},
	fullScreen: {
		enable: false,
		zIndex: -1
	},
	interactivity: {
		events: {
			onClick: {
				// this handles the mouse click event
				enable: true,
				mode: "push", // this adds particles
			},
			onHover: {
				// this handles the mouse hover event
				enable: false,
				mode: "repulse", // this make particles move away from the mouse
			},
		},
		modes: {
			push: {
				quantity: 1, // number of particles to add
			},
			repulse: {
				distance: 100, // the distance of the particles from the mouse
			},
		},
	},
	particles: {
		links: {
			enable: true, // this enables links between particles
			opacity: 1,
			distance: 100,
			color: "#ff2f00",
		},
		move: {
			enable: true, // this makes particles move
			speed: { min: 1, max: 3 }, // this is the speed of the particles
		},
		opacity: {
			value: { min: 1, max: 1 }, // this sets the opacity of the particles
		},
		size: {
			value: { min: 1, max: 8 }, // this sets the size of the particles
		},
		color: {
			value: "#eb5939", // this sets the color of the particles
		},
	},
};

tsParticles.load("tsparticles", options);