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

###2.3 'As' and Attr

- styled component 의 태그 변경하기

  > - styled component 에 as 라는 props를 전달하여 style은 유지하고 태그만 변경할 수 있다.

  ```
  const Btn = styled.button`
    border: 0;
    border-radius: 15px;
  `;

  function App() {
    return (
      <Father>
        {/* button -> a 태그로 변경 */}
        <Btn as="a" href="/">Log in</Btn>
      </Father>
    );
  }
  ```

- styled component의 html 태그 속성 설정하기
  > - styled components 가 컴포넌트를 생성할 때 속성값을 설정할 수 있다.
  >   attrs({속성들}) 를 사용해 추가할 속성을 설정
  ```
  const Input = styled.input.attrs({ require: true })`
    background-color: tomato;
  `;
  ```

###2.4 Animation and Preudo Selector

- styled components의 helper function(keyframes)을 import 하여 animation을 추가할 수 있다.

  > `import styled, {keyframes} from "styled-components";`
  > 문법은 다음과 같다.

  ```
  // keyframes`from{css코드}to{css코드}`;
  ```

  > 예제 1

  ```
  const rotationAnimation = keyframes`
  from {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform:rotate(360deg);
    border-radius:100px;
  }
  `;
  const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${rotationAnimation} 1s linear infinite;
  `;
  ```

  > 예제 2

  ```
  const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
  `;
  const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${rotationAnimation} 1s linear infinite;
  `;
  ```

- styled component 안에 있는 일반 태그를 선택하는 방법

  > - 작성한 styled component 안에 접근할 태그를 추가할수 있다.
  > - 모든 component를 styled component로 처리하지 않고 하나의 component만 styled 처리해주어도 다른 component를 target할 수 있다.

  ```
  const Box = styled.div`
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotationAnimation} 1s linear infinite;
    span {
      font-size: 36px;
    }
  `;

  <Box>
    <span>🧑</span>
  </Box>
  ```

- styled component 내부의 component에 hover 효과를 적용할 수 있음
  > - & 는 span을 의미
  ```
  const Box = styled.div`
    span {
      font-size: 36px;
      &:hover {
        font-size: 40px;
      }
    }
  `;
  ```
  > - 위 코드에서 '&'(pseudo selector) 는 span을 의미
  > - `span {&:hover{}}` 는 `span:hover{}` 로도 쓸 수 있다
