import React from 'react';

export default class AddItem extends React.Component {
    state = {
        error: undefined
    };
    handleAddItem = (e) => {
        e.preventDefault();
        const item = e.target.elements.option.value.trim();
        const itemType = e.target.elements.type.value.trim();
        const error = this.props.handleAddItem(item);

        // Implicitly Returns Error
        this.setState(() => ({error}))

        // If no error, clear input
        if(!error) {
            e.target.elements.option.value = '';
        }
    };
    selectedOption = (n) => {
        return(
            <option value={n} selected={this.state.selected === n}>{n}</option>
        )
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddItem}>
                    <input type="text" name="option" />
                    <br />
                    <select name="type" onChange={this.selectedOption}>
                        <option>Gin</option>
                        <option>Tequila</option>
                        <option>Rum</option>
                        <option>Vodka</option>
                        <option>Whiskey</option>
                    </select>
                    <button>Add Item</button>
                </form>
            </div>
        )
    };
}

