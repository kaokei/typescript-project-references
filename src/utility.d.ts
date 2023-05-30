type Values<T> = T[keyof T];

type UnionKeys<T> = T extends unknown ? keyof T : never;

type UnionValues<T, K extends PropertyKey> = T extends Record<K, infer U>
  ? U
  : never;

type OfUnion<T> = {
  [P in UnionKeys<T>]: UnionValues<T, P>;
};

type PRELOAD_API_TYPE<T> = OfUnion<Values<T>>;

// declare type Values<T> = T[keyof T];
type Test123 = string | number;
