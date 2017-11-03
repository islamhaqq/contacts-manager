import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'

import ListContacts from '../components/ListContacts'
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
    allContacts: contacts,
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
      allContacts: currentState.allContacts.filter(contact => contactToDelete.id !== contact.id),
      filteredContacts: currentState.allContacts.filter(contact => contactToDelete.id !== contact.id),
      searchQuery: ''
    }))
  }

  queryContacts = query => {
    const matchSearchQuery = new RegExp(escapeRegExp(query), 'i')

    this.setState(currentState => ({
      searchQuery: query,
      filteredContacts: currentState.allContacts.filter(contact => matchSearchQuery.test(contact.name))
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
          alphabetize
        />
      </div>
    )
  }
}

export default App
