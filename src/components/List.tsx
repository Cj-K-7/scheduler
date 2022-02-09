import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scheduleList } from "../atoms";

const Schedule_ul = styled.ul`
  background-color: ${(p) => p.theme.bgColor1};
  margin-top: 18px;
  div {
    padding : 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const What = styled.div`
    padding : 8px;
`;
const When = styled.div`
    padding : 8px;
`;
const Btn = styled.button`
    margin-left:20px;
    padding : 8px;
`;

function List() {
    const schedules= useRecoilValue(scheduleList);
  return (
    <Schedule_ul>
      {schedules.map((s) => (
        <li key={s.id}>
          <div>
            <What>{s.text}</What>
            <When>{s.time}</When>
            <Btn>{s.category}</Btn>
          </div>
        </li>
      ))}
    </Schedule_ul>
  );
}

export default List