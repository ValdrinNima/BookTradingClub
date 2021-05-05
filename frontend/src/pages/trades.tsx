import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TradesSection from "../components/TradesSection";

interface Props {}

const TradesPage: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<TradesSection></TradesSection>
			<Footer />
		</>
	);
};

export default TradesPage;
