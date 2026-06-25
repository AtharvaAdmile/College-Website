import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';

import departmentsData from '../data/departments.json';
import facultyData from '../data/faculty.json';

const DepartmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const department = departmentsData.find(d => d.id === id);
  const deptFaculty = facultyData.filter(f => f.department === department?.name);

  if (!department) {
    return (
      <PageLayout>
        <div className="flex-1 flex flex-col items-center justify-center p-20 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Department Not Found</h2>
          <Button label="Back to Departments" onClick={() => navigate('/departments')} />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate('/departments')}
            className="flex items-center gap-2 mb-8 group px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold text-sm">Back to Departments</span>
          </button>
          
          <div className="mb-4">
            <span className="font-bold border border-white px-2 py-1 uppercase text-xs mr-4">
              {department.category}
            </span>
            <span className="font-bold text-sm">Duration: {department.duration}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{department.name}</h1>
          <p className="text-lg max-w-3xl">
            {department.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="mb-12 border-b-2 border-black pb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Program Overview</h2>
            <p className="text-black mb-4">
              The {department.name} department offers a comprehensive curriculum designed to provide students with both theoretical foundations and practical skills. Our {department.duration} program is meticulously structured to meet industry standards and academic rigor.
            </p>
            <p className="text-black">
              Students will have access to state-of-the-art facilities, extensive research opportunities, and mentorship from our distinguished faculty members.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Our Faculty ({deptFaculty.length})
            </h2>
            
            {deptFaculty.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {deptFaculty.map(member => (
                  <div key={member.id} className="bg-slate-50 p-6 border-2 border-black text-center">
                    <img src={member.photo} alt={member.name} className="w-24 h-24 mx-auto mb-4 object-cover rounded-full border-2 border-slate-300 shadow-sm" />
                    <h4 className="font-bold text-black text-lg mb-1">{member.name}</h4>
                    <p className="text-sm font-bold text-slate-700 mb-4">{member.qualification}</p>
                    <a href={`mailto:${member.email}`} className="font-bold underline text-black hover:text-slate-600">
                      Email
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black italic">Faculty information is currently being updated.</p>
            )}
          </div>
          
        </div>
      </section>
    </PageLayout>
  );
};

export default DepartmentDetail;
