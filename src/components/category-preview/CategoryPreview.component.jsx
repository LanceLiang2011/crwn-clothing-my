import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard.component';
import './category-preview.styles';
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from './category-preview.styles';

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
