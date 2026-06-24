import { Link } from 'react-router-dom'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="bg-gray-900 text-white px-8 py-6">
			<div className="max-w-7xl mx-auto flex justify-between items-start gap-8">
				<div className="flex flex-col">
					<div className="text-lg font-semibold">College Website</div>
					<div className="text-sm text-gray-300 mt-1">© {year} College Website. All rights reserved.</div>
				</div>

				<div>
					<nav className="flex flex-col md:flex-row gap-4 md:gap-6">
						<Link className="text-gray-200 hover:text-blue-400" to="/">Home</Link>
						<Link className="text-gray-200 hover:text-blue-400" to="/about">About</Link>
						<Link className="text-gray-200 hover:text-blue-400" to="/contact">Contact</Link>
					</nav>
				</div>
			</div>
		</footer>
	)
}

