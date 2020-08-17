import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

const searchApi = async (searchTerm) => {
  try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'seattle'
      }
    });
    setResults(response.data.businesses);
  } catch (err) {
    setErrorMessage('Something went wrong :(');
  }
};

  // // Call searchApi when component is first rendered. BAD CODE
  // searchApi('pasta'); this will create an infinite loop

  // Passing empty array as second argument tells react to only run this once
  useEffect(() => {
    searchApi('pasta');
  }, []);
};