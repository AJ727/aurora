import React from 'react';

// I want to generate a random subtitle and assign it to the Header subtitle props

const Header = (props) => (
        <div>
            <h1>Inventory Checklist</h1>
            {props.randomSaying && <h2>{props.randomSaying}</h2>}
        </div>
    );

export default Header;