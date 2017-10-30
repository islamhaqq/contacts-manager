import React, { Component } from 'react';

import ListContacts from './components/ListContacts'
import contacts from './utils/dummy-contacts-data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
