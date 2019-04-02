import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1 style= {{color: "red"}} className="cssTest">KIIIng</h1>
            </div>
        ); 
    }
}

ReactDOM.render(<Test/>, document.getElementById("test"));