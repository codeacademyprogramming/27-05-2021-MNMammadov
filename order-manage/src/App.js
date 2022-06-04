import './App.css';
import OrderList from './modules/orders/components';
import { useDispatch } from 'react-redux';
import { getProducts } from './modules/products/actions';
import React from 'react';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getProducts(dispatch)
  }, [dispatch]);

  return (
    <OrderList />
  );
}

export default App;
