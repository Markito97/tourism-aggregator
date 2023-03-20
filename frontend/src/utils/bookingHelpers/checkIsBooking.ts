export function checkIsBooking(
  start: number,
  end: number,
  range: { CHECK_IN: number; CHECK_OUT: number }[],
): boolean {
  return range.every(
    (date) =>
      (start < date.CHECK_IN && end < date.CHECK_IN) ||
      (start > date.CHECK_OUT && end > date.CHECK_OUT),
  );
}
