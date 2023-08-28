import Image from 'next/image'
import { Home as HomeIcon, Search, Library, Plus, ArrowRight, ChevronDown } from 'lucide-react'
import { SideBar } from '@/components/SideBar';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <SideBar />
        <main className='flex-1 p-6'>
          main
        </main>
      </div>
      <footer className='bg-zinc-800 border-zinc-700 p-6 w-screen fixed bottom-0'>
        footer
      </footer>
    </div>
  )
}
