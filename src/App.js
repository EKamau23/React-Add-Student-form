import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues ='';
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "FirstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "LastName is required!";}
    // } else if (!regex.test(values.gender)) {
    //   errors.lastName = "This is not a valid gender format!";
    // }
    if (!values.gender) {
      errors.gender = "Gender is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Student added successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>FirstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstName}</p>
          <div className="field">
            <label>LastName</label>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastName}</p>
          <div className="field">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formValues.gender}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.gender}</p>
          <button className="fluid ui button blue">Add Students</button>
        </div>
      </form>
    </div>
  );
}

export default App;