import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

const useFetch = (url, page) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = page !== undefined ? { limit: 12, skip: page * 12 } : {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, { params });
        if (page === undefined) {
          setData(response.data);
        } else {
          setData([...data, ...response.data.products]);
        }
        if (!total) {
          setTotal(response.data.total);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  return [data, total, loading];
};

export default useFetch;
