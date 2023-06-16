import React from 'react';
import { Link } from 'gatsby';
import {
  StyledFooterContent,
  StyledLogoContainer,
  StyledLinksContainer,
  StyledSocialLinks,
  StyledCopyrightContainer,
} from '../components/styles/FooterContent.styled';
import TydeeLogo from '../images/footer-content/logo-02.svg';
import tiktokIcon from '../images/footer-content/tiktok.svg';
import instagramIcon from '../images/footer-content/instagram-logo.svg';
import facebookIcon from '../images/footer-content/facebook-logo.svg';
import youtubeIcon from '../images/footer-content/youtube.svg';

const socialMediaLinks = [
  {
    href: `https://www.tiktok.com/@tydee.ca`,
    imgSrc: tiktokIcon,
    imgAlt: 'TikTok icon',
  },
  {
    href: `https://www.instagram.com/tydee.ca/`,
    imgSrc: instagramIcon,
    imgAlt: 'Instagram icon',
  },
  {
    href: `https://www.facebook.com/tydeecleaners`,
    imgSrc: facebookIcon,
    imgAlt: 'Facebook icon',
  },
  {
    href: `https://www.youtube.com/channel/UCKGQY-daiWE2JvHBnSFOjyg/featured`,
    imgSrc: youtubeIcon,
    imgAlt: 'Youtube icon',
  },
];

const currentYear = new Date().getFullYear();

const FooterContent = () => {
  return (
    <>
      <StyledFooterContent>
        <div>
          <StyledLogoContainer>
            <Link to="/">
              <span>
                <img src={TydeeLogo} alt="Tydee logo" />
              </span>
            </Link>
          </StyledLogoContainer>
          <div className="siteLinksOne">
            <StyledLinksContainer>
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pricing">Services & Pricing</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="">Supplies</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </StyledLinksContainer>
          </div>
          <div className="siteLinksTwo">
            <StyledLinksContainer>
              <h3>GET IN TOUCH</h3>
              <ul>
                <li>
                  <Link to="">About Us</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="/commercial-inquiries">Commercial Inquiries</Link>
                </li>
                <li>
                  <Link to="/become-a-tydee-pro">Become a Tydee Pro</Link>
                </li>
                <li>
                  <Link to="/book-now">Book Now</Link>
                </li>
              </ul>
            </StyledLinksContainer>
          </div>
          <StyledSocialLinks>
            <div>
              <h3>FOLLOW US</h3>
              <ul>
                {socialMediaLinks.map(({ href, imgSrc, imgAlt }) => (
                  <li key={imgAlt}>
                    <span>
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        <img src={imgSrc} alt={imgAlt} />
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>LOCATIONS</h3>
              <p>Toronto, Ontario</p>
            </div>
          </StyledSocialLinks>
        </div>
      </StyledFooterContent>
      <StyledCopyrightContainer>
        <p>Copyright &copy; {currentYear} Tydee. All rights reserved.</p>
      </StyledCopyrightContainer>
    </>
  );
};

export default FooterContent;
