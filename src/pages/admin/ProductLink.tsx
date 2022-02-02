import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useMotionValue } from 'framer-motion';
import { getProduct, IProductResponse } from '../../utils';
import { HouseIntroduction, PageTitle, ProductListBottom } from './components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  width: 40%;
  min-width: 800px;
  min-height: 100vh;
  overflow: hidden;
  display: inline-block;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 50px;
`;

export default function ProductLink() {
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const { data, isLoading } = useQuery<IProductResponse>('product', getProduct);
  return (
    <Container>
      {isLoading && <Loader>로딩중입니다...</Loader>}
      {data && <PageTitle />}
      {data && (
        <HouseIntroduction
          data={data}
          index={index}
          setIndex={setIndex}
          x={x}
        />
      )}
      {data && (
        <ProductListBottom
          data={data}
          index={index}
          setIndex={setIndex}
          x={x}
        />
      )}
    </Container>
  );
}
