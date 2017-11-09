import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="App">
        {/* Contact list page. */}
        <Route
          path="/"
          render={() => (
            <ListContactsPage
              allContacts={this.state.allContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
          exact
        />

        {/* Create contact page */}
        <Route path="/create" component={CreateContactPage} />
      </div>
    );
  }
}

export default App;
