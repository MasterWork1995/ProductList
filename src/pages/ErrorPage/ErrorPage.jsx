import { Link } from 'react-router-dom';
import routes from '../../routes';
import s from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <>
      <section className={s.container}>
        <h1>Error | Page could not be found</h1>
        <Link to={routes.PRODUCTS} className={s.link}>
          &larr; Back to Homepage
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
