import React, {useRef} from "react";


function PropertyStatus(props){

    let handleStatus =  props.handleStatus
    
    let statusRef = useRef()

    function status(){
        handleStatus({
            statusRef: statusRef.current.id
        }
        );
    }

    return(
    <>
        <button id="WITHDRAW" onClick={status} ref={statusRef}>Withdraw</button>
    </>
    )
}

export default PropertyStatus