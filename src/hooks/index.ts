import { useEffect, useRef } from "react";

export const usePrevious = (value: number) => {
  const ref = useRef<undefined | number>();
  useEffect(() => {
    setTimeout(() => {
      ref.current = value

    }, 100)
  })
  return ref.current;
} 