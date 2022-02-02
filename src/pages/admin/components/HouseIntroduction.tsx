import { SetStateAction } from 'react';
import { MotionValue } from 'framer-motion';
import styled from 'styled-components';
import { POSITION, IProductProps, IProductResponse } from 'utils';
import { Dispatch } from 'react';

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
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
  font-weight: 600;
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
  font-weight: 400;
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
  font-weight: 500;
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

interface IHouseProps {
  data: IProductResponse;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  x: MotionValue<number>;
}

function HouseIntroduction({ data, index, setIndex, x }: IHouseProps) {
  const onClick = (id: number, idx: number) => {
    setIndex((oldId) => {
      if (oldId === id) {
        return 0;
      } else {
        x.set(POSITION.X[idx]);
        return id;
      }
    });
  };
  return (
    <Wrapper>
      <Image src={data.imageUrl} />
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
              onClick={() => onClick(item.productId, idx)}
              className="fas fa-times"
            />
          ) : (
            <ImoticionBtn
              onClick={() => onClick(item.productId, idx)}
              className="fas fa-search"
            />
          )}
          {index === item.productId && (
            <Modal WIDTH={POSITION.WIDTH[idx]} HEIGHT={POSITION.HEIGHT[idx]}>
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
                  <Imoticon>&#xE001;</Imoticon>
                </PriceWrapper>
              </InfoContainer>
            </Modal>
          )}
        </Glass>
      ))}
    </Wrapper>
  );
}

export default HouseIntroduction;