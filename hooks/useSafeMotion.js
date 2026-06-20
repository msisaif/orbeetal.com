import { useReducedMotion } from "framer-motion";

export function getSafeMotionProps(reduced, props) {
  if (!reduced) return props;
  return {
    initial: false,
    animate: undefined,
    whileInView: undefined,
    transition: { duration: 0 },
  };
}

export function useSafeMotion(props) {
  const reduced = useReducedMotion();
  return getSafeMotionProps(reduced, props);
}
