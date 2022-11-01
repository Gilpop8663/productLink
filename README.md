## 배포 주소

## <a target="_blank" href="https://master--tiny-sunburst-238263.netlify.app/">상품 정보 사이트</a>

## 회고록
## <a href="https://hell-of-company-builder.tistory.com/255?category=921712">블로그 회고록</a>

## 💻 설치 방법

    npm install
    npm start

## 📂 파일 구조

src  
 ┣ components  
 ┣ pages  
 ┃ ┗ admin  
 ┃ ┃ ┣ components  
 ┃ ┃ ┃ ┣ HouseIntroduction.tsx  
 ┃ ┃ ┃ ┣ PageTitle.tsx  
 ┃ ┃ ┃ ┣ ProductListBottom.tsx  
 ┃ ┃ ┃ ┗ index.ts  
 ┃ ┃ ┗ ProductLink.tsx  
 ┣ styles  
 ┃ ┣ styled.d.ts  
 ┃ ┣ GlobalStyle.ts  
 ┃ ┣ Theme.ts  
 ┃ ┗ index.ts  
 ┣ utils  
 ┃ ┣ Api.ts  
 ┃ ┗ index.ts  
 ┣ App.tsx  
 ┗ index.tsx

## 📝 기능

### 이미지 위의 상품 정보

- Api 의 pointX,Y의 값으로 이미지에 돋보기 모양의 버튼을 표시함으로써 재사용가능한 컴포넌트를 지향했음

- Api가 로딩중일 때 '로딩중입니다...'을 렌더함

- 상단의 돋보기를 클릭할 때 그에 맞는 상품을 하단의 상품 목록에도 표시되도록 하였음

- Api의 pointX,Y 값을 컴포넌트에 전달하여 상품정보창의 말풍선효과와 창의 위치를 조정하였음

<img src="https://user-images.githubusercontent.com/80146176/152396012-efb727dc-baf8-418c-9d76-de4069a06951.gif"/>

---

### 하단의 상품 리스트

- 드래그 스크롤이 가능하며 왼쪽,오른쪽으로 많이 넘어가도 지정한 범위안으로 다시 돌아옴

- 상품 목록 수에 따라서 motionValue 의 x값을 조정하여 표현하도록 하였음

- 드래그 시 클릭이 안되도록 하였음

<img src="https://user-images.githubusercontent.com/80146176/152396427-a0249569-304f-42af-acda-99132150f22c.gif"/>
