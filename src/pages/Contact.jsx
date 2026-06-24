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
    <main className="contact-page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        {errors.name && <div className="field-error">{errors.name}</div>}

        <label>
          Email
          <input name="email" value={formData.email} onChange={handleChange} />
        </label>
        {errors.email && <div className="field-error">{errors.email}</div>}

        <label>
          Subject
          <input name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        {errors.subject && <div className="field-error">{errors.subject}</div>}

        <label>
          Message
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        {errors.message && <div className="field-error">{errors.message}</div>}

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {success && <div className="form-success">{success}</div>}
    </main>
  )
}

export default Contact