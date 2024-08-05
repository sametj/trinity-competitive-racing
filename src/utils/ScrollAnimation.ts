import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function animate() {
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
			opacity: 0.1,
			stagger: 0.1,
		});
	});

	gsap.fromTo(
		header,
		{ backgroundColor: "rgba(0, 0, 0, 0.5)" },

		{
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
		}
	);
}

export function scrollToSection() {
	const navlinks = document.querySelectorAll(".nav-bar__link");
	navlinks.forEach((nav) => {
		let link = nav.getAttribute("id");
		console.log(link);
		nav.addEventListener("click", () => {
			gsap.to(window, {
				duration: 2,
				delay: 0.1,
				scrollTo: { y: `${link}`, offsetY: 120 },
				ease: "power2",
			});
		});
	});
}

export function hideNav() {
	const aboutSection = document.querySelector(".about")!;
	const navBar = document.querySelector(".nav-bar")!;
	const info = document.querySelector(".info")!;

	gsap.fromTo(
		navBar,
		{ display: "none" },
		{
			display: "flex",
			scrollTrigger: {
				trigger: aboutSection,
				start: "top top",
				end: "top center",
				scrub: true,
				markers: false,
			},
		}
	);

	gsap.fromTo(
		navBar,
		{ display: "flex" },
		{
			display: "none",
			scrollTrigger: {
				trigger: info,
				start: "top top",
				endTrigger: info,
				end: "top center",
				scrub: true,
				markers: false,
			},
		}
	);
}
