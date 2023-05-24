import React, { useState, useEffect } from 'react';
import TopScorers from './components/TopScorers';



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca4a5e1f5f0msh7e35c44a6500b0cp19316ejsneecb6bfab428',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <TopScorers topScorers ={data} />
    </div>
  );
};

export default App;
