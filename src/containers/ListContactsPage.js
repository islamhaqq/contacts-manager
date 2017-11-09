import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ListContacts from '../components/ListContacts';
import SearchBox from '../components/SearchBox';

class ListContactsPage extends Component {
  /**
   * All the props this container accepts.
   * @type {Object}
   */
  static propTypes = {
    /**
     * A passed callback that updates the page displaying in the main view.
     * @type {Function}
     */
    allContacts: PropTypes.array.isRequired,
    /**
     * A passed callback that updates the page displaying in the main view.
     * @type {Function}
     */
    onDeleteContact: PropTypes.func.isRequired,
    /**
     * A passed callback that updates the page displaying in the main view.
     * Accepts page name as a parameter such as 'list' or 'create'
     * @type {Function}
     */
    onNavigate: PropTypes.func.isRequired,
  };

  /**
   * ESNext class field designated as component state.
   * See TC39 proposal: https://github.com/tc39/proposal-class-fields.
   * @type {Object}
   */
  state = {
    /**
     * What the user input in the search box in an attempt to filter contacts.
     * @type {String}
     */
    searchQuery: '',
  };

  /**
   * Update the input in the search box.
   * @method updateSearchQuery
   * @param  {String} query - The new search box input.
   * @return {Void}
   */
  updateSearchQuery = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    /**
     * The contacts to display in a list that are being filtered via the
     * search box.
     * @type {Array}
     */
    let filteredContacts;

    // if user's typing in the search box, look for contact names that match it
    if (this.state.searchQuery) {
      const matchSearchQuery = new RegExp(
        escapeRegExp(this.state.searchQuery),
        'i',
      );

      filteredContacts = this.props.allContacts.filter(contact =>
        matchSearchQuery.test(contact.name),
      );
    } else {
      // don't filter if searchbox empty
      filteredContacts = this.props.allContacts;
    }

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          {/* A search query field that allows users to search for contacts. */}
          <SearchBox
            onQuery={this.updateSearchQuery}
            value={this.state.searchQuery}
          />

          {/* A link that sends to create contacts page. */}
          <Link
            onClick={() => this.props.onNavigate('create')}
            to="/create"
            className="add-contact"
          >
            Add Contact
          </Link>
        </div>

        {/* display how many contacts showing out of total when filtered */}
        {filteredContacts.length !== this.props.allContacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {filteredContacts.length} of{' '}
              {this.props.allContacts.length} contacts
            </span>
            <button onClick={() => this.updateSearchQuery('')}>Show All</button>
          </div>
        )}

        {/* List of contacts. */}
        <ListContacts
          contacts={filteredContacts}
          onDeleteContact={this.props.onDeleteContact}
          alphabetize
        />
      </div>
    );
  }
}

export default ListContactsPage;
