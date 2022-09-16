import { useState } from 'react';
import './index.css';

function App() {

  const[values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChangeFirstNameInput = (event) => {
    //update values state, take copy of values(spread operator) object, change firstname of copy
    setValues({...values, firstName: event.target.value})
  }
  const handleChangeLastNameInput = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleChangeEmailInput = (event) => {
    setValues({...values, email: event.target.value})
  }

  return (
    <div className="app">
      <div className='form-container'>
        <div className='success-message'>Success! Thanks for registering</div>
        <input 
          onChange={handleChangeFirstNameInput}
          value={values.firstName}
          className='form-field'
          placeholder='First Name'
          name='firstName'
        />
        <input
        onChange={handleChangeLastNameInput}
          value={values.lastName}
          className='form-field'
          placeholder='Last Name'
          name='lastName'
        />
        <input
          onChange={handleChangeEmailInput}
          value={values.email}
          className='form-field'
          placeholder='Email'
          name='Email'
        />
        <button className='register-button'>Register</button>
      </div>
    </div>
  );
}

export default App;
