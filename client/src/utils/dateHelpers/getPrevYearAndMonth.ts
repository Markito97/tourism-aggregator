export const getPrevYearAndMonth = (year: number, month: number): [number, number] => {
    const firstMonth = 1;
    const lastMonth = 12;
  
    if (month === firstMonth) {
      return [year - 1, lastMonth];
    }
  
    return [year, month - 1];
  };