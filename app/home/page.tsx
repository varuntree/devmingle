// pages/index.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Card from '@/components/Card';

const Home: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <main className="ml-64 p-8">
        <Card>
          <h1 className="text-white text-4xl">Welcome to </h1>
        </Card>
      </main>
    </div>
  );
};

export default Home;