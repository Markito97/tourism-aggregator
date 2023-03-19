export const getYearMonth = (year: number, month: number) => {
  const language = typeof window !== 'undefined' ? navigator.language : 'en-US';
  return new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'long',
  }).format(new Date(year, month - 1));
};
