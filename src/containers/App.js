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
    /** All the contacts to be rendered and listed out.
     * @type {Array}
     */
    allContacts: contacts,
    /**
     * What the user input in the search box in an attempt to filter contacts.
     * @type {String}
     */
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
      searchQuery: ''
    }))
  }

  /**
   * Update the input in the search box.
   * @method updateSearchQuery
   * @param  {String} query - The new search box input.
   * @return {Void}
   */
  updateSearchQuery = query => {
    this.setState({
      searchQuery: query
    })
  }

  render() {
    const matchSearchQuery = new RegExp(escapeRegExp(this.state.searchQuery), 'i')

    const filteredContacts = this.state.allContacts.filter(contact => matchSearchQuery.test(contact.name))

    return (
      <div className="App">
        {/* A search query field that allows users to search for contacts. */}
        <SearchBox
          onQuery={this.updateSearchQuery}
          value={this.state.searchQuery}
        />

        {/* display how many contacts showing out of total when filtered */}
        {filteredContacts.length !== this.state.allContacts.length &&
          (
            <div className="showing-contacts">
              <span>
                Now showing {filteredContacts.length} of {this.state.allContacts.length} contacts
              </span>
              <button onClick={() => this.updateSearchQuery('')}>
                Show All
              </button>
            </div>
          )
        }

        {/* List of contacts. */}
        <ListContacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
          alphabetize
        />
      </div>
    )
  }
}

export default App
