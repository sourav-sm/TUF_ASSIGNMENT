import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/submissions');
      setSubmissions(response.data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  return (
    <div>
      <h2>Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code language</th>
            <th>Standard input (stdin)</th>
            <th>Timestamp</th>
            <th>Source code (limited)</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.username}</td>
              <td>{submission.codeLanguage}</td>
              <td>{submission.stdin}</td>
              <td>{submission.timestamp}</td>
              <td>{submission.sourceCode.slice(0, 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
