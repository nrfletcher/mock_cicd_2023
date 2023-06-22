import React from 'react';

const MyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Call your desired function with the form data
    handleFormSubmission(name, email, message);
  };

  const handleFormSubmission = (name, email, message) => {
    // Handle form submission with the form data
    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Email:
        <input type="email" name="email" />
      </label>

      <label>
        Message:
        <textarea name="message" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;