# <b>styled-component로 화면 요소 만들기 (리팩토링 전)</b>
<div align="center">

![main testing](/react-test3/img/sc-before-main.gif)

</div>

<br/><br/>

# :dart: 요구사항
<div align="center">

![requirement](/react-test3/img/requirement.jpg)

</div>
  
* **Button**
  - `styled-components`를 이용해 구현하며, `props`를 적절하게 활용할 것
  - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현

<br />

* **Modal**
  - `취소`, `확인`이 있고 overlay 클릭 시 모달이 닫히지 않음
  - `닫기` 버튼만 있고, overlay 클릭 시 모달이 닫힘
  - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 하며 위에서 만든 버튼 재사용 가능

<br />

* **Input**
  - 일반 형식의 input
  - 숫자를 넣었을 때 3자리 숫자마다 `,`가 찍히는 input
  - form을 구현하고 각 input에 값 입력 후 `저장`버튼 클릭 시 `{name: '아무 텍스트', price: '콤마가 없는 금액'}`을 `alert`에 표시

<br />

* **Select**
  - select 클릭 시 option들이 나오고 해당 option 클릭 시 select 값 변경
  - 부모 요소에 `overflow: hidden`이 있더라도 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지지 않아야 함

<br/><br/>

# :pushpin: 역할 분담
| 이름 | 컴포넌트 기능 구현 |
|---|---|
| **[신희제](https://github.com/Shinheeje)** | **Button, Select** |
| **[김한솔](https://github.com/hansololiviakim)** | **Input, Modal** |

<br/><br/>

# :open_file_folder: 컴포넌트 분리 구조
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Button.jsx       : 각 버튼을 불러오기 위한 Button 상위 컴포넌트
 ┃ ┣ 📜BtnL.jsx         : Large 버튼 컴포넌트
 ┃ ┣ 📜BtnM.jsx         : Medium 버튼 컴포넌트
 ┃ ┣ 📜BtnS.jsx         : Small 버튼 컴포넌트
 ┃ ┣ 📜Input.jsx        : Input 컴포넌트
 ┃ ┣ 📜Modal.jsx        : 각 모달을 불러오기 위한 Modal 상위 컴포넌트
 ┃ ┣ 📜ModalQuote.jsx   : 버튼이 2개 있는 모달 컴포넌트
 ┃ ┣ 📜ModalSingle.jsx  : 버튼이 1개 있는 모달 컴포넌트
 ┃ ┗ 📜Select.jsx       : Select 컴포넌트
 ┣ 📜App.jsx
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

<br/><br/>

# [:car: 리팩토링 후 repository로 이동하기](https://github.com/Shinheeje/react-styled-component2)

(_텍스트 클릭 시 해당 repo로 이동합니다._)