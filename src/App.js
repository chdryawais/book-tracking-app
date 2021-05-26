import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import GridView from './views/gridView';
import ListView from './views/listView';
import BookModal from './components/modal';
import { ThemeContext } from './context/themeContext';
import data from './data/data.json';

function App() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [list, setList] = useState([]);
  const [fetchedList, setFetchedList] = useState([]);
  const [bookDetail, setBook] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/data', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setList(res);
        setFetchedList(res);
      });
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(book) {
    setBook(book);
    setIsOpen(true);
  }

  const _search = (value) => {
    let text = value.toLowerCase();
    // data.data only use for temporary data
    if (text === '') {
      setList(fetchedList);
    } else {
      let result = data.data.filter(
        (item) =>
          item.title.toLowerCase().includes(text) ||
          item.author.toLowerCase().includes(text) ||
          item.genre.toLowerCase().includes(text) ||
          item.rp.includes(text)
      );

      setList(result);
    }
  };
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <div className='flex flex-row bg-white dark:bg-codGray'>
        <Sidebar />
        <div className='w-full min-h-screen h-full border-l-2 border-gray-300 dark:border-black bg-white dark:bg-black'>
          <div className='sm:hidden flex flex-row justify-end border-4 border-white dark:border-black bg-concreteGrey dark:bg-codGray'>
            <div
              className='flex items-center dark:bg-black rounded-xl p-3 h-12 m-1'
              onClick={changeTheme}
            >
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
            </div>
          </div>
          <div className='sm:hidden block h-1 bg-mercuryGrey dark:bg-shaftGrey' />
          <div className='px-2 sm:px-8 pt-4'>
            <Topbar
              isGridView={isGridView}
              setView={setIsGridView}
              onChange={_search}
            />
            {isGridView ? (
              <GridView list={list} openModal={openModal} />
            ) : (
              <ListView list={list} openModal={openModal} />
            )}
          </div>
        </div>
      </div>
      <BookModal isOpen={isOpen} closeModal={closeModal} book={bookDetail} />
    </>
  );
}

export default App;
