import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom, scheduleListAtom, schedulesSelector } from "../atoms";
import Form from "./Form";
import List from "./List";
import { useEffect } from "react";
import Select from "./Select";
import "../styles/font.css";

interface TitleProps {
  isDark: boolean;
}

const Container = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  h2 {
    font-size: 20px;
  }
`;
const Title = styled.h1<TitleProps>`
  font-size: 42px;
  button {
    width: 50px;
    height: 50px;
    position: relative;
    bottom: 8px;
    left: 10px;
    padding: 10px;
    border: 1px solid ${(p) => (p.isDark ? "#F8F8E5" : "#303653")};
    border-radius: 50%;
    font-size: 20px;
    background-color: transparent;
    transition: 0.2s;
    &:hover {
      background-color: ${(p) => (p.isDark ? "#F8F8E5" : "#303653")};
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
    }
  }
`;
const ScheduleUl = styled.ul`
  margin-top: 18px;
`;

function Schedular() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const allSchedules = useRecoilValue(scheduleListAtom);
  const schedules = useRecoilValue(schedulesSelector);

  useEffect(()=>{
    localStorage.setItem("SCHEDULES", JSON.stringify(allSchedules))
  },[allSchedules]);

  return (
    <Container>
      <Title isDark={isDark}>
        Schedules
        <button onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? "☀️" : "🌙"}
        </button>
      </Title>
      <hr />
      <Select/>
      <Form />
      <ScheduleUl>
        {schedules?.map((data) => (
          <List key={data.id} {...data} />
        ))}
      </ScheduleUl>
    </Container>
  );
}

export default Schedular;
