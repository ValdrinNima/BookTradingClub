import React, { useState } from "react";
import BooksSection from "../components/BooksSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface Props {}

const Home: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<BooksSection />
			<Footer />
		</>
	);
};

export default Home;
