import {useState, useEffect} from "react"
import { useReducer } from 'react';
import PropertySearch from "./PropertySearch";
import {BrowserRouter,Routes,Route, Link, useParams, useNavigate} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { faUserCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faBath, faBed, faHouse, faLocationDot, faTree, faBuilding, faHouseCrack, faDollarSign, faMagnifyingGlass, faPoundSign, faPen, faCircleDot} from '@fortawesome/free-solid-svg-icons'
import PropertyStatus from "./PropertyStatus";

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
   
    let [propID, withdrawProperty] = useState([""]);

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  
    function handleSearch(searchInput){
        setSearchResult(
          listOfProperties.filter(
            (property) =>
              (searchInput.type === "ANY" || property.type === searchInput.type) &&
              (searchInput.status === "ANY" || property.status === searchInput.status) &&
              Number(property.bathroom) >= Number(searchInput.bathroom) &&
              Number(property.bedroom) >= Number(searchInput.bedroom) &&
              Number(property.garden) >= Number(searchInput.garden) &&
             (Number(searchInput.price) === 0 || Number(property.price) <= Number(searchInput.price))
          )
        )
        setShow(!show);
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
            case "WITHDRAWN":
                badgeColour = "badge bg-secondary"
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

        if(propID ==""){
            ref= fetch('http://localhost:3000/property')
            ref.then(done) 
            }else{

            ref= fetch(`http://localhost:3000/property/${propID}`)
           
            let property={
                ...ref,
                status: "WITHDRAWN"
            };
           

            console.log(property)
            
            ref=fetch(`http://localhost:3000/property/${propID}`,{
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(property)
            })
           
          }
         
        withdrawProperty("")

     }
     
     
     function handleCloseProperty() {
        fetch(`http://localhost:3000/property}`, {
          method: "GET",
        }).then((response) => {
          
          setShow1(!show1);
          navigate("/properties");
      
        });
      }
     

    function actvDel(ref){
        withdrawProperty(ref.target.id)
    }

    useEffect(()=>{sendRequest()}, [propID])
    return(
    <>
      <div className="button-container">
        <Link to={"/properties"} className="text-decoration-none">
          {/* Bootstrap modal to search property */}
          <Button
                          className="16rem"
                          variant="success" onClick={handleShow}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /> Property Search
          </Button>
        {show }
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title><h5 ><FontAwesomeIcon icon={faMagnifyingGlass}/>  Property Search</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <PropertySearch handleSearch = {handleSearch}/>
             
            </Modal.Body>
          </Modal>
        </Link>
      </div>

    <div  class="container"><h2>Properties</h2></div>
        <div class="container bg-light p-3 rounded">
            <div class="card">
                    <h5 class="card-header bg-dark text-light"> <FontAwesomeIcon icon={faPen}/> Add a Property</h5>
                    <div class="card-body">
                        <div class="d-flex flex-row-reverse">
                            <Link to="/addproperty"><button class="btn btn-success">Add Property</button></Link>
                        </div>
                    </div>
            </div>
            <br></br>
            <br/>
            <div className="row">
                {searchResult.map((post)=>(
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="card shadow-sm m-2" style={{"width" : "16rem"}}>
                            <div className="card-header bg-light text-dark"><b>
                              { 
                            post.status == "SOLD"  ?( 
                       
                              <img
                              alt="Img"
                             
                              className="img-fluid object-cover"
                              style={{filter : "grayscale(100)"}}
                              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            />
                            )
                            
                           :
                            (
                                <img
                alt="Img"
                id="img"
                className="img-fluid object-cover"
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            )}
              {post.address},</b><br/>{post.postcode}</div>
                                <div className="card-body">
                                <Link to={`/properties`} style={{"color": "#000000"}}
                    className="text-decoration-none " onClick={handleShow1}
                  >
                                    <p className="card-text"><FontAwesomeIcon icon={setPropertyTypeIcon(post.type)}/> {post.type}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faBed}/> {post.bedroom}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faBath}/> {post.bathroom}</p>
                                    <p classNamr="card-text"><FontAwesomeIcon icon={faTree}/> {post.garden ? "Yes" : "No"}</p>
                                    <p className="card-text"><span class={setBadgeColour(post.status)}>
                                    {post.status}</span></p>
                                    {/* <p class="card-text"><input type="checkbox" id={post.id} onClick={actvDel} value="WITHDRAWN"></input></p> */}

                                     <Modal show={show1} onHide={handleClose1}>
            <Modal.Header>
              <Modal.Title><h5 ><FontAwesomeIcon icon={faMagnifyingGlass}/>  Property {post.id}</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="card shadow-sm m-2" style={{"width" : "16rem"}}>
                            <div className="card-header bg-light text-dark"><b>{post.address},</b><br/>{post.postcode}</div>
                                <div className="card-body">
            <p className="card-text"><FontAwesomeIcon icon={setPropertyTypeIcon(post.type)}/> {post.type}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faBed}/> {post.bedroom}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faBath}/> {post.bathroom}</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faTree}/> {post.garden ? "Yes" : "No"}</p>
                                    <p className="card-text"><span class={setBadgeColour(post.status)}>{post.status}</span></p>
             </div></div>
            </Modal.Body>
            <Modal.Footer>
            
          <Button variant="secondary" onClick={handleCloseProperty}>
            Close
          </Button>
        
        </Modal.Footer>
          </Modal>
                                    </Link>
                                </div>
                            <div class="card-footer bg-light text-dark"><b>£{post.price}</b><br/></div>
                           

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
