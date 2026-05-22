const basePath = process.env.NODE_ENV === "production" ? "/creativeprintnj" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
