import { useNavigate } from "react-router-dom"
import {useState, useEffect, useRef} from "react"
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'


function AddProperty(){

    let navigate=useNavigate()

    function saveData(){
        let ref
        let property={
            "address":document.getElementById("address").value,
            "postcode":document.getElementById("postcode").value,
            "type":document.getElementById("type").value,
            "price":document.getElementById("price").value,
            "bedroom":document.getElementById("bedroom").value,
            "bathroom":document.getElementById("bathroom").value,
            "garden":document.getElementById("garden").value,
            "status":document.getElementById("status").value
        }

        ref=fetch("http://localhost:3000/property",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(property)
        })

        navigate("/properties")

    }
    return(
        <>  
        <div class="container"><h2>Properties</h2></div>
            <div class="container bg-light p-3 rounded">
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <h5 class="card-header bg-dark text-light"><FontAwesomeIcon icon={faPen}/> Add a Property</h5>
                        <div class="card-body">
                        
                            <form>
                            <div class="form-group">
                                <label for="inputAddress"><b>Address:</b></label>
                                <input type="text" class="form-control" id="address" placeholder="Enter address"/>
                            </div>
                            <div class="form-group">
                                <label for="inputpPostcode"><b>Postcode:</b></label>
                                <input type="text" class="form-control" id="postcode" placeholder="Enter postcode"/>
                            </div>
                            <div class="form-group">
                            <label for="inputType"><b>Type of Property:</b></label>
                                <select id="type" class="form-select">
                                    <option value="" selected disabled>Please select</option>
                                    <option value="DETACHED">DETACHED</option>
                                    <option value="SEMI">SEMI</option>
                                    <option value="APARTMENT">APARTMENT</option>   
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputPrice"><b>Price:</b></label>
                                <input type="text" class="form-control" id="price" placeholder="price"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputBedrooms"><b>Number of Bedrooms:</b></label>
                                <select id="bedroom" class="form-select">
                                    <option value="" selected disabled>Please select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>   
                                    <option value="4">4</option>   
                                    <option value="4">4</option>   
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputBathrooms"><b>Number of Batrooms:</b></label>
                                <select id="bathroom" class="form-select">
                                    <option value="" selected disabled>Please select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>   
                                    <option value="4">4</option>   
                                </select>
                            </div>
                        
                            <div class="form-group">
                                <label for="inputGarden"><b>Does property have a Garden? :</b></label>
                                <select id="garden" class="form-select">
                                    <option value="" selected disabled>Please select</option>
                                    <option value="1">YES</option>
                                    <option value="0">NO</option> 
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputStatus"><b>Status:</b></label>
                                <select id="status" class="form-select">
                                    <option value="" selected disabled>Please select</option>
                                    <option value="FOR SALE">FOR SALE</option>
                                    <option value="SOLD">SOLD</option> 
                                </select>
                            </div>
                                <br/>
                                <button type="submit" class="w-100 btn btn-primary" onClick={saveData}>Add Property</button>
                                <br/>
                                <Link to="/properties"><button class="w-100 btn btn-light">Cancel</button></Link>
                            </form>
                                  
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProperty