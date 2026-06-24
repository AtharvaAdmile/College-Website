import { useState } from 'react'
import facultyData from '../data/faculty'

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
    <main className="faculty-page">
      <h1>Faculty</h1>

      <div className="filters">
        <input
          aria-label="Search faculty"
          type="search"
          placeholder="Search by name, position, or subject..."
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

      <div className="faculty-list">
        {filtered.length === 0 ? (
          <div>No faculty match your search.</div>
        ) : (
          filtered.map((f) => (
            <article key={f.id} className="faculty-card">
              <img src={f.image} alt={f.name} className="faculty-photo" />
              <div className="faculty-info">
                <h2 className="faculty-name">{f.name}</h2>
                <div className="faculty-position">{f.position}</div>
                <div className="faculty-dept">{f.department}</div>
                <div className="faculty-subjects">{f.subjects.join(', ')}</div>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  )
}

export default Faculty