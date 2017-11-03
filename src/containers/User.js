import React, { Component } from 'react'

class User extends Component {
  state = {
    name: '',
    age: ''
  }

  async componentDidMount () {
    // make async REST call to update state
  }

  render () {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    )
  }
}

export default User
