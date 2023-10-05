import Image from 'next/image';
import React from 'react';
import FormaImage from '../../../public/forma.jpg';
import { Play } from 'lucide-react';

function MadeForYou() {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-md w-44 space-y-2 cursor-pointer transition-all duration-300 group">
      <Image alt='Capa da música Forma, do cantor Mauro Henrique' src={FormaImage} className='rounded-md w-40 h-40' />
      <button className='ml-auto p-3 pl-3.5 rounded-full bg-transparent items-center justify-center invisible transition-all duration-300 group-hover:visible group-hover:bg-green-500 group-hover:shadow-md group-hover:shadow-zinc-800 float-right -translate-y-16 -translate-x-2'>
        <Play className='text-black' fill='#000' />
      </button>
      <div className='w-full'>
        <h1 className='text-lg font-semibold'>{'>>'} FørMa</h1>
        <p className='text-base text-zinc-400 font-normal overflow-hidden text-ellipsis whitespace-nowrap'>Mauro Henrique, Oficina G3, Fruto Sagrado, Fruto Sagrado, Fruto Sagrado, Fruto Sagrado, Fruto Sagrado</p>

      </div>
    </div>
  );
}

export { MadeForYou };