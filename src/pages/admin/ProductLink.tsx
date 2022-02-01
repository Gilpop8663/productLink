import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getProduct, IProductProps, IProductResponse } from '../../utils/api';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  width: 40%;
  min-width: 800px;
  min-height: 100vh;
  overflow: hidden;
  display: inline-block;
`;

const Wrapper = styled.div`
  position: relative;
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
  min-height: 400px;
  width: 100%;
`;

const ImoticionBtn = styled.i`
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg,${theme.orangeColor}, ${theme.pinkColor})`};
  font-size: ${({ theme }) => theme.normalFontSize};
`;

const Glass = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0px;
  top: 0px;
  width: 40px;
  height: 40px;
  left: 0px;
  right: 0px;
  margin: auto;
  font-size: 28px;
  color: white;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  opacity: 1;
  border-radius: ${({ theme }) => theme.miniRadius};
`;

const Modal = styled.div`
  border-radius: ${({ theme }) => theme.miniRadius};
  z-index: 5;
  width: 250px;
  height: 80px;
  background-color: white;
  position: absolute;
  opacity: 1;
  display: flex;
  top: 50px;
  padding: 10px;
  left: 0;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 5;
    left: 10%;
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-bottom-color: white;
    border-top: 7px;
    margin-top: -7px;
  }

  i {
    z-index: 5;
    color: ${({ theme }) => theme.textLightGrayColor};
  }
`;

const InfoContainer = styled.div`
  z-index: 5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.textDarkGrayColor};
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const PriceWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Expected = styled.span`
  color: ${({ theme }) => theme.textLightGrayColor};
  font-size: ${({ theme }) => theme.smallFontSize};
`;

const RateDiscount = styled.span`
  color: ${({ theme }) => theme.textRedColor};
  font-size: ${({ theme }) => theme.bigFontSize};
  font-weight: 600;
`;

const Price = styled.span`
  color: ${({ theme }) => theme.textBlackColor};
  font-size: ${({ theme }) => theme.bigFontSize};
  font-weight: 600;
`;

const ProductList = styled.div`
  display: flex;
  padding: 0px 10px;
  width: 100%;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;
const ProductInfoBox = styled.div`
  margin: 28px 6px;
  width: 110px;
  height: 110px;
  border-radius: ${({ theme }) => theme.bigRadius};
`;
const ProductInfoImg = styled.img<{ isFocus: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.bigRadius};
  padding: ${(props) => (props.isFocus ? '1px' : '0px')};
  border: ${(props) =>
    props.isFocus
      ? `2px solid ${props.theme.textRedColor}`
      : `1px solid ${props.theme.textLightGrayColor}`};
`;

const POSITION = {
  WIDTH: [-100, -180, -450, -50, 690, 130, -370],
  HEIGHT: [600, 50, -50, -500, -310, 170, -430],
};

export default function ProductLink() {
  const [index, setIndex] = useState(0);
  const { data, isLoading } = useQuery<IProductResponse>(
    ['product'],
    getProduct
  );
  const onClick = (id: number) => {
    setIndex((oldId) => {
      if (oldId === id) {
        return 0;
      } else {
        return id;
      }
    });
  };

  //console.log(data);
  return (
    <Container>
      {isLoading && <Loader>로딩중입니다...</Loader>}
      {data && (
        <Wrapper>
          <Image src={data.imageUrl}></Image>
          {data.productList.map((item: IProductProps, idx: number) => (
            <Glass
              style={{
                left: `${POSITION.WIDTH[idx]}px`,
                top: `${POSITION.HEIGHT[idx]}px`,
              }}
              key={item.productId}
              onClick={() => onClick(item.productId)}
            >
              {index === item.productId ? (
                <ImoticionBtn className="fas fa-times"></ImoticionBtn>
              ) : (
                <ImoticionBtn className="fas fa-search"></ImoticionBtn>
              )}
              {index === item.productId && (
                <Modal>
                  <ProductImage src={item.imageUrl} />
                  <InfoContainer>
                    <Title>{item.productName}</Title>
                    <PriceWrapper>
                      {item.outside ? (
                        <>
                          <Expected>예상가</Expected>
                          <Price>{item.priceOriginal.toLocaleString()}</Price>
                        </>
                      ) : (
                        <>
                          <RateDiscount>{item.discountRate}%</RateDiscount>
                          <Price>{item.priceDiscount.toLocaleString()}</Price>
                        </>
                      )}
                      <i className="fas fa-chevron-right"></i>
                    </PriceWrapper>
                  </InfoContainer>
                </Modal>
              )}
            </Glass>
          ))}
        </Wrapper>
      )}
      {data && (
        <ProductList>
          {data.productList.map((item: IProductProps) => (
            <ProductInfoBox
              onClick={() => onClick(item.productId)}
              key={item.productId}
            >
              <ProductInfoImg
                isFocus={index === item.productId}
                src={item.imageUrl}
              />
            </ProductInfoBox>
          ))}
        </ProductList>
      )}
    </Container>
  );
}
