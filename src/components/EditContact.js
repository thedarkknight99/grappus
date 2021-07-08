import React, { useEffect,useState } from 'react';
import { useSelector,useDispatch, } from 'react-redux';
import { BrowserRouter as Router, Switch, Link, Route,useParams,useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditContact() {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const[name,setName] = useState("");
        const[email,setEmail] = useState("");
        const[number,setNumbers] = useState("");

    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if(currentContact){
            setName(currentContact.name);
            setNumbers(currentContact.number);
            setEmail(currentContact.email);
        }
        

    },[currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email)
        const checkNumber = contacts.find(contact => contact.id !== parseInt(number) && contact.number === parseInt(number))

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
        id: parseInt(id),
        name,email,number,
    }
    console.log(data)
   dispatch({type:"UPDATE_CONTACT", payload:data})
       toast.success("success")
       //alert("success");
       history.push("/");

    };

    return (
        <div className="container">
            {currentContact ? (

           <>
            <h1 className="display-3 text-center my-4">Edit Contact {id}</h1>
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
                        <input type="submit" value="Update" className="btn btn-dark mt-2 ml-3" />
                        
                            <Link to="/" className="btn btn-danger ml-3 mt-2">Cancel</Link>
                        
                    </div>

                </form>
            </div>
            </>
            ):(
                <h1 className="display-3 my-5 text-center">Contact id {id} is not exist</h1>
            )}
            
            
        </div>
    )
}

export default EditContact
