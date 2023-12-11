import { useNavigate } from "react-router-dom"
import {useState, useEffect, useRef} from "react"
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'

function AddSeller(){

    let navigate=useNavigate()
    let [posts, addPosts]=useState([])
    let [fnameValue, fnameValues]=useState('')
    let [snameValue, snameValues]=useState('')
    

    function saveData(){
        let ref
        let seller={
            "firstName":document.getElementById("fname").value,
            "surname":document.getElementById("sname").value,
            "phone":document.getElementById("phone").value,
            "address":document.getElementById("address").value,
            "postcode":document.getElementById("postcode").value
        }

        ref=fetch("http://localhost:3000/seller",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(seller)
        })

        navigate("/sellers")

    }

    // function setFname(e){
    //     fnameValues(e.target.value);
    // }

    // function setSname(e){
    //     snameValues(e.target.value);
    // }

    // function checkData(){
    //     for(let i=0; i<=posts.length;i++){
    //         if(posts[i].firstname == fnameValue && posts[i].surname==snameValue){
                
    //             console.log(fnameValue + snameValue + "names exists")
    //         }
    //         else{
    //             console.log(fnameValue + snameValue + "names notexist")
    //         }
    //     }

    //     saveData()
    // }

    function getData(records){
        addPosts(records)
      
    }

    function done(response){  
        let res= response.json()
        res.then(getData)
    }

    function sendRequest(){
        let ref= fetch('http://localhost:3000/seller')
        ref.then(done) 
    }

    useEffect(()=>{sendRequest()}, [])

    return(
        <>  
        <div class="container"><h2>Sellers</h2></div>
            <div class="container bg-light p-3 rounded">
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <h5 class="card-header bg-dark text-light"><FontAwesomeIcon icon={faPen}/> Add a Seller</h5>
                        <div class="card-body">
                        
                            <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name:</label>
                                {/* <input type="text" class="form-control" id="fname" onChange = {setFname} placeholder="Enter First name" value={fnameValue}/> */}
                                <input type="text" class="form-control" id="fname"  placeholder="Enter First name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Second Name:</label>
                                {/* <input type="text" class="form-control" id="sname" onChange = {setSname}  placeholder="Enter Second name" value={snameValue}/> */}
                                <input type="text" class="form-control" id="sname" placeholder="Enter Second name"/>
                            </div>
                            <div class="form-group">
                                <label for="telephone">Telephone:</label>
                                <input type="text" class="form-control" id="phone" placeholder="Enter Telephone number"/>
                            </div>
                            <div class="form-group">
                                <label for="address">Address:</label>
                                <input type="text" class="form-control" id="address" placeholder="Enter address"/>
                            </div>
                            <div class="form-group">
                                <label for="postcode">Postcode:</label>
                                <input type="text" class="form-control" id="postcode" placeholder="Enter postcode"/>
                            </div>
                                <br/>
                                <button type="submit" class="w-100 btn btn-primary" onClick={saveData}>Add Seller</button>
                                <br/>
                                <Link to="/sellers"><button class="w-100 btn btn-light">Cancel</button></Link>
                            </form>      
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSeller