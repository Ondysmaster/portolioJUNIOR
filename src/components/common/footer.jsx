import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">O mě</Link>
						</li>

						<li className="footer-nav-link-item">
							<Link to="/contact">Kontakt</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						ondra.janik24@gmail.com
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
