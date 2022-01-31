import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getProduct, IProductResponse } from '../../utils/api';

const Container = styled.div`
  background-color: ${({ theme }) => theme.orangeColor};
  width: 100vw;
  height: 100vh;
  font-size: ${({ theme }) => theme.smallFontSize};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 50px;
`;

const Image = styled.img`
  background-position: center center;
  background-size: cover;
  height: 100%;
  position: absolute;
`;

const Glass = styled.div`
  z-index: 1;
  font-size: 28px;
`;

export default function ProductLink() {
  const { data, isLoading } = useQuery<IProductResponse>(
    ['product'],
    getProduct
  );
  console.log(data);
  return (
    <Container>
      {isLoading && <Loader>로딩중입니다...</Loader>}
      {data && (
        <Wrapper>
          <Image src={data.imageUrl}></Image>
          <Glass>asdsasdasdasads</Glass>
        </Wrapper>
      )}
    </Container>
  );
}
