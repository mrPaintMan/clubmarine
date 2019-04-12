import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
               <div className = "container">
                    <section>
                      <h1>Clubmarine</h1>  
                    </section>

                    <nav className = "navbar">
                        <ul className = "nav">
                            <li className = "nav-item first"></li>
                                <a href ="/">Hem</a>
                            <li className = "nav-item"></li>
                                <a href ="/">Hem</a>
                            <li className = "nav-item"></li>
                                <a href ="/">Hem</a>
                            <li className = "nav-item last"></li>
                                <a href ="/">Hem</a>
                            <li className = "nav-item .fa-shopping-cart cart"></li>
                            <li className = "nav-item .fa-search search"></li>
                        </ul>    

                    
                    
                    </nav>

               
               
               
               </div>
               
            </div>
        ); 
    }
}

//ReactDOM.render(<Header/>, document.getElementById("header"));
export default Header; 