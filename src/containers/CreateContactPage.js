import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

import ImageInput from './ImageInput';

class CreateContactPage extends Component {
  static propTypes = {
    /**
     * A passed callback that creates local contact as well as in the API.
     * @type {Function}
     */
    onCreateContact: PropTypes.func.isRequired,
  };

  /**
   * Handle form submission and collection of data to create a contact.
   * @method handleSubmit
   * @param  {Object} event - Native DOM event emitted on form submission.
   * @return {Void}
   */
  handleSubmit = event => {
    event.preventDefault();

    // create contact
    const serializedForm = serializeForm(event.target, { hash: true });
    this.props.onCreateContact(serializedForm);
  };

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact" />

        <form onSubmit={this.handleSubmit} className="create-contact-form">
          {/* Upload avatar. */}
          <ImageInput
            name="avatarUrl"
            className="create-contact-avatar-input"
            maxHeight={64}
          />

          {/* Text fields. */}
          <div className="create-contact-details">
            <input name="name" placeholder="Name" type="text" />
            <input name="email" placeholder="Email" type="text" />

            {/* Submits form. */}
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContactPage;
