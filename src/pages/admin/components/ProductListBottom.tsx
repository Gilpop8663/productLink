import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { motion, MotionValue } from 'framer-motion';
import styled from 'styled-components';
import { IProductProps, IProductResponse, POSITION } from '../../../utils';

const ProductList = styled(motion.div)`
  width: 100%;
  transition: all 0.3s;
  display: flex;
  padding: 0px 10px;
  flex-flow: nowrap;
  position: relative;
  align-items: center;
`;
const ProductInfoBox = styled(motion.div)`
  width: 100%;
  display: inline-block;
  margin: 28px 6px;
  width: 110px;
  position: relative;
  height: 110px;
  border-radius: ${({ theme }) => theme.bigRadius};
  cursor: pointer;
`;

const ProductInfoImg = styled(motion.img)<{ isfocus: boolean | undefined }>`
  display: inline-block;
  width: 110px;
  height: 110px;
  transform-origin: center;
  border-radius: ${({ theme }) => theme.bigRadius};
  padding: ${(props) => (props.isfocus ? '2px' : '0px')};
  border: ${(props) =>
    props.isfocus
      ? `2px solid ${props.theme.textRedColor}`
      : `1px solid ${props.theme.textLightGrayColor}`};
`;

const RateDiscount = styled(motion.div)<{ isfocus: boolean | undefined }>`
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  top: ${({ isfocus }) => (isfocus ? '4px' : '1px')};
  right: 5px;
  align-items: center;
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: 600;
  color: white;
  width: 25px;
  height: 17.5px;

  border-top-right-radius: 5px;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg,${theme.orangeColor}, ${theme.pinkColor})`};
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 12.5px solid transparent;
    border-top-color: ${({ theme }) => theme.pinkColor};
    border-bottom: 0;
    margin-left: -12.5px;
    margin-bottom: -12.5px;
  }
`;

interface IProductListProps {
  x: MotionValue<number>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  data: any;
}

function ProductListBottom({ x, index, data, setIndex }: IProductListProps) {
  const slideRef = useRef<HTMLInputElement>(null);
  const [right, setRight] = useState(0);
  useEffect(() => {
    if (slideRef.current !== null) {
      setRight(
        -(slideRef.current.scrollWidth - slideRef.current.offsetWidth) / 2 - 30
      );
      console.dir(slideRef.current.scrollWidth);
      console.dir(slideRef.current.offsetWidth);
    }
  }, [slideRef]);

  const [isDrag, setIsDrag] = useState(false);
  console.log(isDrag);
  const onClick = (id: number, idx: number) => {
    if (isDrag) return;
    x.set(idx > 6 ? -60 + -(idx - 6) * 60 : -idx * 10);
    setIndex((oldId) => {
      if (oldId === id) {
        return 0;
      } else {
        return id;
      }
    });
  };

  return (
    <ProductList
      ref={slideRef}
      transition={{
        type: 'tween',
      }}
      style={{ x }}
      dragConstraints={{
        left: right,
        right: 10,
      }}
      drag="x"
      dragElastic={1}
      onMouseUp={() => {
        if (!isDrag) return;
        setTimeout(() => {
          setIsDrag(false);
        }, 500);
      }}
      onMouseDown={() => {
        if (isDrag) return;
        setTimeout(() => {
          setIsDrag(true);
        }, 500);
      }}
    >
      {data.productList.map((item: IProductProps, idx: number) => (
        <ProductInfoBox
          onClick={() => onClick(item.productId, idx)}
          key={item.productId}
        >
          <ProductInfoImg
            drag="x"
            style={{ x }}
            dragConstraints={{
              left: right,
              right: 10,
            }}
            onClick={() => {
              if (!isDrag) {
                x.set(-idx * 110);
              }
            }}
            dragElastic={1}
            isfocus={index ? index === item.productId : undefined}
            src={item.imageUrl}
          ></ProductInfoImg>
          {!item.outside && (
            <RateDiscount
              isfocus={index ? index === item.productId : undefined}
              style={{ x }}
            >
              {item.discountRate}%
            </RateDiscount>
          )}
        </ProductInfoBox>
      ))}
    </ProductList>
  );
}

export default ProductListBottom;
