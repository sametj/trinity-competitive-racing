import Home from "@/sections/home/Home";
import About from "@/sections/about/About";
import Classes from "./sections/classes/Classes";
import Schedule from "./sections/schedule/Schedule";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Info from "./sections/info/Info";
import { ReactLenis } from "lenis/react";
import { animate, scrollToSection } from "@/utils/ScrollAnimation.js";
import { useEffect } from "react";
import Navbar from "./layout/Navbar";

function App() {
	const scroll = animate;
	const scrollTo = scrollToSection;
	useEffect(() => {
		scroll();
		scrollTo();
	}, []);

	return (
		<>
			<ReactLenis
				autoRaf
				root>
				<Header />
				<Navbar />
				<Home />
				<About />
				<Classes />
				<Schedule />
				<Info />
				<Footer />
			</ReactLenis>
		</>
	);
}

export default App;
