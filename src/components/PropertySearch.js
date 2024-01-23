import React, {useRef} from "react";
import Properties from "./Properties";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faHouse, faTree, faBuilding, faHouseCrack, faPoundSign, faMagnifyingGlass, faCircleDot} from '@fortawesome/free-solid-svg-icons'


function PropertySearch(props){

    let handleSearch =  props.handleSearch

    let typeRef = useRef()
    let priceRef = useRef()
    let bedroomRef = useRef()
    let gardenRef = useRef()
    let bathroomRef = useRef()
    let statusRef = useRef()

    function search(){
        handleSearch({
            type: typeRef.current.value,
            price: priceRef.current.value,
            bedroom: bedroomRef.current.value,
            garden: gardenRef.current.value,
            bathroom: bathroomRef.current.value,
            status: statusRef.current.value
        }
        );
    }

    return(
    <>

    <form>
        <div className="row">
            <div className="form-group col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="propertyType"><FontAwesomeIcon icon={faHouse}/> Type</label>
                <select className="form-select" ref={typeRef}>
                    <option value="ANY">Any</option>
                    <option value="DETACHED">Detached</option>
                    <option value="SEMI">Semi</option>
                    <option value="APARTMENT">Apartment</option>
                </select>
            </div>
            <div className="form-group col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="propertyPrice"><FontAwesomeIcon icon={faPoundSign}/> Price</label>
                <select className="form-select" ref={priceRef}>
                    <option value="0">Any</option>
                    <option value="50000">Up to 50000</option>
                    <option value="100000">Up to 100000</option>
                    <option value="200000">Up to 200000</option>
                    <option value="300000">Up to 300000</option>
                    <option value="400000">Up to 400000</option>
                </select>
            </div>
            <div className="form-group col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="numberOfBedrooms"><FontAwesomeIcon icon={faBed}/> Bedrooms</label>
                <select className="form-select" ref={bedroomRef}>
                    <option value="0">Any</option>
                    <option value="1">Minimum 1</option>
                    <option value="2">Minimum 2</option>
                    <option value="3">Minimum 3</option>
                    <option value="4">Minimum 4</option>
                    <option value="5">Minimum 5</option>
                </select>
            </div>
            <div className="form-group col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="numberOfBathrooms"><FontAwesomeIcon icon={faBath}/> Bathrooms</label>
                <select className="form-select" ref={bathroomRef}>
                    <option value="0">Any</option>
                    <option value="1">Minimum 1</option>
                    <option value="2">Minimum 2</option>
                    <option value="3">Minimum 3</option>
                </select>
            </div>
            <div className="form-group col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="numberOfGardens"><FontAwesomeIcon icon={faTree}/> Garden</label>
                <select className="form-select" ref={gardenRef}>
                    <option value="0">Any</option>
                    <option value="1">Yes</option>
                </select>
            </div>
            <div className="form-group col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="status"><FontAwesomeIcon icon={faCircleDot}/> Status</label>
                <select className="form-select" ref={statusRef}>
                    <option value="ANY">Any</option>
                    <option value="FOR SALE">FOR SALE</option>
                    <option value="SOLD">SOLD</option>
                </select>
            </div>
        </div>
        <div className="text-end">
            <br/>
            <button type="button" className="btn btn-success" onClick={search}>
                <i className="bi bi-search"></i>&nbsp;Find Properties
            </button>
        </div>
    </form>

    </>)
}

export default PropertySearch;