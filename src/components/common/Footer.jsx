import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-xl text-black uppercase mb-4">ASC College</h3>
            <p className="text-black mb-4">
              Empowering students through quality education in Arts, Science, and Commerce since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-bold text-black underline">Facebook</a>
              <a href="#" className="font-bold text-black underline">Twitter</a>
              <a href="#" className="font-bold text-black underline">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-black uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-black underline">About Us</Link></li>
              <li><Link to="/departments" className="text-black underline">Departments</Link></li>
              <li><Link to="/faculty" className="text-black underline">Faculty</Link></li>
              <li><Link to="/contact" className="text-black underline">Admissions</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-bold text-black uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-black">
              <li><strong>Address:</strong> 123 College Road, Cityville</li>
              <li><strong>Phone:</strong> +1 (234) 567-8900</li>
              <li><strong>Email:</strong> admissions@college.edu</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-300 text-center text-sm font-bold text-black">
          <p>&copy; {currentYear} ASC College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
