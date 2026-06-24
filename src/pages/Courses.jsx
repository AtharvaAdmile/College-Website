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
    <main className="courses-page max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">Courses</h1>

      <div className="filters flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          aria-label="Search courses"
          type="search"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white"
        >
          {departments.map((d) => (
            <option key={d || 'all'} value={d}>
              {d === '' ? 'All' : d}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center text-gray-600 py-16">No courses match your search.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <article key={course.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <h2 className="font-semibold mb-2 text-gray-900">{course.name}</h2>
              <div className="text-sm text-gray-500 mb-2">{course.department} • {course.duration}</div>
              <p className="text-gray-600">{course.description}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default Courses