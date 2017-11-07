import React, { Component } from 'react'

import CreateContactPage from './CreateContactPage'
import ListContactsPage from './ListContactsPage'

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
    page: 'list' // ['list', 'create']
  }

  render() {
    return (
      <div className="App">
        {this.state.page === 'list' && <ListContactsPage />}
        {this.state.page === 'create' && <CreateContactPage />}
      </div>
    )
  }
}

export default App
