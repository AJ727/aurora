import React from 'react';
import Header from './Header';
import Items from './Items';
import AddItem from './AddItem';

export default class AuroraApp extends React.Component {
    state = {
        items: []
    }
    deleteOption = (itemToRemove) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((item) =>
                itemToRemove !== item
            )
        }))
    }
    render() {
        let randomSaying = "Well this isn't random right now so oh well";
        return(
            <div>
                <Header randomSaying = {randomSaying} />
                <Items 
                    items = {this.state.items}
                    deleteOption = {this.deleteOption}
                />
                <AddItem
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}