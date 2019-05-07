import React from 'react';
import './search-panel.css';

const SearchPanel = ({searchChange}) => {
    return (    <div>
                <input type="text"
                    className="form-control search-input"
                    placeholder="search"
                    onChange={searchChange}
                    />
                </div>
    );
};

export default SearchPanel;