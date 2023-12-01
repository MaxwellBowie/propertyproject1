import { useNavigate } from "react-router-dom"

function AddSeller(){

    let navigate=useNavigate()

    function saveData(){
        let seller={
            "firstName":document.getElementById("fname").value,
            "surname":document.getElementById("sname").value,
            "tel":document.getElementById("tel").value,
            "address":document.getElementById("address").value,
            "postcode":document.getElementById("postcode").value
        }

        let ref=fetch("http://localhost:3000/seller",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(seller)
        })
        ref.then((x)=> alert("POST request done"))

        navigate("/sellers")
    }

    return(
        <>
        First Name:<input type="text" id="fname"/>
        <br/>
        Surname:<input type="text" id="sname"/>
        <br/>
        Telephone:<input type="text" id="tel"/>
        <br/>
        Address:<input type="text" id="address"/>
        <br/>
        Postcode:<input type="text" id="postcode"/>
        <br/>
 
        <input 
            type="button"
            id="btn1"
            value="Save"
            onClick={saveData}></input>
        </>
    )
}

export default AddSeller