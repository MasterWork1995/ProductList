import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductList, Product, ErrorPage, HomePage } from './pages';
import { Header, Container } from './components';
import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path={routes.HOMEPAGE} element={<HomePage />}></Route>
          <Route path={routes.PRODUCTS} element={<ProductList />}></Route>
          <Route path={routes.SINGGLEPRODUCT} element={<Product />}></Route>
          <Route path={routes.ERRORPAGE} element={<ErrorPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
