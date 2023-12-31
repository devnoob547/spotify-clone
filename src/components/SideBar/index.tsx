import React from 'react';
import { Home as HomeIcon, Search, Library, Plus, ArrowRight, ChevronDown } from 'lucide-react';
import ImageLike from '../../../public/liked.svg';
import FormaImage from '../../../public/forma.jpg';
import AteuImage from '../../../public/ateu.jpg';
import AdoqImage from '../../../public/adoq.jpg';
import MaurinhoImage from '../../../public/maurinho.jpg';
import { ItemPlaylist } from './ItemPlaylist';

function SideBar() {
  return (
    <aside className='w-80 bg-zinc-950 p-2 min-h-full flex flex-col'>
      <nav className='space-y-6 bg-zinc-900 p-4 rounded-lg'>
        <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-400 hover:text-zinc-50 transition-all duration-300'>
          <HomeIcon />
          Início
        </a>
        <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-400 hover:text-zinc-50 transition-all duration-300'>
          <Search />
          Buscar
        </a>
      </nav>
      <nav className='bg-zinc-900 p-4 rounded-lg mt-2 max-h-full flex-1'>
        <div className='flex items-center justify-between text-sm font-semibold text-zinc-400'>
          <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-400 hover:text-zinc-50 transition-all duration-300'>
            <Library />
            Sua Biblioteca
          </a>
          <div className='flex items-center gap-4'>
            <a href="" className='p-2 rounded-full hover:bg-zinc-800 hover:text-zinc-50 transition-all duration-500'>
              <Plus />
            </a>
            <a href="" className='p-2 rounded-full hover:bg-zinc-800 hover:text-zinc-50 transition-all duration-500'>
              <ArrowRight />
            </a>
          </div>
        </div>
        <nav className="flex items-center gap-2 mt-4">
          <a href="" className='px-4 py-2 rounded-3xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 text-sm font-semibold'>Playlists</a>
          <a href="" className='px-4 py-2 rounded-3xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 text-sm font-semibold'>Albuns</a>
          <a href="" className='px-4 py-2 rounded-3xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 text-sm font-semibold'>Artistas</a>
        </nav>
        <div className="flex items-center justify-between mt-2">
          <a href="" className='p-2 hover:bg-zinc-800 rounded-full transition-all duration-300'>
            <Search size={20} />
          </a>
          <button className='flex items-center hover:cursor-pointer transition-all duration-300 justify-between gap-1 text-sm font-semibold text-zinc-400 hover:text-zinc-50'>Recentes <ChevronDown /></button>
        </div>
        <nav className='mt-2 overflow-auto max-h-64'>
          <ItemPlaylist img={ImageLike} title='Musicas Curtidas' type='Playlist' name='Playlist' />
          <ItemPlaylist img={FormaImage} title='>> FørMa' type='Album' name='Album - Mauro Henrique' />
          <ItemPlaylist img={AteuImage} title='ATEU' type='Album' name='Album - Mauro Henrique' />
          <ItemPlaylist img={AdoqImage} title='Além do que os olhos podem ver' type='Album' name='Album - Oficina G3' />
          <ItemPlaylist img={MaurinhoImage} title='Mauro Henrique' type='Artista' />
        </nav>
      </nav>
    </aside>
  );
}

export { SideBar };