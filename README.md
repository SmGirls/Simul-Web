## 시작 방법

- `npm install` : 모두 libaray 설치
- `npm start` : 3000 포트에서 시작됨

## 폴더 구조

```
.
├── App.css
├── App.js
├── App.test.js
├── assets
│ └── car.png
├── components
│ └── Menu
│ ├── Menu.css
│ └── Menu.js
├── css
│ └── reset.css
├── index.css
├── index.js
├── logo.svg
├── pages
│ └── CsvDetail
│ ├── CsvDetail.css
│ └── CsvDetail.js
├── reportWebVitals.js
└── setupTests.js
```

- `assets/` : 이미지 파일 위치
- `components/` : 여러 page 에서 쓰일 수 있는 `Component` 한 폴더 아래에 js, css 모두 위치
- `css/` : 공용 css
- `pages/` : 한 페이지를 표현하는 폴더 한 폴더 아래에 js, css 모두 위치
- `App.js` : 모든 페이지 render
