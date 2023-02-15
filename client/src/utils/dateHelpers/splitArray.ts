type MonthTableRowType = Array<number | false>;

export const splitArray = (array: MonthTableRowType, part: number): MonthTableRowType[] => {
    const tmp = [];
    for (let i = 0; i < array.length; i += part) {
      tmp.push(array.slice(i, i + part));
    }
  
    const lastTmpRow = tmp[tmp.length - 1];
    if (lastTmpRow.length < part) {
      const requiredCellCount = part - lastTmpRow.length;
      lastTmpRow.push(...Array(requiredCellCount).fill(false));
    }
  
    return tmp;
  };