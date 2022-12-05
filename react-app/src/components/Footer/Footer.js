import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer-section-container'>
			<div className='footer-card'>
				<div className='footer-info-left'>
					<div className='languages-card' id='languages'>
						<div className='font-20-white border-bottom'>Languages Used</div>
						<div className='language-buttons-div'>
							<Link
								className='contact-button'
								to={{ pathname: 'https://www.python.org/doc' }}
								target='_blank'
							>
								<i className='fa-brands fa-python'></i>
							</Link>

							<Link
								className='contact-button'
								to={{ pathname: 'https://reactjs.org/' }}
								target='_blank'
							>
								<i className='fa-brands fa-react'></i>
							</Link>
							<Link
								className='contact-button'
								to={{ pathname: 'https://nodejs.org/en/docs/' }}
								target='_blank'
							>
								<i className='fa-brands fa-node-js'></i>
							</Link>
							<Link
								className='contact-button'
								to={{
									pathname:
										'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
								}}
								target='_blank'
							>
								<i className='fa-brands fa-html5'></i>
							</Link>
						</div>
					</div>
				</div>
				<div className='footer-info-right'>
					<div className='font-20-white border-bottom'>Made by Cindy Guzman</div>
					<div className='contact-buttons-div'>
                            <Link
                                className='contact-button'
                                to={{ pathname: 'https://github.com/c-rose-g' }}
                                target='_blank'
                            >
                                <i className='fa-brands fa-square-github' />
                            </Link>
                            <Link
                                className='contact-button'
                                to={{
                                    pathname: 'https://www.linkedin.com/in/cindyroseguzman/',
                                }}
                                target='_blank'
                            >
                                <i className='fa-brands fa-linkedin'></i>
                            </Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
