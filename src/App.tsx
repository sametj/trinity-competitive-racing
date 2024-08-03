import Home from "@/sections/home/Home";
import About from "@/sections/about/About";
import Classes from "./sections/classes/Classes";
import Schedule from "./sections/schedule/Schedule";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Info from "./sections/info/Info";
import { ReactLenis } from "lenis/react";
import animate from "@/utils/ScrollAnimation.js";
import { useEffect } from "react";

function App() {
	const scroll = animate;
	useEffect(() => {
		scroll();
	}, []);

	return (
		<>
			<ReactLenis
				autoRaf
				root>
				<Header />
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
