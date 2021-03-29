import React, { useState } from 'react'
import TuduForm from './TuduForm'
import TuduItem from './TuduItem'
import styled from 'styled-components'

const Tudu = () => {
    const [tudus, setTudus] = useState([
        {
            text: 'Get Started',
            isCompleted: false
        },
    ])

    const addTudu = text => {
        const newTudu = [...tudus, {text}]
        setTudus(newTudu)
    }

    const completeTudu = index => {
        const newTudu =[...tudus]
        newTudu[index].isCompleted = true
        setTudus(newTudu)
    }

    const deleteTudu = index => {
        const newTudu =[...tudus]
        newTudu.splice(index, 1)
        setTudus(newTudu)
    }

    return (
        <TuduPad>
            <TuduTitle>
                Tudu List
            </TuduTitle>
            <TuduForm addTudu={addTudu}/>
            {
                tudus.map((tudu, index) => (
                    <TuduItem
                        key={index}
                        index={index}
                        tudu={tudu}
                        completeTudu={completeTudu}
                        deleteTudu={deleteTudu}
                    />
                ))
            }
        </TuduPad>
    )
}

const TuduTitle = styled.div`
    font-size: 26pt;
    margin-bottom: 20px;
    color:#fff;
`;

const TuduPad = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #100f10;
    padding: 30px;
    min-width: 350px;
    margin: auto;
    border-radius: 20px;
    min-height: 30vh;
`;

export default Tudu
