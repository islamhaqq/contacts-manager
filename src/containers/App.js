import React, { Component } from 'react';

import * as ContactsAPI from '../utils/ContactsAPI';
import CreateContactPage from './CreateContactPage';
import ListContactsPage from './ListContactsPage';
import Loading from '../components/Loading';

/**
 * The root component of the app.
 * @type {Component}
 */
class App extends Component {
  /**
   * The highest level root component state.
   * @type {Object}
   */
  state = {
    /** All the contacts to be rendered and listed out.
     * @type {Array}
     */
    allContacts: [],
    isLoading: true,
    /**
     * The current page displaying in the main view.
     * @type {String}
     */
    page: 'list', // ['list', 'create']
  };

  async componentDidMount() {
    try {
      // fetch all the contacts from api
      const allContacts = await ContactsAPI.getAll();
      this.setState({ allContacts, isLoading: false });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Updates the current page the app is displaying in its view.
   * @method updatePage
   * @param  {String} page - The name of the page to display.
   * @return {Void}
   */
  updatePage(page) {
    this.setState({ page });
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
      allContacts: currentState.allContacts.filter(
        contact => contactToDelete.id !== contact.id,
      ),
      searchQuery: '',
    }));
  };

  render() {
    // show the app is loading during ajax
    if (this.state.isLoading && !this.state.allContacts.length) {
      return <Loading />;
    }

    return (
      <div className="App">
        {this.state.page === 'list' && (
          <ListContactsPage
            allContacts={this.state.allContacts}
            onDeleteContact={this.deleteContact}
            onNavigate={this.updatePage}
          />
        )}
        {this.state.page === 'create' && <CreateContactPage />}
      </div>
    );
  }
}

export default App;
