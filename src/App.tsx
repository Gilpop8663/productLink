import styled from 'styled-components';
import ProductLink from './pages/admin/ProductLink';

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.textBlackColor};
  width: 100%;
  height: 150vh;
`;

export default function App() {
  return (
    <Conatiner>
      <ProductLink />;
    </Conatiner>
  );
}
