import React from 'react';
import s from './Loader.module.css';

export const Loader = ({ big }) => {
  return (
    <div className={big ? s.bigSpinnerWrapper : s.spinnerWrapper}>
      <div className={big ? s.bigSpinner : s.spinner}></div>
    </div>
  );
};
export default Loader;
