import { Equal, Expect } from "../helpers/type-utils";

type FuncWithMaybePayload<T = undefined> = T extends undefined
  ? () => void
  : (payload: T) => void;

const funcWithPayload: FuncWithMaybePayload<{
  id: string;
}> = (payload) => {
  type test = [Expect<Equal<typeof payload, { id: string }>>];
};

const funcWithNoPayload: FuncWithMaybePayload = () => {};

type test = [Expect<Equal<typeof funcWithNoPayload, () => void>>];
