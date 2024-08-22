import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch(url, {method:'GET',headers:{'Content-Type':'application/json'},})
          .then(res=>res.json())
          .then(data=> setData(data))
          .catch(error => console.error('Error:', error));
  }, [])

  return { data };
}

export default useFetch;