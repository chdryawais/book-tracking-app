import React from 'react';
import GridItem from '../components/gridItem';

export default function GridView({ list, openModal }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-8 pb-8'>
      {list.map((item, index) => (
        <GridItem item={item} key={index} openModal={openModal} />
      ))}
    </div>
  );
}
