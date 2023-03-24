import { isEqual } from "date-fns";

interface IsEqualDate {
  (date1: Date | null | false, date2: Date | null | false): boolean;
}

export const isEqualDate: IsEqualDate = (date1, date2) => {
  return !date1 || !date2 ? false : isEqual(date1, date2);
};
