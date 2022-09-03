import React from 'react'

const ContactRow = (props) => {
    return (
        <tr key={props.id}>
            <td><img style={{ height: '12vh' }} src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity.toFixed(2)}</td>
            <td>{props.wonOscar ? '🏆' : ''}</td>
            <td>{props.wonEmmy ? '🏆' : ''}</td>
            <td><button onClick={() => { props.deleteContact(props.id) }}>DELETE</button></td>
        </tr>
    )
}

export default ContactRow