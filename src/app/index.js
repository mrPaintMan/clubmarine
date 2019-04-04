import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header/header.jsx';

class Test extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>


                


                <div id="body">
                    här ska menyn vara
                </div>
                <div id="footer">
                    här ska footern vara
                </div>
            </div>
        ); 
    }
}

ReactDOM.render(<Test/>, document.getElementById("root"));