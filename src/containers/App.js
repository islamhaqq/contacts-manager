import React, { Component } from 'react';

import ListContacts from './ListContacts'
import contacts from '../utils/dummy-contacts-data'

/**
 * The root component of the app.
 * @type {Component}
 */
class App extends Component {
  /**
   * ESNext class field designated as component state.
   * See TC39 proposal: https://github.com/tc39/proposal-class-fields.
   * @type {Object}
   */
  state = {
    /**rendered and listed outlisted and rendered out.
     * All theArrayacts to be listed and rendered out.
     * @type {Array}
     */
    contacts
  }

  /**
   * Deletes a contact.
   * @method deleteContact
   * @param  {Object} contactToDelete - The contact the user intends to delete.
   * @return {Void}
   */
  deleteContact = contactToDelete => {
    this.setState(currentState => ({
      // filter out the deleted contact
      contacts: currentState.contacts.filter(contact => contactToDelete.id !== contact.id)
    }))
  }

  render() {
    return (
      <div className="App">
        {/* List of contacts. */}
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App
