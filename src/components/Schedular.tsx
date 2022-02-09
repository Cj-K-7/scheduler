import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import Form from "./Form";
import List from "./List";



interface TitleProps{
  isDark: boolean;
}

const Container = styled.div`
  max-width: 100vw;
  display:flex;
  flex-direction:column;
  align-items : center;
  justify-content: center;
  margin: 20px;
`;
const Title = styled.h1<TitleProps>`
  font-size : 42px;
  button{
    position : relative;
    bottom : 8px;
    left : 10px;
    padding : 10px;
    border : 1px solid ${p => p.isDark ? "#F8F8E5": "#303653"};
    border-radius: 50%;
    font-size : 20px;
    background-color : transparent;
    transition : 0.2s;
    &:hover {
      background-color : ${p => p.isDark ? "#F8F8E5": "#303653"};
      box-shadow : 2px 2px 3px rgba(0,0,0,0.6);
    }
  }
`;


function Schedular() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);


  return (
    <Container>
      <Title isDark={isDark}>
        Schedules
        <button onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? "☀️" : "🌙"}
        </button>
      </Title>
      <Form/>
      <List/>
    </Container>
  );
}

export default Schedular;
