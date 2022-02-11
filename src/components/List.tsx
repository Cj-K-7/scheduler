import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, ISchedule, scheduleListAtom } from "../atoms";

const Schedule = styled.li`
  padding: 10px 14px;
  background-color: ${(p) => p.theme.bgColor1};
  margin-bottom: 16px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const What = styled.input`
  margin-bottom : 5px;
  padding: 2px 8px;
  width : 95%;
  background: inherit;
  border: none;
  font-size: 18px;
  color: ${(p) => p.theme.highlightColor};
  &:hover{
    color: ${(p) => p.theme.hoverColor};
    box-shadow: 0px 3px 0px ${p=>p.theme.bgColor2};
  }
`;
const When = styled.div`
  padding: 8px;
`;
const Btn = styled.button`
  position: relative;
  margin-left: 20px;
  border-radius : 5px;
  padding: 8px;
  border: none;
  box-shadow: 3px 3px 1px ${p=>p.theme.textColor};
  &:active{
    left: 3px;
    top: 3px;
    box-shadow: none;
  }
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
        <When>{time.replace('T', '\n')}<span></span></When>
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
