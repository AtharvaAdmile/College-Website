import { Link } from 'react-router-dom'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-col">
					<div className="college-name">College Website</div>
					<div className="copyright">© {year} College Website. All rights reserved.</div>
				</div>

				<div className="footer-col">
					<nav className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</div>
			</div>
		</footer>
	)
}

