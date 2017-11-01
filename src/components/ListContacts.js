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

/**
 * Type checking and validation for props passed to this component. Also serves
 * as documentation for this component's API.
 * @type {Object}
 */
ListContacts.propTypes = {
  /**
   * An array of contact objects that will be iterated through to display
   * all contacts.
   * @type {Array}
   */
  contacts: PropTypes.array.isRequired,
  /**
   * A callback function sent from the parent to be called whenever the user
   * requests the contact in question to be deleted.
   * @type {Function}
   */
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts
