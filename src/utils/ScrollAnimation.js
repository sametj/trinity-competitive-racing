import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function animate() {
	const splitType = document.querySelectorAll(".about__text");
	const title = document.querySelector(".home__heading");
	const header = document.querySelector(".header");
	splitType.forEach((char, i) => {
		const text = new SplitType(char, { types: "chars" });
		gsap.from(text.chars, {
			scrollTrigger: {
				trigger: char,
				start: "top 80%",
				end: "top 20%",
				scrub: true,
				markers: false,
			},
			opacity: 0.2,
			stagger: 0.1,
		});
	});

	gsap.to(header, {
		scrollTrigger: {
			trigger: title,
			start: "top 0%",
			end: "top 50%",
			scrub: true,
			markers: false,
		},
		duration: 0.5,
		ease: "power2.out",
		backgroundColor: "transparent",
	});
}

export default animate;
