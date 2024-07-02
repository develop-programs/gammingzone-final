import BreadcrumbsMain from '@/components/custom/Breadcrumbs-Main'
import { Button } from '@/components/ui/button'
import { SupportData } from '@/json/Support'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='w-full container space-y-12 pb-12'>
            <BreadcrumbsMain />
            <div className='w-full flex justify-between items-center'>
                <div className='grid gap-4'>
                    <div className='bg-yellow-400 text-center font-semibold w-32 p-1'>Hep Center</div>
                    <span className='text-2xl font-bold'>How we can help you</span>
                    <div className='flex items-center gap-4'>
                        <svg fill="none" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            className="size-5 stroke-orange-600" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder='Enter your query or Keyword' className='focus-visible:outline-none outline-none font-semibold w-96' />
                        <Button variant='orange' className='text-white text-base font-semibold'>Search</Button>
                    </div>
                </div>
                <div>
                    <Image src="/images/5114855.jpg" alt='' width={300} height={100} className='w-96 aspect-square' />
                </div>
            </div>
            <div className='space-y-8'>
                <p className='w-full text-center text-2xl font-semibold'>What can we assist you with today?</p>
                <div className='grid grid-cols-4 gap-4 select-none'>
                    {
                        SupportData.map((item: SupportDataProps, index: number) => (
                            <div key={index} className='w-full flex gap-4 items-center p-4 border-2 hover:border-orange-400 rounded-md'>
                                {item.icon}
                                <p className='text-center'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-8'>
                <p className='w-full text-center text-2xl font-semibold'>Popular Topics</p>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        ["How do I return my item?", "What are the 'Delivery Timelines'?", "How to cancel Clicon Order.", "What is Clicons Returns Policy?", "What is 'Discover Your Daraz Campaign 2022'?,", "Ask the Digital and Device Community", "How long is the refund process?", "What is the Voucher & Gift Offer in this Campaign?", "How to change my shop name?"].map((item: string, index: number) => (
                            < div key={index} className='flex items-center text-sm gap-2 font-medium group/item select-none'>
                                <div className='size-2 rounded-full bg-black group-hover/item:bg-orange-600' />
                                <span className='group-hover/item:text-orange-600'>{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
