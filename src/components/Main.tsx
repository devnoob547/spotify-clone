import { ChevronRight, ChevronLeft, Play } from 'lucide-react';
import { MainPlaylist } from './MainPlaylist';
import AdoqImage from '../../public/adoq.jpg';
import FormaImage from '../../public/forma.jpg';
import AteuImage from '../../public/ateu.jpg';
import MaurinhoImage from '../../public/maurinho.jpg';
import Image from 'next/image';

const now = new Date();

function checkHour() {
  if (now.getHours() < 12 && now.getHours() > 5) {
    return 'Bom dia'
  } if (now.getHours() > 12 && now.getHours() < 18) {
    return 'Boa tarde'
  } else {
    return 'Boa noite'
  }
}

function Main() {
  return (
    <main className='flex-1 p-6 rounded-lg my-2 mr-2 bg-zinc-900 max-h-full'>
      <div className='flex items-center space-x-2'>
        <button className='bg-zinc-950 p-1 rounded-full'>
          <ChevronLeft />
        </button>
        <button className='bg-zinc-950 p-1 rounded-full'>
          <ChevronRight />
        </button>
      </div>
        <h1 className='font-bold my-6 text-3xl'>{checkHour()}</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <MainPlaylist img={FormaImage} name='>> FørMa' />
          <MainPlaylist img={FormaImage} name='>> FørMa' />
          <MainPlaylist img={FormaImage} name='>> FørMa' />
          <MainPlaylist img={FormaImage} name='>> FørMa' />
          <MainPlaylist img={FormaImage} name='>> FørMa' />
          <MainPlaylist img={FormaImage} name='>> FørMa' />
        </div>
      <div>
      </div>
    </main>
  )
}

export { Main };