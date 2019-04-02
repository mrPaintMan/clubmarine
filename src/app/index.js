import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1 style= {{color: "red"}} className="display-3">KIIIng</h1>
            </div>
        ); 
    }
}

ReactDOM.render(<Test/>, document.getElementById("test"));