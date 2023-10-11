import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Loader, ProductItem } from '../../components';
import s from './ProductList.module.css';

export const ProductList = () => {
  const [page, setPage] = useState(0);
  const [data, total, loading] = useFetch(`?limit=12&skip=${page * 12}`, page);

  return (
    <>
      <ul className={s.list}>
        {data?.map((item) => {
          return <ProductItem key={item.id} product={item} />;
        })}
      </ul>
      {total !== data.length && data.length !== 0 && (
        <div className={s.buttonWrapper}>
          <button className={s.button} onClick={() => setPage((prev) => prev + 1)}>
            {loading ? <Loader /> : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
};

export default ProductList;
