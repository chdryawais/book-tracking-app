import React from 'react';

export default function GridItem({ item, openModal }) {
  return (
    <div className='col-span-1 cursor-pointer' onClick={() => openModal(item)}>
      <div className='relative'>
        <img src={item.image} alt='' />
        <div className='absolute flex flex-col justify-between w-full h-full p-3 top-0'>
          <div className='rounded-xl flex justify-center w-14 bg-white-0.16 backdrop-filter py-2.5 px-5 text-xs text-white font-inter font-semibold'>
            {item.rp}
          </div>
        </div>
        <div className='absolute flex flex-row justify-end w-full p-3 bottom-0'>
          <div className='flex pr-4'>
            <div className='rounded-xl mx-auto bg-black-0.6 backdrop-filter py-2.5 px-5 text-xs text-white font-inter font-semibold'>
              {item.genre}
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <h1 className='font-inter font-semibold text-xl text-codGray dark:text-concreteGrey'>
          {item.title}
        </h1>
        <p className='font-inter font-medium text-base text-devilGrey dark:text-dustyGrey'>
          {item.author}
        </p>
      </div>
    </div>
  );
}
