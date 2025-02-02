import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex-grow flex items-center">
        <main className="flex flex-col items-center justify-center h-full text-center container mx-auto p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
