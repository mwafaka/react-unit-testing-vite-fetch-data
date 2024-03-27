import React, { useState, useEffect ,cleanup} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await response.json()
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hallo Users</h1>
      <ol>
        {data.map(post => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
