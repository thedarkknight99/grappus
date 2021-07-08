import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddContact() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumbers] = useState("");

    const contacts = useSelector(state => state); //get data here n return state 
    const dispatch = useDispatch();
    const history = useHistory();

    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

        if(!email || !number || !name){
            alert("Fill all required fields")
        }
    
    

    if(checkEmail){
        //return toast.error("This email already exist")
        alert("This email already exist")
    }
    if(checkNumber){
        //return toast.error("This Number already exist")
        alert("This Number already exist")
    }
    const data = {
        id:contacts[contacts.length-1].id + 1,
        name,email,number,
    }
    console.log(data)
   dispatch({type:"ADD_CONTACT", payload:data})
       toast.success("success")
       //alert("success");
       history.push("/")

    }
    return (
        <div className="container">
            <h1 className="display-3 text-center my-4">Create Contact</h1>
            <div className="row">
                
            </div>
            <div className="col-md-6 mx-auto p-5 shadow">
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        <input type="text" placeholder="Name" className="form-control mt-2" 
                        value={name} onChange={e => setName(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control mt-2" 
                        value={email} onChange={e => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Mobile" className="form-control mt-2" 
                        value={number} onChange={e => setNumbers(e.currentTarget.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-block btn-dark mt-2" />
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default AddContact
