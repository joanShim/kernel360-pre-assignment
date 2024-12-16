### 컴포넌트 설계 시 고려했던 부분

피그마 상에서 유추할수 있는 요구사항만을 구현하기에는 훨씬 더 간단하게 완성할 수도 있었지만 추후 데이터 양이 늘거나 많은 페이지가 추가될 때를 고려하여 확장할 수 있도록 컴포넌트를 설계했다.

### 폴더 구조 및 컴포넌트 구조 요약

```
📦src
┣ 📂components
┃ ┣ 📂layout
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┣ 📜Header.style.jsx
┃ ┃ ┣ 📜Layout.jsx
┃ ┃ ┣ 📜SideMenu.jsx
┃ ┃ ┗ 📜SideMenu.style.jsx
┃ ┗ 📂ui
┃ ┃ ┣ 📜CardCarousel.jsx
┃ ┃ ┣ 📜CardCarousel.style.jsx
┃ ┃ ┣ 📜CardGrid.jsx
┃ ┃ ┣ 📜CardGrid.style.jsx
┃ ┃ ┣ 📜FollowButton.jsx
┃ ┃ ┣ 📜MentorCard.jsx
┃ ┃ ┣ 📜MentorCard.style.jsx
┃ ┃ ┣ 📜Notification.jsx
┃ ┃ ┣ 📜Notification.style.jsx
┃ ┃ ┣ 📜ProfilePic.jsx
┃ ┃ ┣ 📜ProfilePic.style.jsx
┃ ┃ ┣ 📜Title.jsx
┃ ┃ ┣ 📜Toolbar.jsx
┃ ┃ ┗ 📜Toolbar.style.jsx
┣ 📂data
┃ ┣ 📜mentors.json
┃ ┗ 📜recent-mentors.json
┣ 📂pages
┃ ┣ 📂Mentors
┃ ┃ ┗ 📜index.jsx
┃ ┗ 📜ComingSoon.jsx
┣ 📂styles
┃ ┣ 📜globalStyles.js
┃ ┗ 📜theme.js
┣ 📜App.js
┣ 📜App.test.js
┣ 📜constants.js
┗ 📜index.js
```

### 왜 이렇게 설계했는지

크게는 레이아웃을 위한 컴포넌트와 콘텐츠 표시를 위한 카드 컴포넌트로 구분하여 생각했다. 공통적인 카드와 타이틀 컴포넌트를 만들고 그것을 활용해서 캐러셀과 그리드를 정의했다. 작은 규모의 프로젝트라서 스타일링 파일을 굳이 분리하지 않는 것이 더 빠른 작업이 가능했겠지만, 재사용성과 확장성을 염두에 두는 게 과제의 의도 중 하나인 것 같아 분리하여 설계했다.

### 내가 만든 컴포넌트들의 재사용성에 대해 스스로 평가해보기

최대한 컴포넌트 형태에 맞는 보편적인 네이밍을 적용했고 데이터 구조를 props로 받아 렌더하기 때문에 데이터 필드가 변하더라도 빠르게 수정하여 대응할수 있으리라 생각한다.
아쉬운점은 styles theme 속성들을 뒤늦게 정의해서 제대로 치환하지 못한 부분이 아직 존재한다.

### 컴포넌트를 설계하며 어려웠던 점

유사하지만 조금 다른 컴포넌트들을 어떻게 나눠서 정의할지 결정하는게 어려웠다.
스타일링 도구로 tailwind에 너무 익숙해져서 초반에 styled-component를 사용하여 스타일링 파일을 분리할지 통합할지 고민되어서 구조를 결정하는 것이 어려웠다.
