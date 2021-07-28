import React from 'react';
import './Header.css';
import image from '../../image.svg';

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className='head-container'>
      <img
        src={image}
        alt='Header_image'
        className={`head-image head-image-${
          headerExpanded ? 'expanded' : 'contracted'
        } `}
      />
      <h1
        className={`head-text head-text-${
          headerExpanded ? 'expanded' : 'contracted'
        } `}
      >
        {headTitle}!
      </h1>
    </div>
  );
};

export default Header;
