import { createStore } from "redux";

//const store = createStore()

const initialState = [
    {
        id:0,
        name:"Abc",
        number:1234567899,
        email:"abc@gmail.com",
    },
    {
        id:1,
        name:"def",
        number:9876543211,
        email:"def@gmail.com"
    }
]

//reducer
const ContactList  = (state = initialState,action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload:contact);
            state=updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContact = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContact ;
            return state;
            
        default:
            return state;
    }
}

export default ContactList