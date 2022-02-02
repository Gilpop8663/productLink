import { Dispatch, SetStateAction, useState } from 'react';
import { motion, MotionValue } from 'framer-motion';
import styled from 'styled-components';
import { IProductProps, IProductResponse, POSITION } from '../../../utils';

const ProductList = styled(motion.div)`
  transition: all 0.3s;
  display: flex;
  padding: 0px 10px;
  flex-flow: nowrap;
  position: relative;
  align-items: center;
`;
const ProductInfoBox = styled(motion.div)`
  display: inline-block;
  margin: 28px 6px;
  width: 110px;
  height: 110px;
  border-radius: ${({ theme }) => theme.bigRadius};
  cursor: pointer;
`;

const ProductInfoImg = styled(motion.img)<{ isfocus: boolean | undefined }>`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  transform-origin: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.bigRadius};
  padding: ${(props) => (props.isfocus ? '1px' : '0px')};
  border: ${(props) =>
    props.isfocus
      ? `2px solid ${props.theme.textRedColor}`
      : `1px solid ${props.theme.textLightGrayColor}`};
`;

interface IProductListProps {
  x: MotionValue<number>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  data: IProductResponse;
}

function ProductListBottom({ x, index, data, setIndex }: IProductListProps) {
  const [isDrag, setIsDrag] = useState(false);
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
    <ProductList
      transition={{
        type: 'spring',
        stiffness: 0,
        damping: 0,
      }}
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 10, right: -50 }}
      dragElastic={1}
      onDragStart={() => {
        setIsDrag(true);
      }}
      onDragEnd={() => {
        setIsDrag(false);
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
            dragConstraints={{ left: 10, right: -50 }}
            onClick={() => {
              if (!isDrag) {
                x.set(POSITION.X[idx]);
              }
            }}
            dragElastic={1}
            isfocus={index ? index === item.productId : undefined}
            src={item.imageUrl}
            onDragStart={() => {
              setIsDrag(true);
            }}
            onDragEnd={() => {
              setIsDrag(false);
            }}
          />
        </ProductInfoBox>
      ))}
    </ProductList>
  );
}

export default ProductListBottom;
