import {useState, useEffect} from "react"
import { useReducer } from 'react';
import PropertySearch from "./PropertySearch";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faHouse, faLocationDot, faTree, faBuilding, faHouseCrack, faDollarSign} from '@fortawesome/free-solid-svg-icons'

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

    function setBadgeColour(badgeStatus){
        let badgeColour = ""
        switch(badgeStatus){
            case "SOLD":
                badgeColour = "badge bg-warning"
                return badgeColour
            case "FOR SALE":
                badgeColour = "badge bg-success"
                return badgeColour
            default:
                return badgeColour
        }
    }

    function setPropertyTypeIcon(propertyType){
        let propertyIcon ={}
        switch(propertyType){
            case "DETACHED":
                propertyIcon = faHouse
                return propertyIcon
            case "APARTMENT":
                propertyIcon = faBuilding
                return propertyIcon
            case "SEMI":
                propertyIcon = faHouseCrack
                return propertyIcon
            default:
                return propertyIcon
        }
    }


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
            <div class="card shadow-sm">
            <h5 class="card-header bg-dark text-light">Property Search</h5>
                    <div class="card-body">
                       <PropertySearch handleSearch = {handleSearch}/>
                    </div>
            </div>
            <br/>
            <div class="row">
                {searchResult.map((post)=>(
                
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="d-flex justify-content-center">
                        <div>
                            <div class="card shadow-sm m-2" style={{"width" : "16rem"}}>
                            <div class="card-header bg-light text-dark">{post.address}</div>
                                <div class="card-body">
                                    <p class="card-text"><FontAwesomeIcon icon={setPropertyTypeIcon(post.type)}/> {post.type}</p>
                                    <p class="card-text"><FontAwesomeIcon icon={faBed}/> {post.bedroom}</p>
                                    <p class="card-text"><FontAwesomeIcon icon={faBath}/> {post.bathroom}</p>
                                    <p class="card-text"><FontAwesomeIcon icon={faTree}/> {post.garden ? "Yes" : "No"}</p>
                                    <p class="card-text"><span class={setBadgeColour(post.status)}>{post.status}</span></p>
                                    
                                </div>
                            <div class="card-footer bg-light text-dark"><b>£{post.price}</b>,<br/><span class="text-muted">Offers Over</span></div>
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
