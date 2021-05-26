import React from 'react';
export default function ListView({ openModal, list }) {
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
          {list.map((item, index) => {
            return (
              <tr>
                <td className='py-4'>
                  <div
                    className='flex flex-row items-center cursor-pointer'
                    onClick={() => openModal(item)}
                  >
                    <div className='w-14'>
                      <img
                        className='w-14 h-auto'
                        alt='User avatar'
                        src={item.image}
                      />
                    </div>
                    <div className='pl-6 max-w-6 sm:max-w-full'>
                      <h1 className='overflow-ellipsis font-inter font-semibold text-base sm:text-xl text-codGray dark:text-concreteGrey'>
                        {item.title}
                      </h1>
                      <p className='font-inter font-medium text-base text-devilGrey dark:text-dustyGrey'>
                        {item.author}
                      </p>
                    </div>
                  </div>
                </td>
                <td className='hidden md:table-cell py-4'>
                  <p className='font-inter font-semibold text-base text-devilGrey dark:text-dustyGrey'>
                    {item.genre}
                  </p>
                </td>
                <td className='py-4'>
                  <p className='text-right md:text-left font-inter font-semibold text-base text-devilGrey dark:text-dustyGrey'>
                    {item.rp}
                  </p>
                </td>
                <td className='hidden md:table-cell py-4'>
                  <p className='font-inter font-semibold text-base text-devilGrey dark:text-dustyGrey'>
                    3 weeks ago
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
