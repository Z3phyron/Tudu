import React from 'react'
import { BiCheck, BiTrash } from "react-icons/bi";
import styled from 'styled-components'

const TuduItem = ({tudu, index, completeTudu, deleteTudu}) => {

    return (
        <Item
         className='todo'
          style={{textDecoration: tudu.isCompleted ? 'line-through' : 'none'}}>
              <TuduText>
                 {tudu.text}
              </TuduText>
            <div>
                <Button onClick={() => completeTudu(index)}>
                    <BiCheck/>
                </Button>
                <Button onClick={() => deleteTudu(index)}>
                    <BiTrash/>
                </Button>
            </div>
        </Item>
    )
}

const TuduText = styled.div`
    overflow: hidden;
`;

const Item = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
    margin: 10px;
    width: 90%;
    padding: 10px ;
    color: #f7f7fe;
    background: #5414b5;
    border-radius: 5px;
    text-transform: capitalize;
    overflow: hidden
`;

const Button = styled.button`
    font-size: 10pt;
    margin-left: 5px;
    background: #2ca0d2;
    color:#100f10;
    outline: none;
    border: none;
`;


export default TuduItem
