import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <Link className="font-bold text-xl text-gray-800" to="/">
        College Website
      </Link>

      <div className="flex items-center gap-6">
        <Link className="text-gray-800 hover:text-blue-600" to="/">Home</Link>
        <Link className="text-gray-800 hover:text-blue-600" to="/about">About</Link>
        <Link className="text-gray-800 hover:text-blue-600" to="/courses">Courses</Link>
        <Link className="text-gray-800 hover:text-blue-600" to="/faculty">Faculty</Link>
        <Link className="text-gray-800 hover:text-blue-600" to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
