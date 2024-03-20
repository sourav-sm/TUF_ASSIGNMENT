// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FormComponent from './Form';
// import {useHistory} from 'react-router-dom';

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

//   const history=useHistory();

//   const goToHomePage=()=>{
//     history.push('/');
//   }

//   return (
//     <div className="p-10">
//       <h2 className="text-red-600 font-bold text-4xl pb-5">Submissions Table</h2>
//       <table className="table-auto w-full">
//         <thead className="text-lg bg-gray-200">
//           <tr>
//             <th className="px-4 py-2">Username</th>
//             <th className="px-4 py-2">Code language</th>
//             <th className="px-4 py-2">Standard input (stdin)</th>
//             <th className="px-4 py-2">Timestamp</th>
//             <th className="px-4 py-2">Source code (limited)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submissions.map((submission, index) => (
//             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//               <td className="border px-4 py-2">{submission.username}</td>
//               <td className="border px-4 py-2">{submission.codeLanguage}</td>
//               <td className="border px-4 py-2">{submission.stdin}</td>
//               <td className="border px-4 py-2">{submission.timestamp}</td>
//               <td className="border px-4 py-2">{submission.sourceCode.slice(0, 100)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={goToHomePage}>Home</button>
//     </div>
//   );
// };

// export default TableComponent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
// import FormComponent from './Form';

const TableComponent = () => {
  const [submissions, setSubmissions] = useState([]);
  // const history = useHistory(); // Initialize useHistory hook

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

  // const goToHomePage = () => {
  //   history.push('/'); // Use history.push to navigate to the home page
  // };

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
      {/* <button onClick={goToHomePage}>Home</button> */}
    </div>
  );
};

export default TableComponent;
