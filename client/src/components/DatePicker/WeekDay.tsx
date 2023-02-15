import React from 'react';
import { getWeekDay } from '../../utils/dateHelpers/getWeekDay';

const language = typeof window !== undefined ? navigator.language : 'en-US'

const weekday = getWeekDay(language)

export const WeekDay = () => {
    console.log(weekday);
    return (
        <div>

        </div>
    )
}