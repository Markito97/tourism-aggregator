import React, {useMemo} from 'react'
import { getMonthData } from 'utils/dateHelpers/getMonthData'
import { getYearMonth } from 'utils/dateHelpers/getYearMonth'
import { Days } from './Days'
import { WeekDay } from './WeekDay'

export const Month = ({year, month}: any): JSX.Element => {

    const days = useMemo(() => getMonthData(year, month), [year, month])
    const values = useMemo(() => [year, month], [year, month])
    return (
        <div>
            <div>
                {getYearMonth(year, month)}
            </div>
        <div>
            <WeekDay/>
            <Days days={days}/>
        </div>
        </div>
    )
}