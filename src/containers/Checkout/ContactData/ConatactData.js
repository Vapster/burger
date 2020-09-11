import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css';

class ContactData extends Component{
    render(){
        return(
        <div className={classes.ContactDetails}>
            <h1>Enter your contact details</h1>
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your EmailID" />
                <input type="text" name="street" placeholder="Your Street" />
                <input type="text" name="postal" placeholder="Your Postal Code" />
                <Button cls="Success" click>Submit</Button>
            </form>
        </div>
        )
    }
}

export default ContactData;