import { useNavigate } from "react-router-dom"
import {useState, useEffect, useRef} from "react"
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'


function AddBuyer(){

    let navigate=useNavigate()
    
    function saveData(){
        let ref
        let buyer={
            "firstName":document.getElementById("fname").value,
            "surname":document.getElementById("sname").value,
            "phone":document.getElementById("phone").value,
            "address":document.getElementById("address").value,
            "postcode":document.getElementById("postcode").value
        }

        ref=fetch("http://localhost:3000/buyer",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(buyer)
        })

        navigate("/buyers")

    }

    return(
        <>  
        <div class="container"><h2>Buyers</h2></div>
            <div class="container bg-light p-3 rounded">
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <h5 class="card-header bg-dark text-light"><FontAwesomeIcon icon={faPen}/> Add a Buyer</h5>
                        <div class="card-body">
                        
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name:</label>
                                <input type="text" class="form-control" id="fname"  placeholder="Enter First name" required/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Second Name:</label>
                                <input type="text" class="form-control" id="sname" placeholder="Enter Second name" required/>
                            </div>
                        
                            <div class="form-group">
                                <label for="telephone">Telephone:</label>
                                <input type="text" class="form-control" id="phone" placeholder="Enter Telephone number" required/>
                            </div>
                            <div class="form-group">
                                <label for="address">Address:</label>
                                <input type="text" class="form-control" id="address" placeholder="Enter address" required/>
                            </div>
                            <div class="form-group">
                                <label for="postcode">Postcode:</label>
                                <input type="text" class="form-control" id="postcode" placeholder="Enter postcode" required/>
                            </div>
                                <br/>
                                <button type="submit" class="w-100 btn btn-primary" onClick={saveData}>Add Buyer</button>
                                <br/>
                                <Link to="/buyers"><button class="w-100 btn btn-light">Cancel</button></Link>
                            </form>
                                  
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBuyer