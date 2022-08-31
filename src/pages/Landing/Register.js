import { FormRow, FormRowDropdown } from '../../components';
import '../../assets/css/Register.scss';

const Register = () => {
  return (
    <div className="register full-page ">
      <form className="form">
        <h3>Sign Up</h3>
        <FormRowDropdown
          labelText="Title"
          name="searchJobStatus"
          value="Instructor"
          handleChange={() => {}}
          options={['Educator', 'Student']}
        />
        <FormRow
          type="text"
          name="name"
          value="Name" //values.name
          handleChange={() => {}}
          labelText=""
        />
        <FormRow
          type="text"
          name="email"
          value="email" //values.email
          handleChange={() => {}}
          labelText=""
        />
        <FormRow
          type="password"
          name="password"
          value="password" //values.email
          handleChange={() => {}}
          labelText=""
        />

        <button
          type="submit"
          className="btn btn-block"
          // disabled={isLoading}
        >
          Submit
        </button>

        {/* {values.isMember && ( */}
        <p>
          {/* {values.isMember ?  */}
          Not a member yet?
          {/* // : 'Already a member?'} */}
          <button
            type="button"
            // onClick={toggleMember}
            className="member-btn"
          >
            {/* {values.isMember ? 'Register' : 'Login'} */}
          </button>
        </p>
      </form>
    </div>
  );
};
export default Register;
