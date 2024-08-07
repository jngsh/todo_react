import {Contact} from './Contact.js';
import './ContactList.css';

function ContactList() {
    return (
        <div className="ContactList">
            <h2>Contacts 홈페이지</h2>
            <Contact />
        </div>
    );
}

export { ContactList };