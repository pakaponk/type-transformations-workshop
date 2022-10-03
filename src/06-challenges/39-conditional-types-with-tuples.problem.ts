import { Equal, Expect } from "../helpers/type-utils";

type SplitPath = ["", "Users", "John", "", "Documents", "notes.txt"];

type RemoveEmptyString<T> = T extends [infer Head, ...infer Tails]
  ? Head extends ""
    ? RemoveEmptyString<Tails>
    : [Head, ...RemoveEmptyString<Tails>]
  : T;

type ProcessedPath = RemoveEmptyString<SplitPath>;

type tests = [
  Expect<Equal<ProcessedPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
