import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="min-h-screen pt-20 flex flex-col bg-slate-50">
      {children}
    </main>
  );
};

export default PageLayout;
