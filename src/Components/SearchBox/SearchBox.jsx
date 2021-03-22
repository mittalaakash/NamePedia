import { React } from 'react';
import './SearchBox.css';

const SearchBox = ({ inputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => {
                    inputChange(event.target.value);
                }}
                placeholder="Type Keyword"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
