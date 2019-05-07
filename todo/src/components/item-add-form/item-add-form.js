import React from 'react';

import './item-add-form.css'

const ItemAddForm = ({AddItem}) => {
    return (
        <div className="item-add-form">
          <button 
             className="btn btn-outline-secondary"
             onClick={() => AddItem("Some text")}>
            Add Item
          </button>
        </div>
    );
};

export default ItemAddForm;