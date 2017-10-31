import React from 'react'
import PropTypes from 'prop-types'

/**
 * All contacts with their details listed out in an ordered list.
 * @method ListContacts
 * @param {Array} contacts - All the contacts to list out.
 * @constructor
 */
function ListContacts (props) {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
        <li key={contact.id} className="contact-list-item">
          {/* Avatar. */}
          <div
            style={{ backgroundImage: `url(${contact.avatarURL})` }}
            className="contact-avatar"
          />

          {/* Contact details. */}
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>

          {/* Remove contact button. */}
          <button
            onClick={() => props.onDeleteContact(contact)}
            className="contact-remove"
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

// validate and type check props
ListContacts.propTypes = { contacts: PropTypes.array.isRequired }

export default ListContacts
