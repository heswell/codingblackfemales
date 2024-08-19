import {
  getMovingValueDirection,
  isValidNumber,
  valueChangeDirection,
} from "@vuu-ui/vuu-utils";
import { useEffect, useRef } from "react";

const INITIAL_VALUE = [undefined, undefined, undefined];

type State = [number, unknown, valueChangeDirection];

export function useDirection(key: number, value: unknown) {
  const ref = useRef<State>();
  const [prevKey, prevValue, prevDirection] = ref.current || INITIAL_VALUE;

  const direction =
    key === prevKey && isValidNumber(value) && isValidNumber(prevValue)
      ? getMovingValueDirection(value, prevDirection, prevValue)
      : "";

  useEffect(() => {
    ref.current = [key, value, direction];
  });

  return direction;
}
