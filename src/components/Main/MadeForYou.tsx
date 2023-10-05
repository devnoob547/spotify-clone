import Image from 'next/image';
import React from 'react';
import { Play } from 'lucide-react';

interface MadeForYouProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  title: string;
  description: string;
}

function MadeForYou({ image, title, description }: MadeForYouProps) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-md w-44 space-y-2 cursor-pointer transition-all duration-300 group">
      <div className='relative'>
        <Image alt='Capa da música Forma, do cantor Mauro Henrique' src={image} className='rounded-md w-40 h-40' />
        <button className='ml-auto p-3 pl-3.5 rounded-full bg-transparent items-center justify-center invisible transition-all duration-300 group-hover:visible group-hover:bg-green-500 group-hover:shadow-md group-hover:shadow-zinc-800 absolute bottom-2 right-2'>
          <Play className='text-black' fill='#000' />
        </button>
      </div>
      <div className='w-full'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <p className='text-base text-zinc-400 font-normal overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
      </div>
    </div>
  );
}

export { MadeForYou };