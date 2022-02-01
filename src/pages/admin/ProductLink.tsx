import {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  cursor: pointer;
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
  opacity: 0.8;
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

const Imoticon = styled.i`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  color: ${({ theme }) => theme.textLightGrayColor};
  font-size: 14px;
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

const Modal = styled.div<{ WIDTH: number; HEIGHT: number }>`
  border-radius: ${({ theme }) => theme.miniRadius};
  z-index: 5;
  width: 203px;
  height: 67px;
  background-color: white;
  cursor: pointer;
  position: absolute;
  opacity: 1;
  display: flex;
  line-height: 22px;
  top: ${({ HEIGHT }) => (HEIGHT > 0 ? '-97px' : '50px')};
  left: ${({ WIDTH }) => (WIDTH > 680 ? '-160px' : '-26px')};
  padding: 10px;
  &::after {
    content: '';
    position: absolute;
    top: ${({ HEIGHT }) => (HEIGHT > 0 ? '' : '0')};
    bottom: ${({ HEIGHT }) => (HEIGHT > 0 ? '0' : '')};
    z-index: 5;
    left: ${({ WIDTH }) => (WIDTH > 680 ? '77.5%' : '17.5%')};
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-bottom-color: ${({ HEIGHT }) => (HEIGHT > 0 ? 'none' : 'white')};
    border-top-color: ${({ HEIGHT }) => (HEIGHT > 0 ? 'white' : 'none')};
    border-top: ${({ HEIGHT }) => (HEIGHT > 0 ? '' : '0')};
    border-bottom: ${({ HEIGHT }) => (HEIGHT > 0 ? '0' : '')};
    margin-top: ${({ HEIGHT }) => (HEIGHT > 0 ? '' : '-7px;')};
    margin-bottom: ${({ HEIGHT }) => (HEIGHT > 0 ? '-7px' : '')};
  }
`;

const InfoContainer = styled.div`
  z-index: 5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
  height: 100%;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.textDarkGrayColor};
  font-size: ${({ theme }) => theme.normalFontSize};
`;

const PriceWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 17px;
`;

const Expected = styled.span`
  font-weight: 600;
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
  margin-left: 10px;
`;

const ProductPriceWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

const ProductList = styled.div`
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  width: 100%;
  flex-flow: nowrap;
  position: relative;
  overflow-x: scroll;
  align-items: center;
`;
const ProductInfoBox = styled.div`
  display: inline-block;
  margin: 28px 6px;
  width: 110px;
  height: 110px;
  border-radius: ${({ theme }) => theme.bigRadius};
  cursor: pointer;
`;

const ProductInfoImg = styled.img<{ isFocus: boolean }>`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  transform-origin: center;
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
  const slideRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [mouseClickX, setMouseClickX] = useState(0);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDrag(true);
    if (slideRef.current !== null) {
      setMouseClickX(e.pageX + slideRef.current.scrollLeft);
    }
  };

  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDrag(false);
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDrag(false);
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDrag) return;
    e.preventDefault();
    if (slideRef.current !== null) {
      slideRef.current.scrollLeft = mouseClickX - e.pageX;
    }
  };

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
  //console.log(slideRef);
  // console.log(data);
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
            >
              {index === item.productId ? (
                <ImoticionBtn
                  onClick={() => onClick(item.productId)}
                  className="fas fa-times"
                ></ImoticionBtn>
              ) : (
                <ImoticionBtn
                  onClick={() => onClick(item.productId)}
                  className="fas fa-search"
                ></ImoticionBtn>
              )}
              {index === item.productId && (
                <Modal
                  WIDTH={POSITION.WIDTH[idx]}
                  HEIGHT={POSITION.HEIGHT[idx]}
                >
                  <ProductImage src={item.imageUrl} />
                  <InfoContainer>
                    <Title>{item.productName}</Title>
                    <PriceWrapper>
                      {item.outside ? (
                        <ProductPriceWrapper>
                          <Expected>예상가</Expected>
                          <Price>{item.priceOriginal.toLocaleString()}</Price>
                        </ProductPriceWrapper>
                      ) : (
                        <ProductPriceWrapper>
                          <RateDiscount>{item.discountRate}%</RateDiscount>
                          <Price>{item.priceDiscount.toLocaleString()}</Price>
                        </ProductPriceWrapper>
                      )}
                      <Imoticon className="fas fa-chevron-right"></Imoticon>
                    </PriceWrapper>
                  </InfoContainer>
                </Modal>
              )}
            </Glass>
          ))}
        </Wrapper>
      )}
      {data && (
        <ProductList
          ref={slideRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
        >
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
