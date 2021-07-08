import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route, } from 'react-router-dom'

function Home() {

    const contacts = useSelector(state => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({type:"DELETE_CONTACT",payload:id});
    }

    return (
        <div className="container">
            <div className="row">
                <div className="text-right col-md-12 my-5">
                   
                        <Link to="/add" className="btn btn-outline-dark my-10" >Create Contact</Link>
                        {/* <Switch><Route path="/" component={Home}></Route></Switch> */}
                    
                    <div>
                        <table className="table table-hover">
                            <thead className="text-white bg-dark text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact,id) => (
                                        <tr key={id}>
                                            <td>{id+1}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.number}</td>
                                            <td>
                                                <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                                <button onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger">Delete</button>
                                            
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
