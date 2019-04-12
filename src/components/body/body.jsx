import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './body.css';
import Menu from './menu.jsx';

class Body extends React.Component{
    render() {
        let menuItems =[1,2,3,4,5]; 

        return(
            <div className="body-container">
                <div className="body-menu">
                    <Menu listArr={menuItems}/>
                </div>
            </div>
        );
    }
} 

export default Body;