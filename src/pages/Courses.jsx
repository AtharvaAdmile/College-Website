import { useState } from 'react'
import courses from '../data/courses'

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')

  const departments = ['', ...Array.from(new Set(courses.map((c) => c.department)))]

  const filtered = courses.filter((c) => {
    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      q === '' ||
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      (c.department && c.department.toLowerCase().includes(q))

    const matchesDept = selectedDepartment === '' || c.department === selectedDepartment

    return matchesSearch && matchesDept
  })

  return (
    <main className="courses-page">
      <h1>Courses</h1>

      <div className="filters">
        <input
          aria-label="Search courses"
          type="search"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          {departments.map((d) => (
            <option key={d || 'all'} value={d}>
              {d === '' ? 'All' : d}
            </option>
          ))}
        </select>
      </div>

      <div className="courses-list">
        {filtered.length === 0 ? (
          <div>No courses match your search.</div>
        ) : (
          filtered.map((course) => (
            <article key={course.id} className="course-item">
              <h2 className="course-name">{course.name}</h2>
              <div className="course-meta">{course.department} • {course.duration}</div>
              <p className="course-desc">{course.description}</p>
            </article>
          ))
        )}
      </div>
    </main>
  )
}

export default Courses