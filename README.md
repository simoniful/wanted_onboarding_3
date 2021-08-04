# Wanted Front-end onBoarding # 3

## Demo Link
🔗 Demo Page : [https://jaranda-coco.netlify.app/](https://jaranda-coco.netlify.app/)


## 💬 프로젝트 개요
Jaranda : 유저 정보를 입력받아 회원가입 페이지 구현 / 로그인 & 로그아웃 기능 구현 / 다양한 메뉴를 가진 Admin 홈페이지 구현  

## 😀 프로젝트 Memebers
|이름|GitHub|담당|
|------|---|---|
|이제찬|[jeky22](https://github.com/jeky22)|Login/Singup: 주소 API 활용 데이터 상태 저장, 팝업(modal) 구현|
|김동원|[dongwonnn](https://github.com/dongwonnn)|Admin: 테이블 컴포넌트, 페이지네이션 + util 함수|
|장명진|[thinkJin6](https://github.com/thinkJin6)|Login/Singup: localstorage 관련 Util, Mock 구성, 레이아웃|
|이제경|[jejelee94](https://github.com/jejelee94)|Admin: 데이터테이블 /검색기능 계정추가|
|김승원|[lumpenop](https://github.com/lumpenop)|Admin: 스타일링 + 그래프시각화|
|남택훈|[tech-hoon](https://github.com/tech-hoon)|Admin: 일반사용자/관리자 컴포넌트|
|이상훈|[simoniful](https://github.com/simoniful)|Login/Singup: input, form 커스텀 훅, 유효성 검증|
|최인경|[ink-0](https://github.com/ink-0)|Admin: 스타일링 + 그래프시각화|

## 🪄 실행 방법

#### Project setup
`npm install`
#### Compiles and hot-reloads for development
`npm run serve`
#### Compiles and minifies for production
`npm run build`

## 🔧 Skills

- React, React Router, Styled Components, ES6+

## 🐱‍👤 협업 Tool

- Slack, Git-Hub

## 🎬 기능구현 데모

![Coming soon]()
![Coming soon]()


## 👍🏻 구현 기능 상세
사용자는 회원가입 및 로그인을 통해 userType별 다른 메뉴를 가진 페이지를 볼 수 있다.
Admin 계정으로 로그인을 통해 userInfo를 관리하고 관련 데이터 시각화를 볼 수 있다.

### 1. 기본 요구 사항

> - 필수 포함 userInfo : 이름 / 주소 (팝업을 이용해서 입력받음) / 신용카드 정보 (팝업을 이용해서 입력받음) / 나이
> - LocalStorage를 사용해서 정보 저장 및 관리 
> - 외부 API를 사용하지 않고, Client의 리소스만 사용합니다.
> - 관리자 로그인 시 페이지 내 필수 요소 : Data Table / userInfo 페이지네이션 / 검색기능 

> ### 과제 구현 목록
> - [x] FunctionComponent 사용
> - [x] LocalStorage 사용해서 이력을 관리
> - [x] 외부 API를 사용하지 않고, Client의 리소스만 사용
> - [x] 편리하게 Storage를 사용할 수 있는 Utils 생성
> - [x] Table, 검색 기능 등 관련 UI 구성

### 2. 공통 컴포넌트 와 프로젝트 구조
#### 프로젝트 구조
```html
📦src
 ┣ 📂components
 ┃ ┣ 📜AccountButton.jsx
 ┃ ┣ 📜Graph.jsx
 ┃ ┣ 📜Navbar.jsx
 ┃ ┣ 📜Pagination.js
 ┃ ┣ 📜SearchBox.jsx
 ┃ ┣ 📜UserData.js
 ┃ ┗ 📜UserTable.js
 ┣ 📂data
 ┃ ┗ 📜userData.json
 ┣ 📂hooks
 ┃ ┗ 📜useInput.js
 ┣ 📂pages
 ┃ ┣ 📜Admin.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜Signup.jsx
 ┃ ┗ 📜User.jsx
 ┣ 📂styles
 ┃ ┣ 📂icons
 ┃ ┃ ┗ 📜SearchIcon.jsx
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┗ 📜layouts.js
 ┣ 📂utils
 ┃ ┣ 📂storage
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂test
 ┃ ┃ ┣ 📜currentUsers.test.js
 ┃ ┃ ┗ 📜getTotalPage.test.js
 ┃ ┣ 📜config.js
 ┃ ┣ 📜constants.js
 ┃ ┣ 📜currentUsers.js
 ┃ ┣ 📜getTotalPage.js
 ┃ ┣ 📜regex.js
 ┃ ┗ 📜usersData.json
 ┣ 📜App.js
 ┣ 📜Routes.js
 ┗ 📜index.js
```
#### 공통 component
> - Nav, Table 등 
> - Utils 파일 생성


### 3. 📎 Route Path

> - /Login : 로그인 페이지
> - /Signup : 회원가입 페이지
> - /user : 일반 회원 페이지
> - /admin : 관리자 페이지

### 4. 페이지 별 상세 기능
#### Login
> - 유효성 검증 및 사용자 userType에 따른 분기로 다른 페이지 링크

#### Signup
> - 유효성 검증 시 관련 상태 메세지 노출
> - 가입 시 해당 정보 LocalStorage 저장
> - API 활용 주소 검색
> - 팝업창 사용 주소, 신용카드 정보 기입 

#### User
> - 관리자가 설정한 등급에 따라 다른 메뉴 노출

#### Admin
> - 유저 정보를 불러와 Table로 관리 가능
> - 유저 정보 검색 가능
> - 페이지네이션을 통한 유저 정보 목록화
> - 차트, 그래프를 통한 데이터 시각화


## Reference

- 이 프로젝트는 [자란다](https://jaranda.kr/index_parent)의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이프로젝트에서 사용하고 있는 data는 자란다 측에서 제공받았습니다.

---
