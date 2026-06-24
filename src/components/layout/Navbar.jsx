import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <Link className="brand-link" to="/">
        College Website
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
