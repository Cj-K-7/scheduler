import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { scheduleList } from "../atoms";

interface IForm {
    What: string;
    When: string;
  }

const FormBox = styled.form`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin : 20px 0px;
  input {
    margin-bottom: 12px;
    padding: 12px 20px;
  }
`;
const What = styled.input.attrs({ type: "text" })`
  border: none;
  font-weight: 600;
  border-radius: 20px;
  color: ${(p) => p.theme.textColor};
  background-color: ${(p) => p.theme.bgColor2};
  &::placeholder{
    color: ${(p) => p.theme.textColor};
  }
`;
const When = styled.input.attrs({ type: "datetime-local" })`
  border: none;
  font-weight: 600;
  border-radius: 20px;
  color: ${(p) => p.theme.textColor};
  background-color: ${(p) => p.theme.bgColor2};
  ::-webkit-calendar-picker-indicator {
    border-radius : 8px;
    background-color: orange;
  }
`;
const Btn = styled.button`
  padding: 8px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  color: ${(p) => p.theme.bgColor};
  background-color: ${(p) => p.theme.textColor};
  &:hover {
    color: ${(p) => p.theme.hoverColor};
  }
`;
const Err = styled.span`
    padding-left : 8px;
    padding-bottom : 12px;
    color: ${(p) => p.theme.highlightColor};
    font-size: 12px;
    opacity : 0.5;
`;

function Form() {
    const setSchedules = useSetRecoilState(scheduleList);

    const onValid =({What , When}: IForm) =>{
      if (What === "") {
        setError("What", {}, { shouldFocus: true });
      }
      setSchedules((prev) => [
        { id: Date.now(), text: What, time: When, category: "to_Do" },
        ...prev,
      ]);
      setValue("What", ""); //What 빈칸(default)으로 만들어줌.
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError
      } = useForm<IForm>();

  return (
    <FormBox onSubmit={handleSubmit(onValid)}>
      <What
        {...register("What", {
          required: " \"Wirte Task / meetings / Events / Anniversaries\" ",
        })}
        placeholder="What"
      />
      <Err>{errors?.What?.message}</Err>
      <When
        {...register("When", {
          required: " \"We need date/time \" ",
        })}
      />
      <Err>{errors?.When?.message}</Err>
      <Btn> Add </Btn>
    </FormBox>
  );
}

export default Form