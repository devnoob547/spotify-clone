import React from 'react';
import Image from 'next/image';

interface PlaylistProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  title: string;
  type: 'Playlist' | 'Album' | 'Artista';
  name?: string;
}

function ItemPlaylist(props: PlaylistProps) {
  return (
    <div className='flex items-center gap-2 rounded-md hover:bg-zinc-800 p-2 hover:cursor-pointer transition-all duration-300'>
      <Image src={props.img} alt="Like" className={`w-12 h-12 ${props.type === 'Artista' ? 'rounded-full' : 'rounded-sm'}`} />
      <div className='flex flex-col justify-center overflow-x-hidden'>
        <span className='font-semibold truncate'>{props.title}</span>
        <span className='text-sm text-zinc-400'>{props.name}</span>
      </div>
    </div>
  );
}

export { ItemPlaylist };