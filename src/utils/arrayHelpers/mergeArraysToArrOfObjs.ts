export function mergeArraysToArrOfObjs<Type>(first: Type[], second: Type[]) {
  return first.map((key, index) => ({ field: key, value: second[index] }));
}
