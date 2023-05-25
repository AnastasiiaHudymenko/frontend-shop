import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { ShopPage } from 'pages/Shop';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
