import React, { Component } from 'react';

import './item-status-filter.js';

export default class ItemStatusFilter extends Component {
 
render() {
    const {filterChange, filter} = this.props;
    return (
        <div className="btn-group" onClick={filterChange} >
            <button type="button"
                    className={filter === 'all' ? 'btn btn-info' : 'btn btn-outline-secondary'} id="all">All</button>
            <button type="button"
                    className={filter === 'active' ? 'btn btn-info' : 'btn btn-outline-secondary'} id="active">Active</button>
            <button type="button"
                    className={filter === 'done' ? 'btn btn-info' : 'btn btn-outline-secondary'} id="done">Done</button>
        </div>
    );
  };
};