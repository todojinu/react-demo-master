###2.1 Our First Styled Components

1. 프로젝트 설치
   > `npx create-react-app 프로젝트명`
2. styled-components 설치
   > `npm i styled-components`
3. styled-components

   > - styled-components 에서는 모든 style은 컴포넌트를 사용하기 전에 미리 컴포넌트에 포함된다.
   > - javascript 대신 css 문법을 사용해서 css를 적용할 수 있다.
   > - styled.태그명`css코드`; 와 같이 작성한다.
   > - styled-component 사용 전

   ```
   return (
     <div style={{ display: "flex" }}>
       <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
       <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
     </div>
   );
   ```

   > - styled-component 사용 후

   ```
    import styled from "styled-components";

    const Father = styled.div`
      display: flex;
    `;

    const BoxOne = styled.div`
      background-color: teal;
      width: 100px;
      height: 100px;
    `;

    const BoxTwo = styled.div`
      background-color: tomato;
      width: 100px;
      height: 100px;
    `;

    function App() {
      return (
        <Father>
          <BoxOne />
          <BoxTwo />
        </Father>
      );
    }
   ```

   > - styled components는 자동으로 class 명을 생성하고 그 class 안에 style을 저장해둔다.

###2.2 Adapting and Extending

- 확장 가능한 styled component 만들기

  > - 컴포넌트에 데이터를 보내는 방식인 prors을 사용한다.

  ```
  const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
  `;

  function App() {
    return (
      <Father>
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
      </Father>
    );
  }
  ```

  > - 기존 컴포넌트를 확장해 사용할 수 있다.
  >   styled(기존컴포넌트)`추가적인 css 코드`;

  ```
  // 기존 Box의 모든 속성들을 들고 온 다음 추가적인 스타일을 넣을 수 있음.
  const Circle = styled(Box)`
    border-radius: 50px;
  `;
  ```
