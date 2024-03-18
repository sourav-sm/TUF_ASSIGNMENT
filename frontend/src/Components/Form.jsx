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
      await axios.post('http://localhost:5000/submit', formData);
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
    <div className="p-10 bg-red-100">
      <h2 className="text-red-600 font-bold text-4xl pb-5">TUF CODE EDITOR</h2>
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className='grid grid-cols-3'>
          <div className="col-span-1">
            <label className="font-semibold text-lg">Username:</label>
            <input className="ml-3 border border-black rounded" type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="col-span-2">
            <label className="font-semibold text-lg">Preferred code language:</label>
            <select name="codeLanguage" value={formData.codeLanguage} onChange={handleChange}>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select>
          </div>
        </div> 
        <div className='grid grid-cols-3 gap-7'> 
           <div className="col-span-1 grid grid-rows-10">
             <label className="row-span-1 font-semibold text-lg">Standard Input:</label>
             <textarea name="stdin" value={formData.stdin} onChange={handleChange} />
           </div>
           <div className=" col-span-2 grid grid-rows-10">
             <label className="row-span-1 font-semibold text-lg">Source code:</label>
             <textarea className="row-span-9" name="sourceCode" value={formData.sourceCode} onChange={handleChange} />
           </div>
        </div>
        <button className="mt-5 bg-orange-600 p-5 mx-80 rounded-lg text-white font-semibold text-2xl" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
