import React from 'react';
import ToggleButton from './toggleButton';

export default function Sidebar() {
  return (
    <div className='hidden lg:block pr-4 w-80 h-screen bg-white dark:bg-codGray'>
      <div className='fixed flex flex-col pt-6 pl-5 '>
        <div className='pl-5'>
          <h3 className='font-inter font-semibold text-lg text-devilGrey dark:text-silverGrey'>
            Library
          </h3>
        </div>
        <div className='pt-5 mb-14'>
          <button className='rounded-18 h-13 hover:border w-full flex flex-row justify-between items-center px-3 dark:bg-black'>
            <div className='flex flex-row items-center pl-1.5'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-codGray dark:text-white stroke-current'
              >
                <circle cx='9' cy='9' r='8.25' stroke-width='1.5' />
                <path
                  d='M12.375 8.35048C12.875 8.63916 12.875 9.36084 12.375 9.64952L7.875 12.2476C7.375 12.5363 6.75 12.1754 6.75 11.5981L6.75 6.40192C6.75 5.82457 7.375 5.46373 7.875 5.7524L12.375 8.35048Z'
                  stroke-width='1.5'
                />
              </svg>
              <p className='pl-3 text-codGray text-base font-inter font-medium dark:text-white'>
                My Books
              </p>
            </div>
            <div className='rounded-xl flex items-center bg-snowWhite dark:bg-codGray py-1.5 px-3 text-xs text-devilGrey dark:text-dustyGrey font-inter font-semibold'>
              15
            </div>
          </button>
          <button className='h-13 w-full flex flex-row items-center px-3'>
            <div className='flex flex-row items-center pl-1.5'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-darkcharcolGray dark:text-dustyGrey stroke-current'
              >
                <circle cx='9' cy='9' r='8.25' stroke-width='1.5' />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.75 4.5H8.25V8.25L4.5 8.25V9.75H8.25V13.5H9.75V9.75H13.5V8.25L9.75 8.25V4.5Z'
                  fill='#696969'
                />
              </svg>
              <p className='pl-3 text-darkcharcolGray dark:text-dustyGrey text-base font-inter font-medium'>
                Add New Books
              </p>
            </div>
          </button>
        </div>
        <div className='pl-5'>
          <h3 className='font-inter font-semibold text-lg text-devilGrey dark:text-silverGrey'>
            Settings
          </h3>
        </div>
        <div className='pt-5 mb-14'>
          <div className='h-13 w-full flex flex-row justify-between items-center px-3'>
            <div className='flex flex-row items-center pl-1.5'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-devilGrey dark:text-dustyGrey fill-current'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M16.5 9C16.5 12.889 13.54 16.0867 9.75 16.463V1.53703C13.54 1.91332 16.5 5.11099 16.5 9ZM8.25 1.53703V16.463C4.46001 16.0867 1.5 12.889 1.5 9C1.5 5.11099 4.46001 1.91332 8.25 1.53703ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM15 9C15 11.6124 13.3304 13.8349 11 14.6586V3.34141C13.3304 4.16508 15 6.38756 15 9Z'
                />
              </svg>
              <p className='pl-3 text-codGray dark:text-silverGrey text-base font-inter font-medium'>
                Dark Mode
              </p>
            </div>
            <ToggleButton
              onChange={(state) => console.log(state)}
              defaultChecked={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
