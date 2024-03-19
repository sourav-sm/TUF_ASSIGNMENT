// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TableComponent = () => {
//   const [submissions, setSubmissions] = useState([]);

//   useEffect(() => {
//     fetchSubmissions();
//   }, []);

//   const fetchSubmissions = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/submissions');
//       setSubmissions(response.data);
//     } catch (error) {
//       console.error('Error fetching submissions:', error);
//     }
//   };

//   return (
//     <div className="p-10">
//       <h2 className="text-red-600 font-bold text-4xl pb-5">Submissions Table</h2>
//       <table >
//         <thead className="mr-5">
//           <tr>
//             <th>Username</th>
//             <th>Code language</th>
//             <th>Standard input (stdin)</th>
//             <th>Timestamp</th>
//             <th>Source code (limited)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submissions.map((submission, index) => (
//             <tr key={index}>
//               <td>{submission.username}</td>
//               <td>{submission.codeLanguage}</td>
//               <td>{submission.stdin}</td>
//               <td>{submission.timestamp}</td>
//               <td>{submission.sourceCode.slice(0, 100)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;
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
    <div className="p-10">
      <h2 className="text-red-600 font-bold text-4xl pb-5">Submissions Table</h2>
      <table className="table-auto w-full">
        <thead className="text-lg bg-gray-200">
          <tr>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Code language</th>
            <th className="px-4 py-2">Standard input (stdin)</th>
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Source code (limited)</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{submission.username}</td>
              <td className="border px-4 py-2">{submission.codeLanguage}</td>
              <td className="border px-4 py-2">{submission.stdin}</td>
              <td className="border px-4 py-2">{submission.timestamp}</td>
              <td className="border px-4 py-2">{submission.sourceCode.slice(0, 100)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
