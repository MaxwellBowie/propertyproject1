
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
function NavBar(){
    return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <a class="navbar-brand">QA Property</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
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
            </nav>
    )

}

export default NavBar