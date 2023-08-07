import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>{/* Render data here */}</div>
      )}
    </div>
  );
};
export default App;