import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FormRow,
  FormRowDropdown,
  FormRowTextArea,
  Alert
} from '../../components';
import { useAppContext } from '../../context/appContext';
import '../../assets/css/Contact.scss';

const Contact = () => {
  const { displayAlert, showAlert, clearAlert, isLoading } = useAppContext();

  const initialState = {
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    contactCategory: 'Customer Support',
    contactText: ''
  };

  const [values, setValues] = useState(initialState);
  const [isFormSubmitted, setFormSubmission] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const {
      contactFirstName,
      contactLastName,
      contactEmail,
      contactCategory,
      contactText
    } = values;
    e.preventDefault();
    if (
      !contactFirstName ||
      !contactLastName ||
      !contactEmail ||
      !contactCategory ||
      !contactText
    ) {
      displayAlert();
      return;
    }
    setFormSubmission(true);

    //do something to app context
  };

  const handleClear = () => {
    const {
      contactFirstName,
      contactLastName,
      contactEmail,
      contactCategory,
      contactText
    } = values;
    if (
      contactFirstName &&
      contactLastName &&
      contactEmail &&
      contactCategory &&
      contactText
    ) {
      clearAlert();
      return;
    }
  };

  const formFields = [];
  const handleForm = () => {
    !isFormSubmitted &&
      formFields.push(
        <div className="full-page">
          <form onSubmit={onSubmit} className="form" onChange={handleClear}>
            <h3>Contact Us</h3>
            {showAlert && <Alert />}
            <FormRow
              type="text"
              name="contactFirstName"
              value={values.contactFirstName}
              handleChange={handleChange}
              labelText="first name"
            />

            <FormRow
              type="text"
              name="contactLastName"
              value={values.contactLastName} //values.name
              handleChange={handleChange}
              labelText="last name"
            />
            <FormRow
              type="text"
              name="contactEmail"
              value={values.contactEmail} //values.name
              handleChange={handleChange}
              labelText="email address"
            />
            <FormRowDropdown
              name="contactCategory"
              value={values.contactCategory}
              handleChange={handleChange}
              labelText="What can we help you with?"
              options={[
                'Customer Support',
                'Sales',
                'Feature Request',
                'Other'
              ]}
            />
            <FormRowTextArea
              name="contactText"
              value={values.contactText}
              handleChange={handleChange}
              placeholder=""
              labelText="please describe:"
            />
            {showAlert && <Alert />}

            <input type="submit" className="btn" disabled={isLoading} />
          </form>
        </div>
      );
    isFormSubmitted &&
      formFields.push(
        <form className="form">
          <p>Form submitted. Please give us 1-3 business days to respond.</p>
          <p>- The MSB Team</p>
          <Link to="/" className="btn btn-hero">
            Return Home
          </Link>
        </form>
      );
  };

  const generateFormFields = () => {
    handleForm();
    return formFields;
  };

  return generateFormFields();
};
export default Contact;
