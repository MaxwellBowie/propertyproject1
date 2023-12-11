
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"


import "./Nav.css"

function NavBar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid">
                    <a class="navbar-brand">QA Property</a>
                    <div class="navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active"><Link to="/sellers">
                                <a class="nav-link">Sellers</a>
                                </Link></li>
                            <li class="nav-item"><Link to="/buyers">
                                <a class="nav-link">Buyers</a>
                                </Link></li>
                            <li class="nav-item"><Link to="/properties">
                                <a class="nav-link">Properties</a>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        

            
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid justify-content-center">
            <div class="navbar-collapse justify-content-center">
            <div class="navbar-nav">
                <ul class="nav">
                <li><a class="nav-link" href="#">Seller</a></li>
                <li><a class="nav-link" href="#">Buyer</a></li>
                <li><a class="nav-link">Properties</a></li>
                </ul>
            </div>
            </div>
        </div>
        </nav> */}

      
                

        </>
    )
}

export default NavBar