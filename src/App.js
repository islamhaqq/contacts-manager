import React, { Component } from 'react';

import ListContacts from './components/ListContacts'
import contacts from './utils/dummy-contacts-data'

/**
 * The root component of the app.
 * @type {Component}
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* List of contacts. */}
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
