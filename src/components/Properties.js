import {useState, useEffect} from "react"
import { useReducer } from 'react';
import PropertySearch from "./PropertySearch";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"

function Properties(){

    function reducedPropertiesList(state, action){
        switch (action.type) {
            case "SET":
                return action.payload;
            default:
                return state;
        }
    }

    let [listOfProperties, dispatch] = useReducer(reducedPropertiesList, []);
    let [searchResult, setSearchResult] = useState([]);

      function handleSearch(searchInput){
        setSearchResult(
          listOfProperties.filter(
            (property) =>
              (searchInput.type === "ANY" || property.type === searchInput.type) &&
              Number(property.bathroom) >= Number(searchInput.bathroom) &&
              Number(property.bedroom) >= Number(searchInput.bedroom) &&
              Number(property.garden) >= Number(searchInput.garden) &&
             (Number(searchInput.price) === 0 || Number(property.price) <= Number(searchInput.price))
          )
        )
      };


    function getData(properties){
            dispatch({ type: "SET", payload: properties });
            setSearchResult(properties);
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
            <div class="card">
            <h5 class="card-header bg-dark text-light">Property Search</h5>
                    <div class="card-body">
                       <PropertySearch handleSearch = {handleSearch}/>
                    </div>
            </div>
            <br/>
            <div class="row">
                {searchResult.map((post)=>(
                    <div class="col col-3">
                        <div class="m-2">
                            <div class="card" style={{"width" : "16rem"}}>
                                <div class="card-body">
                                    <p class="card-text">{post.address}</p>
                                    <p class="card-text"> {post.postcode}</p>
                                    <p class="card-text">Type: {post.type}</p>
                                    <p class="card-text">Bedrooms: {post.bedroom}</p>
                                    <p class="card-text">Bathrooms: {post.bathroom}</p>
                                    <p class="card-text">Garden: {post.garden ? "Yes" : "No"}</p>
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
