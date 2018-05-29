import React from 'react';

export default class AddItem extends React.Component {
    state = {
        error: undefined
    };
    handleAddItem = (e) => {
        e.preventDefault()
        const item = e.target.elements.item.value.trim();
        const error = this.props.handleAddItem(item);

        this.setState(() => ({error}))

        if(!error) {
            e.target.elements.item.value = '';
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddItem}>
                    <input type="text" name="item" />
                    <button>Add Item</button>
                </form>
            </div>
        )
    };
}

