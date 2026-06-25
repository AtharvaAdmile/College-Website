import React, { useState, useMemo } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Input from '../components/ui/Input';

import facultyData from '../data/faculty.json';
import departmentsData from '../data/departments.json';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...new Set(departmentsData.map(d => d.name))];

  const filteredFaculty = useMemo(() => {
    return facultyData.filter(member => {
      const matchesDept = selectedDepartment === 'All' || member.department === selectedDepartment;
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [searchTerm, selectedDepartment]);

  return (
    <PageLayout>
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold border-b-4 border-white inline-block pb-2 mb-4">Meet Our Faculty</h1>
        </div>
      </section>

      <section className="py-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="bg-slate-100 p-6 border-2 border-black mb-8 flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <Input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name..."
                className="mb-0"
              />
            </div>
            
            <div className="w-full sm:w-1/2 md:w-1/4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full p-2 border-2 border-black bg-white focus:outline-none focus:border-black font-bold"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFaculty.map((member) => (
                <div key={member.id} className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="h-64 bg-slate-100 border-b border-slate-100">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="font-semibold text-sm mb-3 text-slate-500">{member.department}</p>
                    <p className="text-slate-700 text-sm mb-6 flex-1">{member.qualification}</p>
                    
                    <div className="mt-auto border-t border-slate-100 pt-4 flex justify-center gap-6">
                      <a href={`mailto:${member.email}`} className="font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Email
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-500 hover:text-slate-900 transition-colors">
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-black bg-slate-50">
              <h3 className="text-xl font-bold text-black mb-2">No faculty found</h3>
              <p className="text-black mb-4">Try adjusting your search or department filter.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedDepartment('All'); }}
                className="font-bold underline text-black hover:text-slate-600"
              >
                Clear Filters
              </button>
            </div>
          )}
          
        </div>
      </section>
    </PageLayout>
  );
};

export default Faculty;