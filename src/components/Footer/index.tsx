import Image from 'next/image';
import React from 'react';
import FormaImagem from '../../../public/forma.jpg';
import { HeartButton } from './HeartButton';
import { Mic2, MonitorSpeaker, Play, Rows, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '../ui/slider';

function Footer() {
  return (
    <footer className='bg-zinc-800 border-zinc-700 p-4 w-screen flex items-center justify-between'>
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
      <div className='flex flex-col items-center gap-4 w-72'>
        <div className='flex items-center space-x-10'>
          <button className='rounded-full p-2 pl-2.5 flex items-center justify-center'>
            <SkipBack fill='#fff' />
          </button>
          <button className='bg-white rounded-full p-2 pl-2.5 flex items-center justify-center'>
            <Play fill='#000' />
          </button>
          <button className='rounded-full p-2 pl-2.5 flex items-center justify-center'>
            <SkipForward fill='#fff' />
          </button>
        </div>
        <Slider defaultValue={[70]} max={100} step={1} />
      </div>
      <div className='flex items-center gap-4'>
        <button className='text-zinc-400 hover:text-zinc-200'>
          <Mic2 size={20} />
        </button>
        <button className='text-zinc-400 hover:text-zinc-200'>
          <Rows size={20} />
        </button>
        <button className='text-zinc-400 hover:text-zinc-200'>
          <MonitorSpeaker size={20} />
        </button>
        <button className='text-zinc-400 hover:text-zinc-200'>
          <Volume2 size={20} />
        </button>
        <Slider defaultValue={[70]} max={100} step={1} className='w-32' />
      </div>
    </footer>
  );
}

export { Footer };