import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { PageLayoutNoHeader } from '../../common/index';
import styled from 'styled-components';
import { useContext } from 'react';
import StyleContext from '../../context/StyleContext/StyleContext';


const Form = styled.form`
  width: 100%;
  max-width: 15rem;
  background: white;
  border: 0.1rem solid #148980;
  padding: 0.5rem;
  box-sizing: border-box;
  color: #6D6E71;
  border-radius: 0.25rem;
`;

function LoginForm({ user, setUser }) {
  // const { Form } = useContext(StyleContext);


  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <PageLayoutNoHeader>
      <div className="form-container">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </Form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </PageLayoutNoHeader>
  );
}

export default LoginForm;