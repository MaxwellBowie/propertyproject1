
import {useState, useEffect} from "react"
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"

function Sellers(){

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
            ref= fetch('http://localhost:3000/seller')
            ref.then(done) 
        }else{
            deleteData()
            ref = fetch('http://localhost:3000/seller')
            ref.then(done)
        }
        deleteSeller("")
   }

   function deleteData(){
    let ref=fetch(`http://localhost:3000/seller/${selID}`,{
        method:"Delete",
    })
        ref.then((x)=> alert("delete"))
    }

    function actvDel(ref){
        deleteSeller(ref.target.id)
    }

   useEffect(()=>{sendRequest()}, [selID])

    return(
        <>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Surname</th>
                                <th></th>
                            </tr>
                        </thead>
                            {posts.map((post)=>(
                            <>
                            <tr>
                                    <td>{post.firstName}</td>
                                    <td>{post.surname}</td>
                                    <td><button id={post.id} onClick={actvDel}>Delete</button></td>
                            </tr>
                            </>
                            )
                            )}
                    </table>
                    <div>
                        <Link to="/addseller"><button>Add Seller</button></Link>
                    </div>
            </div>
        </>
    )
}

export default Sellers