import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
	FooterContainer,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from "./FooterElements";

interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLink to="/signin">About us</FooterLink>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Created by</FooterLink>
							<FooterLink to="/signin">
								Terms of Service
							</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					{/* <FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink to="/signin">About us</FooterLink>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Created by</FooterLink>
							<FooterLink to="/signin">
								Terms of Service
							</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper> */}
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Name</SocialLogo>
						<WebsiteRights>
							Name © {new Date().getFullYear()} All rights
							reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="//"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="//"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
