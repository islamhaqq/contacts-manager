import React, { Component } from 'react';

import ListContacts from './ListContacts'
import SearchBox from '../components/SearchBox'
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
    initialContacts: contacts,
    filteredContacts: contacts,
    searchQuery: ''
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
      initialContacts: currentState.initialContacts.filter(contact => contactToDelete.id !== contact.id),
      filteredContacts: currentState.initialContacts.filter(contact => contactToDelete.id !== contact.id),
      searchQuery: ''
    }))
  }

  queryContacts = query => {
    this.setState(currentState => ({
      searchQuery: query,
      filteredContacts: currentState.initialContacts.filter(contact => contact.name.toLowerCase().includes(query))
    }))
  }

  render() {
    return (
      <div className="App">
        {/* A search query field that allows users to search for contacts. */}
        <SearchBox
          onQuery={this.queryContacts}
          value={this.state.searchQuery}
        />

        {/* List of contacts. */}
        <ListContacts
          contacts={this.state.filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App
