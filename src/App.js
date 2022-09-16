import './index.css';

function App() {
  return (
    <div className="app">
      <div className='form-container'>
        <input 
          className='form-field'
          placeholder='First Name'
          name='firstName'
        />
        <input
          className='form-field'
          placeholder='Last Name'
          name='lastName'
        />
        <input
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
