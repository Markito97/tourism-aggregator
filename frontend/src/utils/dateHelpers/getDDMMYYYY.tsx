export function getDDMMYYYY(
  DD: number | undefined,
  MM: number | undefined,
  YYYY: number | undefined,
): string {
  if (!DD || !MM || !YYYY) return;
  const language = typeof window !== 'undefined' ? navigator.language : 'en-US';
  return new Intl.DateTimeFormat(language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(YYYY, MM - 1, DD));
}
