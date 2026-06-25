import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-xl text-white uppercase mb-4">ASC College</h3>
            <p className="text-slate-300 mb-4">
              Empowering students through quality education in Arts, Science, and Commerce since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-bold text-slate-300 hover:text-white underline">Facebook</a>
              <a href="#" className="font-bold text-slate-300 hover:text-white underline">Twitter</a>
              <a href="#" className="font-bold text-slate-300 hover:text-white underline">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white underline">About Us</Link></li>
              <li><Link to="/departments" className="text-slate-300 hover:text-white underline">Departments</Link></li>
              <li><Link to="/faculty" className="text-slate-300 hover:text-white underline">Faculty</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white underline">Admissions</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-bold text-white uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li><strong className="text-white">Address:</strong> 123 College Road, Cityville</li>
              <li><strong className="text-white">Phone:</strong> +1 (234) 567-8900</li>
              <li><strong className="text-white">Email:</strong> admissions@college.edu</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-sm font-bold text-slate-400">
          <p>&copy; {currentYear} ASC College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
