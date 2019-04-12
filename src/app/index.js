import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header/header.jsx';
import '../index.css';
import Body from '../components/body/body.jsx';

class Test extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Body ></Body>
                <div id="footer">
                    här ska footern vara
                </div>
            </div>
        ); 
    }
}

ReactDOM.render(<Test/>, document.getElementById("root"));