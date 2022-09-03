import contactsData from './contacts.json'

import "./App.css";
import { useState } from 'react';

// const initialArray = []

// for (let i= 0; i < 5;i += 1){
//   initialArray.push(contactsData[i])
// }

const initialArray = contactsData.slice(0, 5)

const App = () => {

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

    // let updatedContacts = [...contacts]
    // const index = updatedContacts.findIndex((contacts) => contacts.id === id)
    // updatedContacts.splice(index, 1)
    // setContacts(updatedContacts)

    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContacts)
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      {/* <button onClick={addRandomContact}>Add Random Contact</button> */}
      <button onClick={() => addRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortContacts('name')}>Sort By Name</button>
      <button onClick={() => sortContacts('popularity')}>Sort By Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img style={{height: '12vh'}} src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy? '🏆' : ''}</td>
                <td><button onClick={() => {deleteContact(contact.id)}}>DELETE</button></td>
              </tr>      
            )
          } )}
          {/* <tr>
            <td><img src={contacts[0].pictureUrl} alt={contacts[0].name}/></td>
            <td>{contacts[0].name}</td>
            <td>{contacts[0].popularity}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
    );
}
export default App;