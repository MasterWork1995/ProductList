import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import routes from '../../routes';
import { Container } from '../index';
import s from './Header.module.css';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={s.header}>
      <Container>
        <nav>
          <ul className={s.list}>
            <li className={`${s.listItem} ${pathname === routes.HOMEPAGE ? s.active : ''}`}>
              <Link to={routes.HOMEPAGE} className={s.link}>
                Home
              </Link>
            </li>
            <li className={`${s.listItem} ${pathname.includes(routes.PRODUCTS) ? s.active : ''}`}>
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
