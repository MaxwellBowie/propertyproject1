
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
function NavBar(){
    return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">QA Property</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
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
    </>)

}

export default NavBar