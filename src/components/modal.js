import React from 'react';
import Modal from 'react-modal';
import { ThemeContext } from '../context/themeContext';

export default function BookModal({ isOpen, closeModal, book }) {
  const { theme } = React.useContext(ThemeContext);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'none',
      marginTop: 100,
    },
    overlay: {
      backgroundColor:
        theme === 'dark' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(0, 0, 0, 0.75)',
      overflow: 'auto',
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className='w-11/12 md:w-2/3 sm:w-5/6 lg:w-41 p-8 bg-white dark:bg-black mt-80 sm:mt-24 mx-auto lg:m-auto rounded-6xl'>
        <div className='flex justify-end mb-5'>
          <div onClick={closeModal} className='cursor-pointer'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-silverGrey'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 13.591L9.0455 16.5455L7.4545 14.9545L10.409 12L7.4545 9.0455L9.0455 7.4545L12 10.409L14.9545 7.4545L16.5455 9.0455L13.591 12L16.5455 14.9545L14.9545 16.5455L12 13.591Z'
              />
            </svg>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={book.image} alt='' />
        </div>
        <div className='flex flex-col pt-10'>
          <h1 className='font-inter font-semibold text-3xl text-codGray dark:text-concreteGrey text-center'>
            {book.title}
          </h1>
          <p className='font-inter font-medium text-lg text-devilGrey dark:text-dustyGrey text-center'>
            {book.author}
          </p>
        </div>
        <div className='px-7 sm:px-14 mt-5 mb-7'>
          <p className='font-inter font-medium text-base text-darkcharcolGray dark:text-dustyGrey text-center'>
            Hundreds of years before the Toralii attacked Earth, destroying the
            cities of Beijing, Tehran and Sydney, before they developed the
            voidwarp technology and destroyed their homeworld, they warred
            amongst themselves.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center space-y-1'>
          <button className='w-full sm:w-auto bg-snowWhite rounded-xl py-3 px-5 text-darkcharcolGray text-base font-inter font-medium mr-5'>
            Close
          </button>
          <button className='bg-blue rounded-xl py-3 px-5 text-white text-base font-inter font-medium'>
            Continue Reading
          </button>
        </div>
      </div>
    </Modal>
  );
}
