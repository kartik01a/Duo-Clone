import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
        <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
          <Button size="lg" variant="ghost" className='w-full'>
            <Image src="jp.svg" alt="flag" height={32} width={48} className='mr-4 rounded-md' />
            Japanese
          </Button>
          <Button size="lg" variant="ghost" className='w-full'>
            <Image src="en.svg" alt="flag" height={32} width={48} className='mr-4 rounded-md' />
            English
          </Button>
          <Button size="lg" variant="ghost" className='w-full'>
            <Image src="in.svg" alt="flag" height={32} width={48} className='mr-4 rounded-md' />
            Hindi
          </Button>
          <Button size="lg" variant="ghost" className='w-full'>
            <Image src="kr.svg" alt="flag" height={32} width={48} className='mr-4 rounded-md' />
            Korean
          </Button>
          <Button size="lg" variant="ghost" className='w-full'>
            <Image src="de.svg" alt="flag" height={32} width={48} className='mr-4 rounded-md' />
            German
          </Button>
        </div>
    </footer>
  )
}
