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
      <section className="py-20 bg-[#FAF6F0] border-b border-amber-100/40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#3E5062] uppercase tracking-wider mb-3 font-serif">
              Our Journey
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-medium">
              The history and milestones of our college
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col">
              {[
                { 
                  year: "1985", 
                  title: "College Founded", 
                  desc: "Started with 200 students and 3 major departments in Arts and Commerce.",
                  color: "#E05A47",
                  lineBg: "bg-[#E05A47]",
                  borderColor: "border-[#E05A47] text-[#E05A47]"
                },
                { 
                  year: "1995", 
                  title: "Science Block Inaugurated", 
                  desc: "Added B.Sc programs with state-of-the-art laboratories.",
                  color: "#3A8E9E",
                  lineBg: "bg-[#3A8E9E]",
                  borderColor: "border-[#3A8E9E] text-[#3A8E9E]"
                },
                { 
                  year: "2005", 
                  title: "NAAC 'A' Accreditation", 
                  desc: "Recognized for excellence in academic quality and infrastructure.",
                  color: "#2D3E50",
                  lineBg: "bg-[#2D3E50]",
                  borderColor: "border-[#2D3E50] text-[#2D3E50]"
                },
                { 
                  year: "2015", 
                  title: "Postgraduate Programs", 
                  desc: "Expanded offerings to include Master's degrees across disciplines.",
                  color: "#F0A83A",
                  lineBg: "bg-[#F0A83A]",
                  borderColor: "border-[#F0A83A] text-[#F0A83A]"
                },
                { 
                  year: "2023", 
                  title: "Innovation Center", 
                  desc: "Launched a dedicated incubation center for student startups.",
                  color: "#5A9A7E",
                  lineBg: "bg-[#5A9A7E]",
                  borderColor: "border-[#5A9A7E] text-[#5A9A7E]"
                }
              ].map((item, index, arr) => (
                <div key={index} className="flex items-center min-h-[120px]">
                  {/* Left Column: Year Badge */}
                  <div className="w-[30%] flex justify-end pr-4 sm:pr-8">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-[6px] md:border-[8px] flex items-center justify-center font-bold text-lg md:text-2xl bg-white shadow-sm transition-all duration-300 hover:scale-105 ${item.borderColor}`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Middle Column: Vertical Track + Pointer Node */}
                  <div className="relative w-12 self-stretch flex items-center justify-center">
                    {/* Line segment */}
                    <div className={`absolute w-3.5 ${item.lineBg} left-1/2 -translate-x-1/2 ${index === 0 ? 'top-4 rounded-t-full' : 'top-0'} ${index === arr.length - 1 ? 'bottom-4 rounded-b-full' : 'bottom-0'}`}></div>
                    
                    {/* Pointer Node */}
                    <div className="relative z-10 flex items-center justify-center">
                      <svg className="w-10 h-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 20L22 12V28L8 20Z" fill={item.color} />
                        <circle cx="26" cy="20" r="5.5" fill={item.color} />
                      </svg>
                    </div>
                  </div>

                  {/* Right Column: Title and Description */}
                  <div className="w-[60%] pl-4 sm:pl-8 py-6">
                    <h4 className="text-lg md:text-xl font-bold mb-1 transition-colors duration-200" style={{ color: item.color }}>
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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