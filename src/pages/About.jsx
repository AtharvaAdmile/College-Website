const About = () => {
  return (
    <main className="about-page max-w-3xl mx-auto px-4 py-12">
      <header className="about-hero text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About College Website</h1>
        <p className="lead text-lg text-gray-600">Committed to excellence in teaching, research, and community engagement.</p>
      </header>

      <section className="mission mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To provide high-quality education that empowers students with knowledge, critical thinking,
          and practical skills to succeed in a rapidly changing world.
        </p>
      </section>

      <section className="vision mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To be a leading institution recognized for innovation in teaching, research excellence,
          and meaningful partnerships that drive social and economic progress.
        </p>
      </section>

      <section className="history mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded decades ago with a small group of dedicated faculty, our college has grown into a
          vibrant community of learners and scholars. Through a focus on inclusive education and
          hands-on learning, we've expanded programs, built modern facilities, and maintained a
          student-centered approach.
        </p>
      </section>

      <section className="values">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Values & Achievements</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Academic excellence and intellectual curiosity</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Integrity, respect, and inclusivity</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Community engagement and civic responsibility</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Over 50,000 alumni worldwide</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Multiple nationally ranked programs</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default About