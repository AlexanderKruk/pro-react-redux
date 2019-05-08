import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="foo">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="foo">People</a>
        </li>
        <li>
          <a href="foo">Planets</a>
        </li>
        <li>
          <a href="foo">Starships</a>
        </li>
      </ul>
      </div>
  );
};

export default Header;