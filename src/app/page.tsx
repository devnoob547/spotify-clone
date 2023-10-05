import { SideBar } from '@/components/SideBar';
import { Main } from '@/components/Main';
import React from 'react';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1 overflow-auto'>
        <SideBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
