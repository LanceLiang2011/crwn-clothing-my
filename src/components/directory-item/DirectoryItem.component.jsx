import './DirectoryItem.styles';
import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  BodyContainer,
  DirectoryItemContainer,
} from './DirectoryItem.styles';
const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
