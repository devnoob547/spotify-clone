import { Home as HomeIcon, Search, Library, Plus, ArrowRight, ChevronDown } from 'lucide-react'
import ImageLike from '../../public/liked.svg';
import FormaImage from '../../public/forma.jpg';
import Image from 'next/image';

interface PlaylistProps {
  img: any;
  title: string;
  type: string
}

function ItemPlaylist(props: PlaylistProps) {
  return (
    <div className='flex items-center gap-2 rounded-md hover:bg-zinc-800 p-2 hover:cursor-pointer transition-all duration-300'>
      <Image src={props.img} alt="Like" className='w-12 h-12 rounded-sm' />
      <div className='flex flex-col justify-center'>
        <span className='font-semibold'>{props.title}</span>
        <span className='text-sm text-zinc-400'>{props.type}</span>
      </div>
    </div>
  )
}

function SideBar() {
  return (
    <aside className='w-80 bg-zinc-950 p-2 max-h-full'>
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
      <nav className='bg-zinc-900 p-4 rounded-lg mt-2'>
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
        <nav className='mt-2 overflow-auto h-screen'>
          <ItemPlaylist img={ImageLike} title='Musicas Curtidas' type='Playlist' />
          <ItemPlaylist img={FormaImage} title='>> ForMa' type='Single - Mauro Henrique' />
        </nav>
      </nav>
    </aside>
  )
}

export { SideBar };