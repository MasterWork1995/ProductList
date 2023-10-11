import { Link } from 'react-router-dom';
import routes from '../../routes';

const ErrorPage = () => {
  return (
    <>
      <section>
        <h1>Error | Page could not be found</h1>
        <Link to={routes.PRODUCTS}>&larr; Back to Homepage</Link>
      </section>
    </>
  );
};

export default ErrorPage;
