import Image from 'next/image';
import React from 'react';
import FormaImagem from '../../../public/forma.jpg';
import { HeartButton } from './HeartButton';

function Footer() {
  return (
    <footer className='bg-zinc-800 border-zinc-700 p-4 w-screen'>
      <div className='flex items-center space-x-4'>
        <Image alt='Capa da musica forma' src={FormaImagem} className='h-16 w-16 rounded-md' />
        <div>
          <h1 className='text-lg text-white font-semibold'>{'>> FørMa'}</h1>
          <a href="" className='text-xs text-zinc-400'>Mauro Henrique</a>
        </div>
        <div>
          <HeartButton />
        </div>
      </div>
    </footer>
  );
}

export { Footer };