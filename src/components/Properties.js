import {useState, useEffect} from "react"

function Properties(){

    let [posts, addPosts]=useState([])

    function getData(records){
        addPosts(records)
    }

    function done(response){  
        let res= response.json()
        res.then(getData)
    }
    
    function sendRequest(){
        let ref
        ref= fetch('http://localhost:3000/property')
        ref.then(done) 
   }

    useEffect(()=>{sendRequest()}, [])

    return(
    <>
    <div  class="container"><h2>Properties</h2></div>
            <div class="container bg-light p-3 rounded">
            <div  class="container bg-white p-2 rounded">
                <select>
                    <option value="sold">SOLD</option>
                    <option value="on sale">ON SALE</option>
                </select>
                </div>
                <div class="row">
                {posts.map((post)=>(
                    <div class="col col-3">
                        <div class="m-2">
                            <div class="card" style={{"width" : "16rem"}}>
                                <div class="card-body">
                                    <p class="card-text">{post.address}</p>
                                    <p class="card-text"> {post.postcode}</p>
                                    <p class="card-text">Type: {post.type}</p>
                                    <p class="card-text">Bedrooms: {post.bedroom}</p>
                                    <p class="card-text">Bathrooms: {post.bathroom}</p>
                                    <p class="card-text">Status: {post.status}</p>
                                </div>
                        </div>
                        </div>
                    </div>
                     )
                     )}
                </div>
            </div>
    </>)
}

export default Properties