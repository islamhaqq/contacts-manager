import React, { Component } from 'react';

import ListContacts from '../components/ListContacts'
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

  render() {
    return (
      <div className="App">
        {/* List of contacts. */}
        <ListContacts contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App
