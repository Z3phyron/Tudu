import React, { useState } from 'react'
import styled from 'styled-components'

const TuduForm = ({addTudu}) => {
    const [value, setValue] = useState('')

   const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTudu(value);
        setValue('');
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Input
             className='input'
             value={value}
             onChange={e => setValue(e.target.value)} />

        </Form>
    )
}

const Form = styled.form`
   display: flex;
   justify-content: center;
   width: 100%;
    margin-bottom: 3vh;
`;

const Input = styled.input `
    width:100%;
    padding: 10px;
    border-radius:10px;
    outline: none;
    border: none;
    font-size: 16pt;
    background: #262726;
    color: #f7f7fe;
    display:block;
    text-transform: capitalize;
`;

export default TuduForm
