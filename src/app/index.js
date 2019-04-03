import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import Body from '../components/body/body.js';

class Test extends React.Component {
    render() {
        return (
            <div>
                <div id="header">
                    här haru måns!
                </div>
                <Body>
                    här ska menyn vara
                </Body>
                <div id="footer">
                    här ska footern vara
                </div>
            </div>
        ); 
    }
}

ReactDOM.render(<Test/>, document.getElementById("root"));