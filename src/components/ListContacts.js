import React from 'react'

/**
 * All contacts with their details listed out in an ordered list.
 * @method ListContacts
 * @param {Array} contacts - All the contacts to list out.
 * @constructor
 */
function ListContacts ({contacts}) {
  return (
    <ol className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-list-item">
          {/* Avatar. */}
          <div className="contact-avatar" style={{ backgroundImage: `url(${contact.avatarURL})` }} />

          {/* Contact details. */}
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>

          {/* Remove contact button. */}
          <button className="contact-remove">Remove</button>
        </li>
      ))}
    </ol>
  )
}

export default ListContacts
