export function getString<Type>(value: Type): Type | null {
  return typeof value === 'string' ? value : null;
}
