import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  function validate(values) {
    const err = {}

    if (!values.name.trim()) err.name = 'Name is required.'

    if (!values.email.trim()) {
      err.email = 'Email is required.'
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!re.test(values.email)) err.email = 'Enter a valid email address.'
    }

    if (!values.subject.trim()) err.subject = 'Subject is required.'

    if (!values.message.trim()) err.message = 'Message is required.'
    else if (values.message.trim().length < 10) err.message = 'Message must be at least 10 characters.'

    return err
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess('')
    const validation = validate(formData)
    setErrors(validation)

    if (Object.keys(validation).length === 0) {
      setSuccess('Your message has been sent. Thank you!')
      setFormData(initialForm)
    }
  }

  return (
    <main className="contact-page max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <form onSubmit={handleSubmit} noValidate className="contact-form space-y-6">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors.subject && <div className="text-red-600 text-sm mt-1">{errors.subject}</div>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
        </div>

        <button type="submit" className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-semibold">
          Send Message
        </button>
      </form>

      {success && <div className="mt-6 bg-green-50 text-green-700 p-4 rounded-md border border-green-200">{success}</div>}
    </main>
  )
}

export default Contact