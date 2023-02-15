import React, {useMemo} from 'react'

export const Month = ({year, month}: MonthProprety): JSX.Element => {

    const days = useMemo(() => getMonthData(year, month), [year, month])
    const values = useMemo(() => [year, month], [year, month])
    return (
        <div>
            <div className={styles.header}>
                {getYearMonth(year, month)}
            </div>
        <div>
            <WeekDay/>
            <Days days={days}/>
        </div>
        </div>
    )
}