import { splitArray } from "./splitArray";
import { getDate, startOfMonth, endOfMonth } from "date-fns";
import { getRangeArray } from "./getRangeArray";

export const getMonthData = (month: number, year: number) => {
    if (month < 1 || month > 12) {
        return [];
    }
    const date = new Date(year, month - 1);
    const startDay = getDate(startOfMonth(date));
    const endDay = getDate(endOfMonth(date));

    const daysArray = getRangeArray(1, endDay)

    const spaceArray = Array(startDay).fill(false);
    const targetArray = spaceArray.concat(daysArray);
  
    return splitArray(targetArray, 7); // 1d -> 2d
}