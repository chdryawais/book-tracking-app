import React from 'react';

export default function SearchInput({ classes, onChange }) {
  const [searchKey, setSearchKey] = React.useState('');
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  React.useEffect(() => {
    if (searchKey) {
      onChange(searchKey);
    } else {
      onChange('');
    }
  }, [searchKey]);
  return (
    <div
      className={`p-3 flex flex-row items-center border border-mercuryGrey rounded-xl ${classes}`}
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
      <input
        type='text'
        className='ml-3 w-full outline-none bg-transparent text-black dark:text-white'
        autoFocus
        onChange={handleChange}
        value={searchKey}
      />
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-current text-silverGrey cursor-pointer'
        onClick={() => setSearchKey('')}
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 13.591L9.0455 16.5455L7.4545 14.9545L10.409 12L7.4545 9.0455L9.0455 7.4545L12 10.409L14.9545 7.4545L16.5455 9.0455L13.591 12L16.5455 14.9545L14.9545 16.5455L12 13.591Z'
        />
      </svg>
    </div>
  );
}
