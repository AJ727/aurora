import React from 'react';
import Item from './Item';

// Import the item into this items aggregate component
const Items = (props) => (
    <div>
        <div>
            <h3>Your Current Bar</h3>
        </div>
        {props.items.length === 0 && <p>Start your bar by adding your first item</p>}
        {
            props.items.map((item, index) =>
                <Item
                    key = {item}
                    itemName = {item}
                    itemType = {console.log(item)}
                    count = {index + 1}
                    deleteItem = {props.deleteItem}
                />
            )
        }
    </div>
);

export default Items;