import { SideBar } from '@/components/SideBar';
import { Main } from '@/components/Main';
import React from 'react';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1 overflow-auto'>
        <SideBar />
        <Main />
      </div>
      <footer className='bg-zinc-800 border-zinc-700 p-6 w-screen'>
        footer
      </footer>
    </div>
  );
}
