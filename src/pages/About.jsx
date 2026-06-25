import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';

import facilitiesData from '../data/facilities.json';

const About = () => {
  return (
    <PageLayout>
      {/* 1. CollegeIntroduction */}
      <section className="bg-white py-16 border-b border-slate-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle title="Our Story" />
          <p className="text-black text-lg mb-8">
            Founded in 1985, Arts, Science & Commerce College was established with a profound vision: to bring quality higher education to ambitious students. Over the decades, we have evolved into a premier institution that blends traditional values with modern teaching.
          </p>
          <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 mt-12">
             <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="College Building" className="w-full h-[400px] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* 2. VisionMission */}
      <section className="py-16 bg-slate-100 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be a center of excellence in education and research, producing socially responsible citizens, innovators, and leaders who contribute meaningfully to the global community.
              </p>
            </div>
            
            <div className="bg-slate-900 p-10 rounded-lg shadow-md border border-slate-800 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To provide holistic education that nurtures intellectual curiosity, critical thinking, and ethical values. We strive to create an inclusive environment that empowers students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PrincipalMessage */}
      <section className="py-16 bg-white border-b border-slate-300">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-2 border-black flex flex-col md:flex-row">
            <div className="md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-black bg-slate-200">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principal" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center bg-slate-50">
              <p className="text-lg font-bold mb-6 italic text-black">
                "Education is not just about academic excellence; it's about character building. At ASC College, we are committed to fostering an ecosystem where innovation thrives."
              </p>
              <div>
                <h4 className="text-xl font-bold text-black">Dr. Jonathan Reed</h4>
                <p className="text-black">Principal & Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="py-16 bg-slate-100 border-b border-slate-300">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle title="Our Journey" />
          <div className="space-y-6">
            {[
              { year: "1985", title: "College Founded", desc: "Started with 200 students and 3 major departments in Arts and Commerce." },
              { year: "1995", title: "Science Block Inaugurated", desc: "Added B.Sc programs with state-of-the-art laboratories." },
              { year: "2005", title: "NAAC 'A' Accreditation", desc: "Recognized for excellence in academic quality and infrastructure." },
              { year: "2015", title: "Postgraduate Programs", desc: "Expanded offerings to include Master's degrees across disciplines." },
              { year: "2023", title: "Innovation Center", desc: "Launched a dedicated incubation center for student startups." }
            ].map((item, index) => (
              <div key={index} className="flex bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="w-24 bg-slate-900 text-white flex items-center justify-center font-bold text-xl p-4">
                  {item.year}
                </div>
                <div className="p-6 flex-1">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Campus Facilities" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.map((facility) => (
              <div key={facility.id} className="p-6 bg-white border-2 border-black hover:bg-slate-50">
                <h4 className="text-lg font-bold text-black mb-2 uppercase border-b border-black pb-2">{facility.title}</h4>
                <p className="text-black">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default About;