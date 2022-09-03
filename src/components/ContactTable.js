import React from 'react'
import ContactRow from './ContactRow'

const ContactTable = ({contacts, deleteContact}) => {
  return (
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
                <ContactRow
                    key = {contact.id}
                    // id = {contact.id}
                    // name = {contact.name}
                    // pictureUr = {contact.pictureUrl}
                    // popularity = {contact.popularity}
                    // wonOscar = {contact.wonOscar}
                    // wonEmmy = {contact.wonEmmy}
                    {...contact}
                    deleteContact = {deleteContact}
                />   
              )
            } )}
          </tbody>
        </table>
  )
}

export default ContactTable