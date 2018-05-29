import React from 'react';
import Header from './Header';
import Items from './Items';
import AddItem from './AddItem';

export default class AuroraApp extends React.Component {
    state = {
        items: []
    }
    
    render() {
        let randomSaying = "Well this isn't random right now so oh well";
        return(
            <Header randomSaying = {randomSaying}/>
        )
    }
}