import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, ISchedule, scheduleListAtom } from "../atoms";

const Schedule = styled.li`
  padding: 8px 12px;
  background-color: ${(p) => p.theme.bgColor1};
  margin-bottom: 16px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const What = styled.input`
  background: inherit;
  border: none;
  font-size: 18px;
  padding: 8px;
  color: ${(p) => p.theme.highlightColor};
`;
const When = styled.div`
  padding: 8px;
`;
const Btn = styled.button`
  margin-left: 20px;
  padding: 8px;
  border: none;
`;

function List({id, text, time, category }: ISchedule) {
  const setState = useSetRecoilState(scheduleListAtom);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setState((pre) => {
      const index = pre.findIndex((list) => list.id === id);
      const newList = [...pre];
      const newState = {
        id,
        text: value,
        time,
        category,
      };
      newList.splice(index, 1, newState);
      return newList;
    });
  }
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setState((pre) => {
      const index = pre.findIndex((list) => list.id === id);
      const newList = [...pre];
      const newState = {
        id,
        text,
        time,
        category: name as ISchedule["category"],
      };
      newList.splice(index, 1, newState);
      return newList;
    });
  };

  const onClickDel = () => {
    setState((arr)=>{
      return arr.filter((data)=> data.id !== id);
    })
  }
  return (
    <Schedule>
      <What defaultValue={text} onChange={onChange}/>
      <div>
        <When>{time}</When>
        {category !== Categories.ToDo && (
          <Btn name={Categories.ToDo} onClick={onClick}>
            to_Do
          </Btn>
        )}
        {category !== Categories.Doing && (
          <Btn name={Categories.Doing} onClick={onClick}>
            Doing
          </Btn>
        )}
        {category !== Categories.Done && (
          <Btn name={Categories.Done} onClick={onClick}>
            Done
          </Btn>
        )}
        <Btn onClick={onClickDel}>❌</Btn>
      </div>
    </Schedule>
  );
}

export default List;
