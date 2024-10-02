import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

const AdminResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get('http://localhost:9000/result/results');
        setResults(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="admin-dashboard">
     <AdminNav />
     <div className='mx-5 mt-3'>
     <table className="table mt-5 table-striped">
        <thead>
          <tr>
            <th className="text-center">Username</th>
            <th className="text-center">Quiz Code</th>
            <th className="text-center">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result._id}>
              <td className="text-center">{result.student.name}</td>
              <td className="text-center">{result.quiz}</td>
              <td className="text-center">{result.score}</td>
  
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      
    </div>
  );
};

export default AdminResults;
