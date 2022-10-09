import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  border: 0;
  border-radius: 15px;
  background-color: tomato;
  color: white;
`;

// styled component에 속성 추가
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      {/* button -> a 태그로 변경 */}
      <Btn as="a" href="/">
        Log in
      </Btn>{" "}
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
