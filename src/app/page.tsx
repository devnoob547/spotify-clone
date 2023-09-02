import Image from 'next/image'
import { Home as HomeIcon, Search, Library, Plus, ArrowRight, ChevronDown } from 'lucide-react'
import { SideBar } from '@/components/SideBar';
import { Main } from '@/components/Main';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <SideBar />
        <Main />
      </div>
      <footer className='bg-zinc-800 border-zinc-700 p-6 w-screen'>
        footer
      </footer>
    </div>
  )
}
