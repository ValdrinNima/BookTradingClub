import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RequestsSection from "../components/RequestsSection";

interface Props {}

const RequestsPage: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<RequestsSection></RequestsSection>
			<Footer />
		</>
	);
};

export default RequestsPage;
