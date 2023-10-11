import { Link } from 'react-router-dom';
import routes from '../../routes';
import { Container } from '../index';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav>
          <ul className={s.list}>
            <li className={s.listItem}>
              <Link to={routes.HOMEPAGE} className={s.link}>
                Home
              </Link>
            </li>
            <li className={s.listItem}>
              <Link to={routes.PRODUCTS} className={s.link}>
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
