import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import Category from '../category/Category.component';
import './shop.styles.scss';

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}
