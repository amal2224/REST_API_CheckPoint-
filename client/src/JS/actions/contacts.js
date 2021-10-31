import {GET_ALL_CONTACT,GET_CONTACT_LOAD,GET_CONTACT_FAIL,GET_CONTACT} from "../constans/contacts"
import axios from "axios"

export const getAllContacts=()=>async(dispatch)=>{
    // case of succ
    dispatch({type:GET_CONTACT_LOAD});
    try { //try to connect to the DATABASE
        let result=await axios.get("/api/contact");
        // result => data
        // call the reducer and send an object({type,data})
        dispatch({type:GET_ALL_CONTACT , payload:result.data}); //payload:{msg,listContact}
    } catch (error) {
        // in case of faild (err)
        dispatch({type:GET_CONTACT_FAIL});
    }
};

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        axios.delete(`/api/contact/${id}`)
        // afficher la nouvelle list aprés la suppression
        dispatch(getAllContacts());
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

export const addContact=(contact,history) => async(dispatch)=>{
    try {
        await axios.post("/api/contact/",contact);
        //  in case of succ go to list contact
        history.push("/contacts")
        dispatch(getAllContacts())
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

// edit
export const getContact=(id)=>async(dispatch)=>{
// chaque fois tu viens to get data :load ,
// maysir l affichage mta3 data ken ma load tetna7a
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result= await axios.get(`/api/contact/${id}`);
        dispatch({type:GET_CONTACT, payload:result.data}) //{msg,contact}
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

export const editContact=(id,contact,history)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/${id}`,contact);
        dispatch(getAllContacts());
        history.push("/contacts")
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL});
    }
};
// ==> dispatch({type,payload}) ==>
// return{
//         type:GET_ALL_CONTACT,
//         payload:[] // <-- bech n7otou fih all the contacts from DB
//     }

// **********chaque type(action)il va changer quelque chose au niveau de state global