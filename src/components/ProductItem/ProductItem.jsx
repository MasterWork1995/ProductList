import React from 'react';
import { ReactComponent as Rating } from '../assets/rating.svg';
import s from './ProductItem.module.css';

export const ProductItem = ({ product }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <img src={product?.images?.[0]} alt={`${product.brand}, ${product.category}`} className={s.image} />
      </div>
      <div className={s.infoWrapper}>
        <div>
          <p className={s.text}>
            <b>Name:</b> {product.title}
          </p>
          <p className={s.text}>
            <b>Price:</b> {product.price}$
          </p>
        </div>
        <div className={s.ratingWrapper}>
          <Rating className={s.rating} /> <p className={s.text}>{product.rating}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
