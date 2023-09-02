import { Play } from 'lucide-react';
import Image from 'next/image';


interface MainPlaylistProps {
  img: string | any;
  name: string;
}

function MainPlaylist(props: MainPlaylistProps) {
  return (
    <div className='flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 cursor-pointer transition-all group duration-300 rounded-md h-16 pr-4'>
      <div className='flex items-center gap-2'>
        <Image src={props.img} alt='Além do que os olhos podem ver' className='h-16 w-16 rounded-l-md' />
        <span className='font-bold text-sm'>{props.name}</span>
      </div>
      <button className='ml-auto p-3 pl-3.5 rounded-full bg-transparent items-center justify-center invisible transition-all duration-300 group-hover:visible group-hover:bg-green-500 group-hover:shadow-md group-hover:shadow-zinc-800 '>
        <Play className='text-black' fill='#000' />
      </button>
    </div>
  )
}

export { MainPlaylist };