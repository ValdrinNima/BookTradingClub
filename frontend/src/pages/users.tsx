
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserSection from "../components/UserSection";

interface Props {}

const UsersPage: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<UserSection></UserSection>
			<Footer />
		</>
	);
};

export default UsersPage;
