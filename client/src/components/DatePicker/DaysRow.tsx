import React from 'react'
import styles from './DaysRow.module.css'
import {Day} from '../DatePicker/Day'

interface DaysRowProps {
    daysList: Array<number | false>
}

export const DaysRow = ({daysList}: DaysRowProps): JSX.Element => {
    return (
        <div>
            {daysList.map((day, index) => 
                <Day key={index} day={day}/>
            )}
        </div>
    )
}