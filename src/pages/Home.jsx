import { Link } from 'react-router-dom'
import courses from '../data/courses'

const Home = () => {
  const featured = courses.slice(0, 3)

  return (
    <main className="home-page">
      <section className="hero text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">College Website</h1>
        <p className="text-lg text-gray-600 mb-6">Empowering learners for a brighter future.</p>
        <Link
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          to="/courses"
        >
          View Courses
        </Link>
      </section>

      <section className="stats py-12">
        <div className="max-w-4xl mx-auto flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold">12,345</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold">{courses.length}</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold">75</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </div>
        </div>
      </section>

      <section className="featured-courses py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Featured Courses</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c) => (
            <div key={c.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold mb-2">{c.name}</h3>
              <p className="text-gray-600">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta py-12 text-center">
        <Link className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700" to="/courses">
          Browse All Courses
        </Link>
      </section>
    </main>
  )
}

export default Home