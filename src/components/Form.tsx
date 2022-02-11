import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryStateAtom, scheduleListAtom } from "../atoms";

interface IForm {
  What: string;
  When: string;
}

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
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
  &::placeholder {
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
    border-radius: 8px;
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
  max-width: 100%;
  padding-left: 8px;
  padding-bottom: 12px;
  color: ${(p) => p.theme.highlightColor};
  font-size: 12px;
  opacity: 0.5;
`;

function Form() {
  const setSchedules = useSetRecoilState(scheduleListAtom);
  const category = useRecoilValue(categoryStateAtom);
  const {
    register, //해당 element 나 input 에 validation 규칙을 적용(훅 적용)
    handleSubmit, //This function will receive the form data if form validation is successful.
    formState: { errors }, //에러메세지를 가져와 사용 가능.
    setValue, // name 으로 field 선택해서 그 field 의 value 를 바꿈.
    setError, //에러 설정 함수(원하는 에러 조건 만들기)
  } = useForm<IForm>();//hook Form 작성 <IForm>형태의 object 생성

  const onValid = ({ What, When }: IForm) => {
    if (What === "") {
      setError("What", {}, { shouldFocus: true });
    }
    setSchedules((prev) => [
      { id: Date.now(), text: What, time: When, category },
      ...prev,
    ]);
    setValue("What", ""); //What name 으로 선정된 input 의 값을 빈칸(default)으로 만들어줌.
  }; // Validation 확인 함수


  return (
    <FormBox onSubmit={handleSubmit(onValid)}>
      <What
        {...register("What", {
          required: ' "Nothing?" ',
        })}
        placeholder="What"
      />
      <Err>{errors?.What?.message}</Err>
      <When
        {...register("When", {
          required: ' "We need date/time " ',
        })}
      />
      <Err>{errors?.When?.message}</Err>
      <Btn> Add </Btn>
    </FormBox>
  );
}

export default Form;
