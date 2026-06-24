import { useState } from 'react'
import facultyData from '../data/Faculty'

const Faculty = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')

  const departments = ['', ...Array.from(new Set(facultyData.map((f) => f.department)))]

  const filtered = facultyData.filter((f) => {
    const q = searchQuery.trim().toLowerCase()

    const matchesNameOrPosition =
      q === '' ||
      f.name.toLowerCase().includes(q) ||
      (f.position && f.position.toLowerCase().includes(q)) ||
      (f.department && f.department.toLowerCase().includes(q))

    const matchesSubject =
      q === '' ||
      (Array.isArray(f.subjects) && f.subjects.some((s) => s.toLowerCase().includes(q)))

    const matchesDept = selectedDepartment === '' || f.department === selectedDepartment

    return (matchesNameOrPosition || matchesSubject) && matchesDept
  })

  return (
    <main className="faculty-page max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">Faculty</h1>

      <div className="filters flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          aria-label="Search faculty"
          type="search"
          placeholder="Search by name, position, or subject..."
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
        <div className="text-center text-gray-600 py-16">No faculty match your search.</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filtered.map((f) => (
            <article key={f.id} className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
              <img src={f.image} alt={f.name} className="w-full md:w-32 h-32 md:h-32 object-cover rounded-md" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{f.name}</h2>
                <div className="text-sm text-gray-500">{f.position} • {f.department}</div>
                <div className="text-sm text-gray-600 mt-2">{f.subjects.join(', ')}</div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default Faculty