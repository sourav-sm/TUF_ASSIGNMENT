import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    codeLanguage: '',
    stdin: '',
    sourceCode: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/submit', formData);
      console.log('Form submitted successfully');
      // Redirect to table page after successful submission
      window.location.href = '/table';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Preferred code language:</label>
          <select name="codeLanguage" value={formData.codeLanguage} onChange={handleChange}>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div>
          <label>Standard input (stdin):</label>
          <textarea name="stdin" value={formData.stdin} onChange={handleChange} />
        </div>
        <div>
          <label>Source code:</label>
          <textarea name="sourceCode" value={formData.sourceCode} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
