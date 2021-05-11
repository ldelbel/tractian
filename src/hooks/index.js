import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      ref.current = value

    }, 100)
  })
  return ref.current;
} 