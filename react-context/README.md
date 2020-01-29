# react-context
## Context API, useContext
> 하위 컴포넌트 전체에 데이터를 공유하는 법
- 데이터를 Set하는 것
  - 가장 상위 컴포넌트 => 프로바이더
- 데이터를 get하는 것
  - 모든 하위 컴포넌트에서 접근 가능
    - 1) 컨슈머로 하는 방법
    - 2) 클래스 컴포넌트의 this.context로 하는 방법
    - 3) 펑셔널 컴포넌트의 useContext로 하는 방법
<br />
[Homework] : 값을 어떻게 변경하는가?