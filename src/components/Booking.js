import {useState, useEffect, useReducer} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";

import { faHouse, faPeopleGroup, faUser, faPen, faCalendarDay} from '@fortawesome/free-solid-svg-icons'


const Booking = () => {
    let [buyerList, setBuyerList] = useState([]);
  const {propertyId} = useParams();

    const reducedBookingsList = (state, action) => {
      //reduced properties list function used in useReducer
      switch (action.type) {
        case "SET": 
          return action.payload;
                  //returns the state as is 
        default:
          return state; 
      }
    };

    const [bookings, dispatch] = useReducer(reducedBookingsList, []);
    

      
  useEffect(() => {
 
    fetch("http://localhost:3000/booking")
      .then((response) => {
        if (!response.ok) {
          
          throw response.status;
          //GET request to get all the bookings and set this into state
        }
        return response.json();
      })
      .then((bookings) => {
        dispatch({ type: "SET", payload: bookings });
        //using a type of SET and the payload of all the bookings.
       
      })
      .catch((error) => {
        console.log(error);
        alert("Error has occurred getting the data");
      });
  }, []);





  return (<>
   
            <div class="col align-self-center">
            <div class="card shadow-sm">
            <h5 class="card-header bg-dark text-light"><FontAwesomeIcon icon={faPeopleGroup}/> List of Bookings</h5>
                <div class="card-body shadow-sm">
                <div class="table-responsive">
                    <table class="table table-striped text-muted">
                        <thead> 
                            <tr>
                                <th><FontAwesomeIcon icon={faUser}/>Buyer ID</th>
                                
                                <th><FontAwesomeIcon icon={faHouse}/> Property ID </th>
                                <th><FontAwesomeIcon icon={faCalendarDay}/> Date & Time of Booking</th>
                               
                                <th></th>
                            </tr>
                        </thead>
          <tbody>
             {

propertyId == null ? 

              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.buyerId}</td>
                  <td>{booking.propertyId}</td>
                  <td>{booking.time}</td>
                </tr>
              )) : bookings.filter(b => b.propertyId == propertyId).map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.buyerId}</td>
                  <td>{booking.propertyId}</td>
                  <td>{booking.time}</td>
                </tr>
              ))
              }
            
          </tbody>
        </table>
        </div>
      </div>  
      </div>
       
 </div>

  
  </>
  );
  
};

export default Booking;