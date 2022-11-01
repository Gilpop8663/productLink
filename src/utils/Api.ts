export interface IProductResponse {
  id: number;
  imageUrl: string;
  productList: [];
}

export interface IProductProps {
  discountRate: number;
  imageUrl: string;
  outside: true;
  pointX: number;
  pointY: number;
  priceDiscount: number;
  priceOriginal: number;
  productId: number;
  productName: string;
}

export function getProduct() {
  return fetch(`https://cdn.ggumim.co.kr/test/image_product_link.json`).then(
    (response) => response.json()
  );
}
//why
