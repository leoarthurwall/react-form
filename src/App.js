import { useState } from "react";
import "./index.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  
  const [valid, setValid] = useState(false)

  const handleChangeFirstNameInput = (event) => {
    //update values state, take copy of values(spread operator) object, change firstname of copy
    setValues({ ...values, firstName: event.target.value });
  };
  const handleChangeLastNameInput = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleChangeEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true);
  };

  return (
    <div className="app">
      <form className="form-container" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success! Thanks for registering</div>
        ) : null}
        <input
          onChange={handleChangeFirstNameInput}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span className="input-warning">Please enter your first name</span> : null}
        <input
          onChange={handleChangeLastNameInput}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span className="input-warning">Please enter your last name</span> : null}

        <input
          onChange={handleChangeEmailInput}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="Email"
        />
        {submitted && !values.email ? <span className="input-warning">Please enter your email address</span> : null}

        <button className="register-button">Register</button>
      </form>
    </div>
  );
}

export default App;
