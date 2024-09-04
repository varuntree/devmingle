import React, { ReactNode } from 'react';
import Navbar from '../../components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <Navbar />
      
      <div className="fixed top-0 left-0 w-64 h-64 bg-orange-500 opacity-50 rounded-full"></div>
      <div className="fixed bottom-0 right-2/4 w-96 h-96 bg-orange-500 opacity-40 transform rotate-45"></div>
      <main className="relative ml-64 p-8">
        {children}
      </main>
    </div>
  );
};
