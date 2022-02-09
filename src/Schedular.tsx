import { text } from 'node:stream/consumers';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Form = styled.form``;
const What = styled.input.attrs({ type : "text", required: true })``;
const When = styled.input.attrs({ type : "date", required: true })`
::-webkit-datetime-edit { padding: 0; }
::-webkit-datetime-edit-fields-wrapper { background: #ffffff; }
::-webkit-datetime-edit-text { color: red;}
::-webkit-datetime-edit-month-field { color: blue; }
::-webkit-datetime-edit-day-field { color: green; }
::-webkit-datetime-edit-year-field { color: purple; }
::-webkit-calendar-picker-indicator { background-color: orange; }
`;
const Btn = styled.button``;

function Schedular() {
    const [what,setWhat] = useState("");
    const [when,setWhen] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) =>{
        const {
          currentTarget: { value },
        } = event;
        setWhat(value);
    }
    const onSetDate = (event:React.FormEvent<HTMLInputElement>) =>{
        const {
          currentTarget: { value },
        } = event;
        setWhen(value);
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log( what, when );
    }
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <What placeholder="What" value={what} onChange={onChange} />
        <When type="date" value={when} onChange={onSetDate} />
        <Btn> Add </Btn>
      </Form>
    </Container>
  );
}

export default Schedular;
