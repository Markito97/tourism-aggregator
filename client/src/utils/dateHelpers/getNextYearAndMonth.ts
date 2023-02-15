export const getNextYearAndMonth = (year: number, month: number): [number, number] => {
    const firstMonth = 1;
    const lastMonth = 12;
  
    if (month === lastMonth) {
      return [year + 1, firstMonth];
    }
  
    return [year, month + 1];
  };