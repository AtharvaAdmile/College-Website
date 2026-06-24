import { Link } from 'react-router-dom'
import courses from '../data/courses'

const Home = () => {
  const featured = courses.slice(0, 3)

  return (
    <main className="home-page">
      <section className="hero">
        <h1 className="hero-title">College Website</h1>
        <p className="hero-tagline">Empowering learners for a brighter future.</p>
        <Link className="btn btn-primary" to="/courses">
          View Courses
        </Link>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="stat-value">12,345</div>
          <div className="stat-label">Students</div>
        </div>
        <div className="stat">
          <div className="stat-value">{courses.length}</div>
          <div className="stat-label">Courses</div>
        </div>
        <div className="stat">
          <div className="stat-value">75</div>
          <div className="stat-label">Faculty</div>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {featured.map((c) => (
            <div key={c.id} className="course-card">
              <h3 className="course-name">{c.name}</h3>
              <p className="course-desc">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <Link className="btn btn-secondary" to="/courses">
          Browse All Courses
        </Link>
      </section>
    </main>
  )
}

export default Home