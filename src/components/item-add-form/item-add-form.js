import React from 'react';
import './item-add-form.css';

export default class AddItem extends React.Component{
    render(){
        const {addItem} = this.props;
        return (
            <div className="item-add-form"> 
                <button type="button"
                    className="btn btn-outline-secondary btn-sm margin-top-5" 
                    onClick={() => addItem("todo something")}>
                    Add item
                </button>
            </div>
        )
    }
}