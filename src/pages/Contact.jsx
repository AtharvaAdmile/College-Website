import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';

import departmentsData from '../data/departments.json';
import faqData from '../data/faq.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    address: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email address is invalid';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value.replace(/[-()\s]/g, ''))) {
          error = 'Phone number must be 10 digits';
        }
        break;
      case 'course':
        if (!value) error = 'Please select a course';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (['name', 'email', 'phone', 'course'].includes(key)) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);
    }
  };

  return (
    <PageLayout>
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold border-b-4 border-white inline-block pb-2">Admissions & Contact</h1>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="w-full lg:w-3/5">
              <div className="bg-white p-10 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Admission Inquiry Form</h3>
                
                {isSuccess ? (
                  <div className="text-center py-12">
                    <h4 className="text-2xl font-bold text-black mb-2">Inquiry Submitted!</h4>
                    <p className="text-black mb-8">
                      Thank you for your interest. We will get back to you shortly.
                    </p>
                    <Button 
                      label="Submit Another Inquiry" 
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({name: '', email: '', phone: '', course: '', address: '', message: ''});
                      }} 
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.name}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phone}
                        required
                      />
                      <div className="mb-4">
                        <label className="block font-medium text-black mb-1">
                          Course Interested <span className="text-red-600">*</span>
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full p-2 bg-white border outline-none ${
                            errors.course ? 'border-red-600' : 'border-slate-300 focus:border-black'
                          }`}
                        >
                          <option value="">Select a course</option>
                          {departmentsData.map(dept => (
                            <option key={dept.id} value={dept.name}>{dept.name}</option>
                          ))}
                        </select>
                        {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
                      </div>
                    </div>

                    <Input
                      label="Address"
                      name="address"
                      type="textarea"
                      value={formData.address}
                      onChange={handleChange}
                    />

                    <Input
                      label="Message / Queries"
                      name="message"
                      type="textarea"
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        label={isSubmitting ? "Submitting..." : "Submit Inquiry"} 
                        disabled={isSubmitting}
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col gap-8">
              <div className="bg-slate-900 text-white p-10 rounded-lg shadow-md border border-slate-800">
                <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">Contact Information</h3>
                <ul className="space-y-6">
                  <li>
                    <h4 className="font-semibold text-slate-400 text-sm uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-slate-200">123 College Road, Cityville, State 12345</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-slate-400 text-sm uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-slate-200">+1 (234) 567-8900<br/><span className="text-sm text-slate-400">Mon-Fri, 9am - 5pm</span></p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-slate-400 text-sm uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-slate-200">admissions@college.edu</p>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 rounded-lg shadow-sm border border-slate-200 h-64 flex items-center justify-center font-medium text-slate-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-200 opacity-50 flex items-center justify-center">
                  <span className="text-slate-400 tracking-widest uppercase text-sm">Interactive Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="Frequently Asked Questions" />
          <Accordion items={faqData} />
        </div>
      </section>

    </PageLayout>
  );
};

export default Contact;