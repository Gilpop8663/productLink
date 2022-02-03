import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useMotionValue } from 'framer-motion';
import { getProduct, IProductResponse } from 'utils';
import { HouseIntroduction, PageTitle, ProductListBottom } from './components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.textBlackColor};
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
  console.log(data);
  const whatTest = {
    id: 89776,
    imageUrl:
      '//cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg',
    productList: [
      {
        productId: 2197621,
        productName: '애틱 타일 이지케어 발수러그',
        outside: true,
        pointX: 486,
        pointY: 197.667,
        priceOriginal: 76000,
        priceDiscount: 76000,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png',
      },
      {
        productId: 83544,
        productName: '플로윙 화이트 원형 테이블',
        outside: false,
        pointX: 319,
        pointY: 170.667,
        priceOriginal: 120000,
        priceDiscount: 74000,
        discountRate: 38,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/20200916133257f6yBWCxVRR.jpg',
      },
      {
        productId: 134225,
        productName: '트리니 벽난로콘솔',
        outside: true,
        pointX: 288,
        pointY: 89.6666,
        priceOriginal: 99000,
        priceDiscount: 99000,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202104291640198PeKIa8W06.JPG',
      },
      {
        productId: 2191773,
        productName: '루아 자수 레이스 커튼',
        outside: true,
        pointX: 150,
        pointY: 201.667,
        priceOriginal: 62900,
        priceDiscount: 62900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png',
      },
      {
        productId: 1227757,
        productName: 'TÄLLBYN 텔뷘',
        outside: true,
        pointX: 205,
        pointY: 443.667,
        priceOriginal: 89900,
        priceDiscount: 89900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG',
      },
      {
        productId: 421913,
        productName: 'GRUET 사이드테이블/트롤리 시리즈',
        outside: false,
        pointX: 353,
        pointY: 270.646,
        priceOriginal: 55900,
        priceDiscount: 29900,
        discountRate: 47,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg',
      },
      {
        productId: 1531860,
        productName: '마크라메 자개모빌 풍성형',
        outside: false,
        pointX: 172,
        pointY: 117.667,
        priceOriginal: 65000,
        priceDiscount: 45000,
        discountRate: 31,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg',
      },
      {
        productId: 2197173,
        productName: '루아 자수 레이스 커튼',
        outside: true,
        pointX: 150,
        pointY: 201.667,
        priceOriginal: 62900,
        priceDiscount: 62900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png',
      },
      {
        productId: 1272757,
        productName: 'TÄLLBYN 텔뷘',
        outside: true,
        pointX: 205,
        pointY: 443.667,
        priceOriginal: 89900,
        priceDiscount: 89900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG',
      },
      {
        productId: 2192113,
        productName: 'GRUET 사이드테이블/트롤리 시리즈',
        outside: false,
        pointX: 353,
        pointY: 270.646,
        priceOriginal: 55900,
        priceDiscount: 29900,
        discountRate: 47,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg',
      },
      {
        productId: 15108620,
        productName: '마크라메 자개모빌 풍성형',
        outside: false,
        pointX: 172,
        pointY: 117.667,
        priceOriginal: 65000,
        priceDiscount: 45000,
        discountRate: 31,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg',
      },
      {
        productId: 21997173,
        productName: '루아 자수 레이스 커튼',
        outside: true,
        pointX: 150,
        pointY: 201.667,
        priceOriginal: 62900,
        priceDiscount: 62900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png',
      },
      {
        productId: 12782757,
        productName: 'TÄLLBYN 텔뷘',
        outside: true,
        pointX: 205,
        pointY: 443.667,
        priceOriginal: 89900,
        priceDiscount: 89900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG',
      },
      {
        productId: 2179213,
        productName: 'GRUET 사이드테이블/트롤리 시리즈',
        outside: false,
        pointX: 353,
        pointY: 270.646,
        priceOriginal: 55900,
        priceDiscount: 29900,
        discountRate: 47,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg',
      },
      {
        productId: 16518620,
        productName: '마크라메 자개모빌 풍성형',
        outside: false,
        pointX: 172,
        pointY: 117.667,
        priceOriginal: 65000,
        priceDiscount: 45000,
        discountRate: 31,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg',
      },
      {
        productId: 21975173,
        productName: '루아 자수 레이스 커튼',
        outside: true,
        pointX: 150,
        pointY: 201.667,
        priceOriginal: 62900,
        priceDiscount: 62900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png',
      },
      {
        productId: 12724757,
        productName: 'TÄLLBYN 텔뷘',
        outside: true,
        pointX: 205,
        pointY: 443.667,
        priceOriginal: 89900,
        priceDiscount: 89900,
        discountRate: 0,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG',
      },
      {
        productId: 2139213,
        productName: 'GRUET 사이드테이블/트롤리 시리즈',
        outside: false,
        pointX: 353,
        pointY: 270.646,
        priceOriginal: 55900,
        priceDiscount: 29900,
        discountRate: 47,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg',
      },
      {
        productId: 15186220,
        productName: '마크라메 자개모빌 풍성형',
        outside: false,
        pointX: 172,
        pointY: 117.667,
        priceOriginal: 65000,
        priceDiscount: 45000,
        discountRate: 31,
        imageUrl:
          '//cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg',
      },
    ],
  };

  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
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
