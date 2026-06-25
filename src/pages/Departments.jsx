import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

import departmentsData from '../data/departments.json';

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(departmentsData.map(d => d.category))];

  const filteredDepartments = useMemo(() => {
    return departmentsData.filter(dept => {
      const matchesCategory = selectedCategory === 'All' || dept.category === selectedCategory;
      const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            dept.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <PageLayout>
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold border-b-4 border-white inline-block pb-2 mb-4">Our Departments</h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of academic programs.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row gap-6 justify-between">
            <div className="w-full md:w-1/3">
              <Input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search departments..."
                className="mb-0"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
                    selectedCategory === category 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredDepartments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepartments.map((dept) => (
                <Card
                  key={dept.id}
                  title={dept.name}
                  badge={dept.category}
                  description={dept.description}
                  footer={
                    <div className="flex justify-between items-center w-full">
                      <div className="text-sm font-bold text-black">
                        {dept.duration} | {dept.facultyCount} Faculty
                      </div>
                      <Link 
                        to={`/departments/${dept.id}`} 
                        className="font-bold underline text-black hover:text-slate-600"
                      >
                        Learn More
                      </Link>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-slate-200 rounded-lg bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No departments found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="font-medium text-slate-900 underline hover:text-slate-600"
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

export default Departments;
