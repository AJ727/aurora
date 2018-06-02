import React from 'react';
import Header from './Header';
import Items from './Items';
import AddItem from './AddItem';

export default class AuroraApp extends React.Component {
    state = {
        items: []
    }
    // Description for deleteItem, because it's very involved:
    // deleteItem is an arrow function that takes the selected option to remove as a parameter
    // It then calls setState with prevState as a parameter
    // This in turn calls another arrow function, that modifies the items array using filter
    // The filter method takes a function as an argument
    // This function-argument takes item as a parameter, and returns a new array with elements that pass the test
    // Ex. If zoo is not equal to farm, then it passes and returns??????
    deleteItem = (itemToRemove) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((item) =>
                itemToRemove !== item
            )
        }))
    };
    handleAddItem = (item, itemType) => {
        if (!item) {
            return 'Enter valid item';
        }
        else if (this.state.items.indexOf(item) > -1) {
            return 'This item already exists'
        }
        this.setState((prevState) => ({
            items: prevState.items.concat(item + ' ' + itemType)
        }));
    };
    render() {
        let randomSaying = "Well this isn't random right now so oh well";
        return(
            <div>
                <Header randomSaying = {randomSaying} />
                <Items 
                    items = {this.state.items}
                    deleteItem = {this.deleteItem}
                />
                <AddItem
                    handleAddItem = {this.handleAddItem}
                />
            </div>
        )
    };
}