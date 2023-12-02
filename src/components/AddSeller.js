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

        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input type="text" class="form-control" id="fname" placeholder="Enter First name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Second Name</label>
            <input type="text" class="form-control" id="sname" placeholder="Enter Second name"/>
        </div>
        <div class="form-group">
            <label for="telephone">Telephone</label>
            <input type="text" class="form-control" id="tel" placeholder="Enter Telephone number"/>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter address"/>
        </div>
        <div class="form-group">
            <label for="postcode">Postcode</label>
            <input type="text" class="form-control" id="postcode" placeholder="Enter postcode"/>
        </div>
       
        <button type="submit" class="btn btn-primary" onClick={saveData}>Save</button>
        </form>

        {/* First Name:<input type="text" id="fname"/>
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
            onClick={saveData}></input> */}
        </>
    )
}

export default AddSeller