import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './body.css';


class MenuItem extends React.Component {
    render() {

        return(
            <li key={this.props.id}>{this.props.id}</li>
        );
    }
}

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listArr: props.listArr
        } 
        this.getNumberOfListItems = this.getNumberOfListItems.bind(this);
    }

     getNumberOfListItems() {
        const listItems = this.state.listArr.map((i) =>
            <MenuItem id={"menuItem"+i} key={i} className="menuItem" />
        );
        return listItems;
    }
    render() {
        let items = this.getNumberOfListItems();

        return (
            <div>
                <ul className="menu" id="bodyMenu">
                    {items}
                </ul>
                
            </div>
        );
    }
}
export default Menu;
