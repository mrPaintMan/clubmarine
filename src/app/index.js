import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Test extends React.Component {
    render() {
        return (
            <div>
                <div id="header">
                    här haru måns!
                </div>
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

ReactDOM.render(<Test/>, document.getElementById("test"));