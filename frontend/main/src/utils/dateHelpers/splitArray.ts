export const splitArray = (
  array: Array<number | false>,
  part: number,
): (number | false)[][] => {
  const tmp = [];

  for (let i = 0; i < array.length; i += part) {
    tmp.push(array.slice(i, i + part));
  }

  const lastTmpRow = tmp[tmp.length - 1];
  if (lastTmpRow.length < part) {
    const requiredCellCount = part - lastTmpRow.length;
    lastTmpRow.push(...Array(requiredCellCount).fill(false));
  }

  return tmp;
};
