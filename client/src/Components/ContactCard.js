import React from 'react'
import './ContactCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteContact, getContact } from '../JS/actions/contacts';
import { Link } from 'react-router-dom';

const ContactCard = ({contact}) => {
    const dispatch= useDispatch();
    // delete fn
    const handleClick=()=>{
        let result = window.confirm("Are you sure to delete that ?");
        if (result){
            dispatch(deleteContact(contact._id));
        }
    }

    return (
    <div className="container">
        <div className="card">
            <div className="card-head">
            <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
            alt="Username"
            />
        </div>
        <div className="card-body">
            <div>
            <span className="Student-name">
            {contact.name} <b>{contact.lastName || ""}</b>
            <span className="badge">PRO</span>
            </span>
            <span className="username">{contact.email}</span>
        </div>
        <div className="student-infos">
            <span className="Student-description">
            <p>
                {contact.phone}
            </p>
            </span>
        
        
        </div>
        {/* icone */}
        <div>
            <Link to={`/edit/${contact._id}`}> 
                <EditIcon onClick={()=> dispatch(getContact(contact._id))} 
                /> 
            </Link>
            <DeleteIcon onClick={handleClick}/>
        </div>
        </div>
    </div>
    </div>
    )
}
export default ContactCard