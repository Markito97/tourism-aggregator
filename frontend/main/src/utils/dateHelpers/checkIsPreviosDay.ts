import { startOfDay } from 'date-fns';

interface CheckIsPreviousDayInput {
  year: number;
  month: number;
  day: number | false;
}

export const checkIsPreviousDay = ({
  year,
  month,
  day,
}: CheckIsPreviousDayInput) => {
  if (!day) return true;

  const currentCellDate = new Date(year, month - 1, day);
  const today = startOfDay(new Date());

  return today > currentCellDate;
};
