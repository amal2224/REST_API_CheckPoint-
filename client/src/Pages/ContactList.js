// awel ma tebda te5dem bech tjibli data (elle va envoyer une evenement )
// dispatch action
import React , {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllContacts} from '../JS/actions/contacts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ContactCard from "../Components/ContactCard"

const ContactList = () => {
    // get the three G.state from contactReducer
    const contacts=useSelector(state => state.contactReducer.contacts);
    const isLoad=useSelector(state => state.contactReducer.isLoad);
    const isError=useSelector(state => state.contactReducer.isError);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllContacts())
    }, [])
    return (
        <div>
            {/* test */}
            {isLoad ?(
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            ): isError ?(
                <h4>Can not get the data</h4>
            ): !contacts.length ? ( // contacts.length==0
                <h4>There is no contact to show</h4>
            ): (
                <div className="contactList">{contacts.map(el => <ContactCard contact={el} key={el._id}/>)}</div>
            )}
        </div>
    );
};

export default ContactList