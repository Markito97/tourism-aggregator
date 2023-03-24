export const getYearMonth = (year: number | undefined, month: number | undefined) => {
  if (!year || !month) return;
  const language = typeof window !== "undefined" ? navigator.language : "en-US";
  return new Intl.DateTimeFormat(language, {
    year: "numeric",
    month: "long",
  }).format(new Date(year, month - 1));
};
