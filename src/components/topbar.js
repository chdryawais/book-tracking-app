import React, { Fragment } from 'react';
import SearchInput from './searchInput';

export default function Topbar() {
  const [isSearch, setSearch] = React.useState(false);
  return (
    <Fragment>
      <div className='flex justify-between pb-3 border-b-2 border-concreteGrey dark:border-codGray'>
        <div className='flex flex-row items-center'>
          <h3 className='font-inter font-semibold text-3xl text-onyxGrey dark:text-white mr-3'>
            Book Library
          </h3>
          <div className='dark:bg-white rounded-xl p-3 cursor-pointer'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-devilGrey'
            >
              <mask
                id='mask0'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='18'
                height='18'
              >
                <circle cx='2.25' cy='9' r='2.25' fill='black' />
                <circle cx='15.75' cy='9' r='2.25' fill='black' />
                <circle cx='9' cy='9' r='2.25' fill='black' />
              </mask>
              <g mask='url(#mask0)'>
                <rect x='-3' y='-3' width='24' height='24' />
              </g>
            </svg>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='bg-concreteGrey dark:bg-codGray rounded-xl p-3 cursor-pointer'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current text-darkcharcolGray dark:text-snowWhite'
            >
              <rect
                x='0.75'
                y='0.75'
                width='6'
                height='6'
                rx='1.5'
                stroke-width='1.5'
              />
              <rect
                x='0.75'
                y='11.25'
                width='6'
                height='6'
                rx='1.5'
                stroke-width='1.5'
              />
              <rect
                x='11.25'
                y='0.75'
                width='6'
                height='6'
                rx='1.5'
                stroke-width='1.5'
              />
              <rect
                x='11.25'
                y='11.25'
                width='6'
                height='6'
                rx='1.5'
                stroke-width='1.5'
              />
            </svg>
          </div>
          <div className='rounded-xl p-3 mx-4  cursor-pointer'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-devilGrey dark:text-dustyGrey'
            >
              <rect y='10.5' width='18' height='1.5' />
              <rect x='3' y='15' width='12' height='1.5' />
              <rect x='3' y='6' width='12' height='1.5' />
              <rect y='1.5' width='18' height='1.5' />
            </svg>
          </div>
          <div className='hidden sm:block'>
            {isSearch ? (
              <SearchInput classes='w-72 xl:w-96' />
            ) : (
              <div
                className='bg-snowWhite dark:bg-onyxGrey rounded-xl p-3 cursor-pointer'
                onClick={() => setSearch(!isSearch)}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='fill-current text-darkcharcolGray dark:text-altoGrey'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5ZM12.2465 13.3072C10.9536 14.3652 9.30095 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.30095 14.3652 10.9536 13.3072 12.2465L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12.2465 13.3072Z'
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='block sm:hidden mt-3'>
        <SearchInput classes='w-full bg-snowWhite' />
      </div>
    </Fragment>
  );
}
