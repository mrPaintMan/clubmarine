import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
               <div class = "container">
                    <section>
                      <h1>Clubmarine</h1>  
                    </section>

                    <nav class = "navbar">
                        <ul class = "nav">
                            <li class = "nav-item first"></li>
                                <a href ="/">Hem</a>
                            <li class = "nav-item"></li>
                                <a href ="/">Hem</a>
                            <li class = "nav-item"></li>
                                <a href ="/">Hem</a>
                            <li class = "nav-item last"></li>
                                <a href ="/">Hem</a>
                            <li class = "nav-item .fa-shopping-cart cart"></li>
                            <li class = "nav-item .fa-search search"></li>
                        </ul>    

                    
                    
                    </nav>

               
               
               
               </div>
               
            </div>
        ); 
    }
}

//ReactDOM.render(<Header/>, document.getElementById("header"));
export default Header; 