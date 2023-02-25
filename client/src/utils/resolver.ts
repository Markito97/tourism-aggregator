export function resolverLink(url: string): string {
  return `${process.env.SERVER_URL}${url}`
}
