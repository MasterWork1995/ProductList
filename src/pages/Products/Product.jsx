import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../../components';
import useFetch from '../../hooks/useFetch';
import routes from '../../routes';
import s from './Product.module.css';

export const Product = () => {
  const { id } = useParams();
  const [data, , loading] = useFetch(`/${id}`);

  return (
    <div className={s.product}>
      <Link to={routes.PRODUCTS} className={s.goBack}>
        &larr; Go back
      </Link>
      {!loading ? (
        <>
          <div className={s.imagesWrapper}>
            {data?.images?.map((image) => {
              return <img key={image} src={image} alt={data.category} className={s.image} />;
            })}
          </div>
          <div className={s.infoWrapper}>
            <p>
              <b>Brand: </b>
              {data.brand}
            </p>
            <p>
              <b>Price: </b>
              {data.price}$
            </p>
            <p>
              <b>Category: </b>
              {data.category}
            </p>
            <p>
              <b>Stock: </b>
              {data.stock}
            </p>
            <p>
              <b>Title: </b>
              {data.title}
            </p>
          </div>
        </>
      ) : (
        <Loader big />
      )}
    </div>
  );
};

export default Product;
