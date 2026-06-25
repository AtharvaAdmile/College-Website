import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import heroBg from '../assets/hero-bg.png';
import aboutImg from '../assets/about-students.png';
import galleryEvent from '../assets/gallery-event.png';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

import departmentsData from '../data/departments.json';
import highlightsData from '../data/highlights.json';
import testimonialsData from '../data/testimonials.json';

const Home = () => {
  const [stats] = useState({
    students: highlightsData.students,
    faculty: highlightsData.faculty,
    courses: highlightsData.courses,
    yearsEstablished: highlightsData.yearsEstablished
  });

  return (
    <PageLayout>
      {/* 1. HeroBanner */}
      <section className="text-white py-28 md:py-40 relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md text-white font-semibold uppercase tracking-widest text-xs mb-6 rounded-full border border-white/25 shadow-lg">
              🎓 Admissions Open 2024-25
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ASC College
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4 text-white/90">
              Arts, Science, and Commerce Education
            </p>
            <p className="text-lg mb-4 text-white/75 max-w-2xl leading-relaxed">
              Empowering the leaders of tomorrow with world-class education, cutting-edge research opportunities, and a vibrant campus life since 1985.
            </p>
            <p className="text-base mb-8 text-white/60 max-w-xl">
              NAAC 'A' Accredited • 35+ Years of Excellence • 5000+ Alumni Network
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/departments">
                <Button label="Explore Courses" variant="secondary" />
              </Link>
              <Link to="/contact">
                <Button label="Apply Now" variant="outline" className="border-white text-white hover:bg-white/10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AboutCollege Preview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="About Us"
                align="left"
              />
              <p className="text-black text-lg mb-6">
                Founded in 1985, Arts, Science & Commerce College provides a strong foundation for holistic development. We prepare students to meet the challenges of the modern world with practical skills and theoretical knowledge.
              </p>
              <Link to="/about">
                <Button label="Read Our Story" variant="secondary" />
              </Link>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-200">
              <img
                src={aboutImg}
                alt="Students studying together on campus"
                className="w-full h-80 object-cover rounded-lg transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. DepartmentsPreview */}
      <section className="py-16 bg-slate-50 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <SectionTitle
              title="Featured Departments"
              align="left"
              className="mb-0"
            />
            <Link to="/departments" className="hidden md:inline-block font-bold underline hover:text-slate-600">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departmentsData.slice(0, 3).map((dept) => (
              <Card
                key={dept.id}
                title={dept.name}
                badge={dept.category}
                description={dept.description}
                footer={
                  <Link to={`/departments/${dept.id}`} className="font-bold underline hover:text-slate-600">
                    Learn More
                  </Link>
                }
              />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/departments">
              <Button label="View All Departments" variant="outline" className="w-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Highlights Stats */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border border-white p-4">
              <div className="text-4xl font-bold mb-2">{stats.students}+</div>
              <div className="font-bold uppercase text-sm">Students</div>
            </div>
            <div className="border border-white p-4">
              <div className="text-4xl font-bold mb-2">{stats.faculty}+</div>
              <div className="font-bold uppercase text-sm">Faculty</div>
            </div>
            <div className="border border-white p-4">
              <div className="text-4xl font-bold mb-2">{stats.courses}+</div>
              <div className="font-bold uppercase text-sm">Courses</div>
            </div>
            <div className="border border-white p-4">
              <div className="text-4xl font-bold mb-2">{stats.yearsEstablished}+</div>
              <div className="font-bold uppercase text-sm">Years Legacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Testimonials"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                    <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-sm font-bold text-slate-600">{testimonial.course}</p>
                    <p className="text-xs text-black">{testimonial.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GalleryPreview */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Gallery"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&w=400&q=80",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&w=400&q=80",
              "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&w=400&q=80",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&w=400&q=80",
              "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&w=400&q=80",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&w=400&q=80"
            ].map((src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-sm">
                <img
                  src={src}
                  alt={`Campus ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Additional gallery image */}
            <div className="aspect-square overflow-hidden rounded-lg shadow-sm md:col-span-3">
              <img
                src={galleryEvent}
                alt="Campus Cultural Festival"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 max-h-80"
              />
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}

export default Home;