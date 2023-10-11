import React from 'react';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.spinnerWrapper}>
      <div className={s.spinner}></div>
    </div>
  );
};
export default Loader;
