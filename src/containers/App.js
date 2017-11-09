import React, { Component } from 'react';

import CreateContactPage from './CreateContactPage';
import ListContactsPage from './ListContactsPage';

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
    page: 'list', // ['list', 'create']
  };

  /**
   * Updates the current page the app is displaying in its view.
   * @method updatePage
   * @param  {String} page - The name of the page to display.
   * @return {Void}
   */
  updatePage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <div className="App">
        {this.state.page === 'list' && (
          <ListContactsPage onNavigate={this.updatePage} />
        )}
        {this.state.page === 'create' && <CreateContactPage />}
      </div>
    );
  }
}

export default App;
