import React from 'react';
import Book1 from '../assets/images/book-1.png';
export default function ListView({ openModal }) {
  return (
    <div>
      <table className='table-fixed w-full whitespace-nowrap rounded-lg bg-white dark:bg-black overflow-hidden'>
        <thead>
          <tr className='text-gray-600 text-left'>
            <th className='py-4 w-1/2'>
              <div className='font-medium text-base text-dustyGrey cursor-pointer flex flex-row items-center'>
                Book Title &amp; Author
                <svg
                  width='8'
                  height='12'
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current text-silverGrey ml-2'
                >
                  <path d='M1 4.5L4 1.5L7 4.5' stroke-width='1.5' />
                  <path d='M7 7.5L4 10.5L1 7.5' stroke-width='1.5' />
                </svg>
              </div>
            </th>
            <th className='hidden md:table-cell py-4 w-1/3'>
              <div className='font-medium text-base text-dustyGrey cursor-pointer flex flex-row items-center'>
                Genre
                <svg
                  width='8'
                  height='12'
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current text-silverGrey ml-2'
                >
                  <path d='M1 4.5L4 1.5L7 4.5' stroke-width='1.5' />
                  <path d='M7 7.5L4 10.5L1 7.5' stroke-width='1.5' />
                </svg>
              </div>
            </th>
            <th className='py-4 text-center w-1/3'>
              <div className='font-medium text-base text-dustyGrey cursor-pointer flex flex-row items-center justify-end md:justify-start'>
                Reading Progress
                <svg
                  width='8'
                  height='12'
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current text-silverGrey ml-2'
                >
                  <path d='M1 4.5L4 1.5L7 4.5' stroke-width='1.5' />
                  <path d='M7 7.5L4 10.5L1 7.5' stroke-width='1.5' />
                </svg>
              </div>
            </th>
            <th className='hidden md:table-cell py-4 text-center w-1/3'>
              <div className='font-medium text-base text-dustyGrey cursor-pointer flex flex-row items-center'>
                Last Opened
                <svg
                  width='8'
                  height='12'
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current text-silverGrey ml-2'
                >
                  <path d='M1 4.5L4 1.5L7 4.5' stroke-width='1.5' />
                  <path d='M7 7.5L4 10.5L1 7.5' stroke-width='1.5' />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <td className='py-4'>
              <div
                className='flex items-center cursor-pointer'
                onClick={openModal}
              >
                <div className='inline-flex w-14'>
                  <img className='w-14 h-auto' alt='User avatar' src={Book1} />
                </div>
                <div className='pl-6'>
                  <h1 className='font-inter font-semibold text-xl text-codGray dark:text-concreteGrey'>
                    Faith
                  </h1>
                  <p className='font-inter font-medium text-base text-devilGrey dark:text-dustyGrey'>
                    David Adams
                  </p>
                </div>
              </div>
            </td>
            <td className='hidden md:table-cell py-4'>
              <p className='font-inter font-semibold text-base text-devilGrey dark:text-dustyGrey'>
                Fiction
              </p>
            </td>
            <td className='py-4'>
              <p className='text-right md:text-left font-inter font-semibold text-base text-devilGrey dark:text-dustyGrey'>
                72%
              </p>
            </td>
            <td className='hidden md:table-cell py-4'>
              <p className='font-inter font-semibold text-base text-devilGrey dark:text-dustyGrey'>
                David Adams
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
