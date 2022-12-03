import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer-section-container'>
			<div className='footer-card'>
				<div className='footer-info'>
					<div className='font-16-white border-bottom'>Made by Cindy Guzman</div>
					<div className='contact-button-div'>
                    <Link
                    className="contact-button"
                    to={{ pathname: "https://github.com/c-rose-g" }}
                    target="_blank">

						<i className='fa-brands fa-square-github' />
                    </Link>
                    <Link
                    className="contact-button"
                    to={{
                      pathname: "https://www.linkedin.com/in/cindyroseguzman/",
                    }}
                    target="_blank">

						<i className='fa-brands fa-linkedin'></i>
                    </Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
