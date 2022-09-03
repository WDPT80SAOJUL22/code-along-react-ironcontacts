import { useState } from 'react';
import contactsData from '../contacts.json'  
import ContactRow from './ContactRow';
import ContactTable from './ContactTable';

// const initialArray = []

// for (let i= 0; i < 5;i += 1){
//   initialArray.push(contactsData[i])
// }

const initialArray = contactsData.slice(0, 5)

const ContactList = () => {

    const [contacts, setContacts] = useState(initialArray)

    const addRandomContact = () => {
      let randomIndex = Math.floor(Math.random() * contactsData.length)
      let randomContact =  contactsData[randomIndex]
  
      for (let contact of contacts){
        if(contact.id === randomContact.id){
          console.log('repetido')
          return addRandomContact()
        }
      }
      const newContacts = [randomContact, ...contacts]
      setContacts(newContacts)
    }
  
    const sortContacts = (field) => {
      let updatedContacts = []
      if (field === 'name'){
        updatedContacts = [...contacts].sort((a, b) => a.name > b.name ? 1 : -1)
      } else if (field === 'popularity') {
        updatedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
      }
      setContacts(updatedContacts)
    } 
  
    const deleteContact = (id) => {
      const updatedContacts = contacts.filter((contact) => contact.id !== id)
      setContacts(updatedContacts)
    }
  
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={() => addRandomContact()}>Add Random Contact</button>
        <button onClick={() => sortContacts('name')}>Sort By Name</button>
        <button onClick={() => sortContacts('popularity')}>Sort By Popularity</button>
        <ContactTable
            contacts={contacts}
            deleteContact={deleteContact}
        />
      </div>
      );
}

export default ContactList