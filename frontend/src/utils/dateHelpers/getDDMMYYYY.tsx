export function getDDMMYYYY(DD: number, MM: number, YYYY: number) {
  if (!DD || !MM || !YYYY) return;
  const language = typeof window !== 'undefined' ? navigator.language : 'en-US';
  return new Intl.DateTimeFormat(language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(YYYY, MM - 1, DD));
}

// export const getYearMonth = (year: number | undefined, month: number | undefined) => {
//     if (!year || !month) return;
//     const language = typeof window !== "undefined" ? navigator.language : "en-US";
//     return new Intl.DateTimeFormat(language, {
//       year: "numeric",
//       month: "long",
//     }).format(new Date(year, month - 1));
//   };
