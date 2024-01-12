export type RequiredOneOf<T, K extends keyof T> = {
  [P in K]: Omit<T, P> & { [S in P]?: undefined };
}[K] extends infer O
  ? { [K in keyof O]: O[K] }
  : never;
