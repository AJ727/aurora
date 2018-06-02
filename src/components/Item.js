import React from 'react';

// Each item is going to have a name and type
const Item = (props) => (
    <div>
        <p>{props.count}. {props.itemName}    {props.itemType}</p>
        <button
            onClick={(e) => {
                props.deleteItem(props.itemName)
            }}
        >
        remove</button>
    </div>
);

export default Item;