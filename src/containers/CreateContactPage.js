import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ImageInput from './ImageInput';

class CreateContactPage extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact" />

        <form className="create-contact-form">
          <ImageInput
            name="avatarUrl"
            className="create-contact-avatar-input"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input name="name" placeholder="Name" type="text" />
            <input name="email" placeholder="Email" type="text" />

            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContactPage;
