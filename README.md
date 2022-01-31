# 14팀 기초 세팅

## 설치 방법
```
npm install
```
```
npm start
```

## 폴더 구조

``` 
src
 ┣ __test__
 ┣ assets
 ┃ ┗ images
 ┣ components
 ┃ ┣ admin
 ┃ ┣ form
 ┃ ┃ ┣ FormCheckBox.js
 ┃ ┃ ┣ FormDatePicker.js
 ┃ ┃ ┣ FormInput.js
 ┃ ┃ ┣ FormRadio.js
 ┃ ┃ ┣ FormSelect.js
 ┃ ┃ ┣ FormSelectBox.js
 ┃ ┃ ┗ FormTextArea.js
 ┃ ┗ index.js
 ┣ hooks
 ┣ pages
 ┃ ┗ admin
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ exposureNSalesPeriod
 ┃ ┃ ┃ ┃ ┗ ExposureNSalesPeriod.js
 ┃ ┃ ┃ ┣ productDelivery
 ┃ ┃ ┃ ┃ ┗ ProductDelivery.js
 ┃ ┃ ┃ ┣ productImg
 ┃ ┃ ┃ ┃ ┗ ProductImg.js
 ┃ ┃ ┃ ┣ productInfo
 ┃ ┃ ┃ ┃ ┗ ProductInfo.js
 ┃ ┃ ┃ ┣ productInfoNotice
 ┃ ┃ ┃ ┃ ┗ ProductInfoNotice.js
 ┃ ┃ ┃ ┣ productOption
 ┃ ┃ ┃ ┃ ┗ ProductOption.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┗ Admin.js
 ┣ services
 ┣ styles
 ┃ ┣ GlobalStyle.js
 ┃ ┣ Theme.js
 ┃ ┗ index.js
 ┣ utils
 ┃ ┗ index.js
 ┣ App.js
 ┗ index.js
 ```
 
 + 폴더명과 파일 이름은 바꾸어야 합니다.

# 세팅

## styled-component

    ThemeProvider 와 GlobalStyle 을 적용한 상태입니다.
    
    
    

## .eslintrc 와 .prettierrc 그리고 babel.config 을 적용한 상태입니다.




## jsconfig.json 세팅

    jsconfig.json 파일을 통해 baseUrl : "src" 폴더로 해놓아서 절대경로를 이용하는 상태입니다.
