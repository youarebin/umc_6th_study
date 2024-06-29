## 영화 소개 웹

* 영화를 소개하는 웹페이지 입니다.
* 현재 상영중, 인기있는, 곧 개봉 예정인, 평점이 높은 영화 정보를 알 수 있습니다.
* 영화의 상세 정보 또한 알 수 있습니다.
* 원하는 영화 정보를 검색할 수 있습니다.

## 개발 환경

* Front : React, styled-components
* Back-end : 제공된 API 활용

## 페이지별 기능
  
### [메인 페이지]

<img width="80%" alt="mainPage" src="https://github.com/youarebin/UMC/assets/111740077/a3acf304-4a46-4530-a0d6-fbcc18ab1a4b">

#### 검색 기능
<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/90b5f447-8d2a-47a9-bb14-575f7163679a"/>

* 검색어를 입력할 경우 해당 검색어를 포함하는 영화들을 보여줍니다. 

### [회원가입 페이지]
<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/e76a5552-7f68-4a6c-bac8-cab7e85b8d5d"/>

* 유효성 검사에 통과할 경우, 버튼이 활성화 됩니다.
* 통과 못할 경우에는, 입력에 따른 경고 메시지가 나옵니다.

### [로그인 페이지]
<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/db60b6f9-1df3-4413-a9e0-ffcfd1a72b47"/>

* 유효성 검사에 통과할 경우, 버튼이 활성화 됩니다.
* 통과 못할 경우에는, 입력에 따른 경고 메시지가 나옵니다.

### [popular 페이지]
<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/89c0de1f-5fc6-4218-8260-9dcd955c14f6"/>

* 현재 인기 있는 영화들을 보여줍니다.
* paignation 구현

### [NowPlaying 페이지]
<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/9ad27a49-e50b-4833-a033-64ae93f1cd7c"/>

* 현재 상영중이 영화들을 보여줍니다.
* infinite Scroll 구현

### [movieDetail 페이지]
<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/b8dc27c1-9598-4b60-aac4-93da1c8256a6"/>

<img width="80%" src="https://github.com/youarebin/UMC/assets/111740077/9173a95c-d716-4f2a-a25a-65c5685ad4cd"/>

* 영화를 클릭할 경우 이 페이지로 이동합니다.
* 포스터, 제목, 감독, 별점, 줄거리, 출연자 같은 영화의 상세 정보를 알려줍니다.

### [상하단 배너]

* 상단바의 텍스트를 클릭하면, 각각의 페이지로 이동합니다.

### [사이드 바]
<img width="560" alt="mini" src="https://github.com/youarebin/UMC/assets/111740077/79692dcd-6854-4a22-bd11-35c1830d7a2d">

* 화면의 가로 길이가 900보다 작게 되면, 상단바 대신 사이드바 아이콘이 나타납니다.
  
<img width="557" alt="mini2" src="https://github.com/youarebin/UMC/assets/111740077/27aa7e2b-6c1b-41e8-9ca2-2fa17c8db763">

* 사이드바 아이콘 클릭시 각 페이지로 이동할 수 있는 사이드바가 나타납니다.
