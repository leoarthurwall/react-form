import { useState } from 'react';
import './index.css';

function App() {

  const[values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  return (
    <div className="app">
      <div className='form-container'>
        <input 
          value={values.firstName}
          className='form-field'
          placeholder='First Name'
          name='firstName'
        />
        <input
          value={values.lastName}
          className='form-field'
          placeholder='Last Name'
          name='lastName'
        />
        <input
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
