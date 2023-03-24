import { PickedDateUnit } from "../../context/DateContext";

export const dateUnitToDateObj = (dateUnit: PickedDateUnit | null): Date | false => {
  if (!dateUnit) return false;
  const { year, month, day } = dateUnit;
  if (!day) return false;
  return new Date(year, month - 1, day);
};
