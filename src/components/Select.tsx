import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryStateAtom } from "../atoms";

const CategorySelect = styled.select`
  border: none;
  justify-self: flex-start;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 18px;
  color: ${(p) => p.theme.textColor};
  background-color: ${(p) => p.theme.bgColor2};
  letter-spacing: 2px;
`;

function Select() {
  const [category, setCategory] = useRecoilState(categoryStateAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <CategorySelect value={category} onInput={onInput}>
      <option value={Categories.ToDo}>toDos</option>
      <option value={Categories.Doing}>On it</option>
      <option value={Categories.Done}>Done</option>
    </CategorySelect>
  );
}

export default Select;
