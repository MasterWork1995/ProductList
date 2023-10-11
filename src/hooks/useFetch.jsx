import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

const useFetch = (url) => {
  const isInitialRender = useRef(true);
  const [data, setData] = useState([]);
  const total = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);

        if (response.data.products) {
          setData((prev) => [...prev, ...response.data.products]);
        } else {
          setData(response.data);
        }

        if (!total.current) {
          total.current = response.data.total;
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
        isInitialRender.current = true;
      }
    };

    if (isInitialRender.current) {
      isInitialRender.current = false;
      fetchData();
    }
  }, [url]);

  return [data, total.current, loading];
};

export default useFetch;
