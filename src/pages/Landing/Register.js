import { FormRow, FormRowDropdown, Alert } from '../../components';
import '../../assets/css/Register.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/appContext';

const initialState = {
  role: '',
  name: '',
  email: '',
  password: '',
  currentMember: true
};

const Register = () => {
  const { isLoading, displayAlert, showAlert, clearAlert } = useAppContext();
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate;

  const toggleMemberStatus = () => {
    setValues({ ...values, currentMember: !values.currentMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { role, name, email, password, currentMember } = values;
    if (!email || !password || (!name && !currentMember)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    // if (currentMember) {
    //   authenticateUser({
    //     currentUser,
    //     authMethod: 'login',
    //     alertText: 'Login successful. Redirecting...'
    //   });
    // } else {
    //   authenticateUser({
    //     currentUser,
    //     authMethod: 'register',
    //     alertText: 'Registration complete. Redirecting...'
    //   });
    // }
  };

  const handleClear = () => {
    const { role, name, email, password, currentMember } = values;
    if (
      (email && password && role && name) ||
      (currentMember && email && password)
    ) {
      clearAlert();
      return;
    }
  };
  return (
    <div className="register full-page ">
      <form className="form" onSubmit={onSubmit} onChange={handleClear}>
        <h3>{values.currentMember ? 'Sign Up' : 'Sign In'}</h3>
        {showAlert && <Alert />}
        {values.currentMember && (
          <FormRowDropdown
            labelText="role"
            name="role"
            value={values.role}
            handleChange={handleChange}
            options={['Educator', 'Student']}
          />
        )}
        {values.currentMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText=""
          />
        )}
        <FormRow
          type="text"
          name={'email'}
          value={values.email}
          handleChange={handleChange}
          labelText=""
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText=""
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.currentMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            type="button"
            onClick={toggleMemberStatus}
            className="member-btn"
          >
            {values.currentMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};
export default Register;
