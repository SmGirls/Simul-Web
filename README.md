# 프로젝트 소개 
이 프로젝트는 오픈소스 물류관리 소프트웨어인 "Warehouse Management System"을 활용하여 다양한 창고물류 입출력 시스템을 해상 물류 컨테이너 시스템에 효과적으로 적용하여 시뮬레이션하는 것을 목표로 한다. 이를 위해 "쿠버네티스" 환경에서 운영하여 대량의 시뮬레이션을 실시할 수 있으며, 이를 통해 빠르고 효율적으로 인프라를 관리하고 컨테이너 물류 시스템을 안정적으로 운영하고자 한다. 

## 작품 기능
ㅇ 효율성있는 물류 선적 알고리즘 <br>
ㅇ 물류 관리 소프트웨어를 통한 시뮬레이션 데이터 입출력    <br>
ㅇ 실제 선박에 선적되는 수천톤의 수하물에 해당하는 컨테이너 물류 입출력  <br>
   ㅇ 대량의 데이터가 담긴 csv 파일 입력 <br>
   ㅇ 데이터 수기 입력 <br>
ㅇ 입력 데이터에 따른 물류 선적 시뮬레이터 동작과 결과물 출력  <br>
ㅇ 쿠버네티스를 사용한 마이크로서비스 운영/관리

## 프로젝트 시나리오
![image](https://github.com/SmGirls/SmGirlsDocker/assets/79689822/a28dcbc5-a072-4c9f-bb36-df92c9b95a65)


## SW 구성도
![image](https://github.com/SmGirls/SmGirlsDocker/assets/79689822/d842325d-ddcf-4a87-9e56-d1cc44c55450)

## PV 와 PVC 배치도
![image](https://github.com/SmGirls/SmGirlsDocker/assets/79689822/7252f82c-f18e-405e-8e51-14b23525d82d)

## 프로젝트 영상 요약 소개
[유튜브 링크](https://www.youtube.com/watch?v=VAB8FhqrSd4)

---

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
│   └── car.png
├── components
│   ├── Item
│   │   ├── Item.css
│   │   └── Item.js
│   ├── ItemCsv
│   │   └── ItemCsvUpload.js
│   ├── ItemSelf
│   │   ├── ItemSelf.css
│   │   └── ItemSelf.js
│   ├── Menu
│   │   ├── Menu.css
│   │   └── Menu.js
│   └── Table
│       └── ItemTable.js
├── css
│   └── reset.css
├── index.css
├── index.js
├── pages
│   └── CsvDetail
│       ├── ItemHeader.css
│       └── ItemHeader.js
├── photos
│   ├── palisade.png
│   ├── sonata.png
│   └── staria.png
├── reportWebVitals.js
└── setupTests.js
```

- `assets/` : 이미지 파일 위치
- `components/` : 여러 page 에서 쓰일 수 있는 `Component` 한 폴더 아래에 js, css 모두 위치
- `css/` : 공용 css
- `pages/` : 한 페이지를 표현하는 폴더 한 폴더 아래에 js, css 모두 위치
- `App.js` : 모든 페이지 render
