import React, { useState } from "react";
import "./styles.css";

const Form = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [submittedFormData, setSubmittedFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  // Update the state when input values change
  const handleTextInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here

    console.log("Form submitted:", formData);
    setSubmittedFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Checkbox 1:
        <input
          name="checkbox1"
          type="checkbox"
          checked={formData.checkbox1}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Checkbox 2:
        <input
          name="checkbox2"
          type="checkbox"
          checked={formData.checkbox2}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Checkbox 3:
        <input
          name="checkbox3"
          type="checkbox"
          checked={formData.checkbox3}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>

      {/* <h2>Submitted Data</h2>

      <p>First name: {submittedFormData.firstName}</p>
      <p>Last name: {submittedFormData.lastName}</p>
      <p>Email: {submittedFormData.email}</p>
      <p>Checkbox 1: {submittedFormData.checkbox1.toString()}</p>
      <p>Checkbox 2: {submittedFormData.checkbox2.toString()}</p>
      <p>Checkbox 3: {submittedFormData.checkbox3.toString()}</p> */}
    </form>
  );
};

export default Form;
