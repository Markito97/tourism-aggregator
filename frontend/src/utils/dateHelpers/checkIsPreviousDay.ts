import { startOfDay } from "date-fns";

export function checkIsPreviousDay(year: number, month: number, day: number | false) {
  if (!day) return true;
  const currentCellDate = new Date(year, month - 1, day);
  const today = startOfDay(new Date());
  return today > currentCellDate;
}
