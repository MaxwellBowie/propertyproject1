import {useState, useEffect} from "react"
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faLocationDot, faPerson, faCircleMinus, faPeopleGroup, faUser, faPen} from '@fortawesome/free-solid-svg-icons'

function Buyers(){

    let [posts, addPosts]=useState([])
    let [selID, deleteSeller] = useState([""])

    function getData(records){
        addPosts(records)
    }

    function done(response){  
        let res= response.json()
        res.then(getData)
    }
    
    function sendRequest(){
        let ref
        console.log({selID})
        if(selID ==""){
            ref= fetch('http://localhost:3000/buyer')
            ref.then(done) 
        }else{
            deleteData()
            ref = fetch('http://localhost:3000/buyer')
            ref.then(done)
        }

        deleteSeller("")
   }

   function deleteData(){
    let ref=fetch(`http://localhost:3000/buyer/${selID}`,{
        method:"Delete",
    })
    }

    function actvDel(ref){
        deleteSeller(ref.target.id)
    }

    useEffect(()=>{sendRequest()}, [selID])

    return(
        <>
        <div  class="container"> <h2>Buyers</h2></div>
            <div class="container bg-light p-3 rounded">
            <div class="card">
                    <h5 class="card-header bg-dark text-light"><FontAwesomeIcon icon={faPen}/> Add a Buyer</h5>
                    <div class="card-body">
                        <div class="d-flex flex-row-reverse">
                            <Link to="/addbuyer"><button class="btn btn-success">Add Buyer</button></Link>
                        </div>
                    </div>
            </div>
        <br/>
        <div class="row">
            <div class="col align-self-center">
            <div class="card shadow-sm">
            <h5 class="card-header bg-dark text-light"><FontAwesomeIcon icon={faPeopleGroup}/> List of Buyers</h5>
                <div class="card-body shadow-sm">
                <div class="table-responsive">
                    <table class="table table-striped text-muted">
                        <thead> 
                            <tr>
                                <th><FontAwesomeIcon icon={faUser}/> Firstname</th>
                                <th>Surname</th>
                                <th><FontAwesomeIcon icon={faPhone}/> Phone</th>
                                <th><FontAwesomeIcon icon={faLocationDot}/> Address</th>
                                <th>Postcode</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post)=>(
                            <>
                            <tr>
                                    <td>{post.firstName}</td>
                                    <td>{post.surname}</td>
                                    <td>{post.phone}</td>
                                    <td>{post.address}</td>
                                    <td>{post.postcode}</td>
                                    <td><button class="btn btn-danger"id={post.id} onClick={actvDel}>Delete</button></td>
                            </tr>
                            </>
                            )
                            )}
                        </tbody>
                    </table>
                    </div>
                 </div>   
                 </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Buyers