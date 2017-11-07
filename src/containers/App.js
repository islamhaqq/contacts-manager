import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'

import ListContacts from '../components/ListContacts'
import SearchBox from '../components/SearchBox'
import * as ContactsAPI from '../utils/ContactsAPI'
import CreateContact from './CreateContact'

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
    allContacts: [],
    /**
     * What the user input in the search box in an attempt to filter contacts.
     * @type {String}
     */
    searchQuery: '',
    page: 'list' // ['list', 'create']
  }

  async componentDidMount () {
    try {
      const allContacts = await ContactsAPI.getAll()
      this.setState({ allContacts })
    } catch (error) {
      throw new Error(error)
    }
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
    /**
     * The contacts to display in a list that are being filtered via the
     * search box.
     * @type {RegExp}
     */
    let filteredContacts

    // if user's typing in the search box, look for contact names that match it
    if (this.state.searchQuery) {
      const matchSearchQuery = new RegExp(escapeRegExp(this.state.searchQuery), 'i')

      filteredContacts = this.state.allContacts.filter(contact => matchSearchQuery.test(contact.name))
    } else {
      filteredContacts = this.state.allContacts
    }

    return (
      <div className="App">
        {this.state.page === 'create' && <CreateContact />}

        {/* A search query field that allows users to search for contacts. */}
        <SearchBox
          onQuery={this.updateSearchQuery}
          value={this.state.searchQuery}
        />

        {/* display how many contacts showing out of total when filtered */}
        {filteredContacts.length !== this.state.allContacts.length &&
          <div className="showing-contacts">
            <span>
              Now showing {filteredContacts.length} of {this.state.allContacts.length} contacts
            </span>
            <button onClick={() => this.updateSearchQuery('')}>
              Show All
            </button>
          </div>
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
