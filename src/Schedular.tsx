import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  What: string;
  When: string;
}

const Container = styled.div`
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;`;
const What = styled.input.attrs({ type: "text" })``;
const When = styled.input.attrs({ type: "datetime-local" })`
  ::-webkit-datetime-edit {
    padding: 0;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    background: #ffffff;
  }
  ::-webkit-datetime-edit-text {
    color: red;
  }
  ::-webkit-datetime-edit-month-field {
    color: blue;
  }
  ::-webkit-datetime-edit-day-field {
    color: green;
  }
  ::-webkit-datetime-edit-year-field {
    color: purple;
  }
  ::-webkit-calendar-picker-indicator {
    background-color: orange;
  }
`;
const Btn = styled.button``;
const Err = styled.span`
    color: red;
    font-size: 12px;
    opacity : 0.5;
`;

function Schedular() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<IForm>();

  const onValid =(data: any) =>{
      if(data.What === ""){
        setError(
          "What",{},{shouldFocus : true}
        );
      }
  }
  
  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <What
          {...register("What", {
            required: "Wirte Task / meetings / Events / Anniversaries",
          })}
          placeholder="What"
        />
        <Err>{errors?.What?.message}</Err>
        <When
          {...register("When", {
            required: "We need date/time",
          })}
        />
        <Err>{errors?.When?.message}</Err>
        <Btn> Add </Btn>
      </Form>
    </Container>
  );
}

export default Schedular;
