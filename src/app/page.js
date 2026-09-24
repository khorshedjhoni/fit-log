import React from 'react';
import LibraryPage from './library/page';
import Banner from './compnents/Banner';

const page = () => {
  return (
    <div className = "container mx-auto">
       <Banner></Banner>
      <LibraryPage></LibraryPage>
    </div>
  );
};

export default page;