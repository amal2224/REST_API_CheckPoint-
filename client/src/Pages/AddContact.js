// à la fois addContact and EditContact selon l path eli mawjoud fi app.js
import { TextField , Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useHistory, useParams } from 'react-router';
import { addContact, getContact ,editContact} from '../JS/actions/contacts';

const AddContact = () => {
    // bech n5abiw the new data fi state 
    const [contact, setContact] = useState({});
    // to get the one  contact from reducers
    const editContactState= useSelector(state=>state.contactReducer.contact);
    const [edit,setEdit]=useState(false);
    const history= useHistory();
    const dispatch = useDispatch();

    // edit --> if you have params in path ; awel ma tebda te5dem l page 
    const params=useParams();
    useEffect(() => {
        if(params.id){
            // en fait l action --> get one contact , c'est pour ca en va créer un type getcontact 
            // --> mana7ki 3la type ken mana7ki 3la modification
            // --> une fois 3andek parametre fil path eb3ath jib l action 
        /* dispatch(getContact(params.id));// <--n7otha fil btn edit contact*/
            setEdit(true);
        }else{
            //en cas ou !params.id => lorsque ena fil edit w cliqit 3la add lezem les input yefr8ou 
            setEdit(false);
        }
        edit 
        ? setContact(editContactState) 
        : setContact({name:"", lastName:"" ,email:"" , phone:"",adresse:""  }); //if edit true , setContact te5ou les variable edotContatct , sinn te5ou l objet vide
    }, [edit,editContactState , params.id]) //kif yetbadel editContact ou edit badeli fi state + que params.id leur role c'est de vider les inpute en cas ou vous cliqy=uer sur edit puit sur la btn addContact

    // **** save les info du formulaire dans un state
    const handleChange=(e)=>{
        setContact({...contact,/*key:value*/ [e.target.name]:e.target.value});
    }
    // **** send an action (dispatch)---> nab3ath avec l'action notre state contact pour l'enregistrer dans la DB
    const handleContact=()=>{
    if(contact.name && contact.email && contact.phone){
        if(edit){
            dispatch(editContact(params.id,contact,history));
        }else{
            dispatch(addContact(contact,history));
        }
        }else{
        alert("name , email and phone must be required");
        }
    };
    return (
        <form>
            <TextField
                id="outlined-number"
                label="Name *"
                type="text"
                InputLabelProps={{
                shrink: true,
                }}
                name="name" // il faut la meme nom qui avez dans la db (models>Contact.js)
                value={contact.name} //utiliser au niveau edut --> pour que les inpute rempli avec le contenu de user a modifier
                onChange={handleChange}
            />
            <TextField
                id="outlined-number"
                label="Last Name"
                type="text"
                InputLabelProps={{
                shrink: true,
                }}
                name="lastName"
                value={contact.lastName}
                onChange={handleChange}
            />
            <TextField
                id="outlined-number"
                label="Email *"
                type="text"
                InputLabelProps={{
                shrink: true,
                }}
                value={contact.email}
                name="email"
                onChange={handleChange}
            />
            <TextField
                id="outlined-number"
                label="Phone number*"
                type="number"
                InputLabelProps={{
                shrink: true,
                }}
                value={contact.phone}
                name="phone"
                onChange={handleChange}
            />
            <TextField
                id="outlined-number"
                label="Adresse"
                type="text"
                InputLabelProps={{
                shrink: true,
                }}
                value={contact.adresse}
                name="adresse"
                onChange={handleChange}
            />
            <Button onClick={handleContact}>{edit?"EDIT":"SAVE"}</Button>
        </form>
    )
}
export default AddContact