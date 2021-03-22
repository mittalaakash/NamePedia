import { React } from 'react';
import './Header.css';
import image from '../../image.svg';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src={image}
                alt="Header_image"
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                } `}
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                } `}
            >
                {headTitle}!
            </h1>
        </div>
    );
};

export default Header;
