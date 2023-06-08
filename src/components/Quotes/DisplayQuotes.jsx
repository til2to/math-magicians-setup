import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './quotes.css';
import spinner from '../../assets/spinner.gif';

const DisplayQuotes = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchData = async () => {
    const apiKey = 'TGzPu+oS9CsjkYTd0YQw1g==A8sJmtrrPDVD5euS';
    const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

    try {
      const response = await axios.get(url, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      const responseData = response.data;
      setQuoteData(responseData);
      setIsDataLoaded(true);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      throw Error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div className="spin"><img src={spinner} alt="Loading..." /></div>;
  if (hasError) return <div className="handle-error">Cound not fetch data</div>;
  if (!isDataLoaded) return null;

  return (
    <div className="quotes">
      {quoteData.length > 0 && (
        <div className="each-quote center">
          <div className="quote-quote">
            {quoteData[0].quote}
            {' '}
            -
            {' '}
            {quoteData[0].author}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayQuotes;
