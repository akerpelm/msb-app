import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  FormRow,
  FormRowDropdown,
  FormRowTextArea,
  Alert
} from '../../components';
import { useAppContext } from '../../context/appContext';

const Contact = () => {
  const { displayAlert, showAlert, clearAlert } = useAppContext();

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
  };

  const formFields = [];
  const handleForm = () => {
    !isFormSubmitted &&
      formFields.push(
        <div className="full-page">
          <form onSubmit={onSubmit} className="form" onChange={clearAlert}>
            <h3>Contact Us</h3>
            {showAlert && <Alert />}
            <FormRow
              type="text"
              name="contactFirstName"
              value={values.contactFirstName}
              handleChange={handleChange}
              labelText="first name*"
            />

            <FormRow
              type="text"
              name="contactLastName"
              value={values.contactLastName} //values.name
              handleChange={handleChange}
              labelText="last name*:"
            />
            <FormRow
              type="text"
              name="contactEmail"
              value={values.contactEmail} //values.name
              handleChange={handleChange}
              labelText="email address:"
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

            <input type="submit" className="btn" />
          </form>
        </div>
      );
    isFormSubmitted &&
      formFields.push(
        // <div className="full-page">
        <form className="form">
          <p>Form submitted. Please give us 1-3 business days to respond.</p>
          <p>- The MSB Team</p>
          <Link to="/" className="btn btn-hero">
            Return Home
          </Link>
        </form>
        // </div>
      );
  };

  const generateFormFields = () => {
    handleForm();
    return formFields;
  };

  return generateFormFields();
};
export default Contact;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function Contact() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('firstName')} />
//       <select {...register('gender')}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }
