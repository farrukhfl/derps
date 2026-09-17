import { motion, useReducedMotion } from 'framer-motion'
import { skipInitialAnimation } from '../utils/hydrationFlag'

const offsets = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

export default function Reveal({ children, className = '', direction = 'up', delay = 0, amount = 0.15 }) {
  const reduceMotion = useReducedMotion()
  const skip = reduceMotion || skipInitialAnimation
  // whileInView only ever applies once the element's viewport intersection
  // fires -- it can't render a resolved style on the very first paint, so
  // skipping it (like `initial`) leaves this node with NO inline style at
  // all, which mismatches the prerendered markup's settled
  // "opacity:1;transform:none". `animate` has no such restriction (it's not
  // viewport-gated), so use it to render the settled state immediately
  // whenever this is the hydration pass -- falling back to the normal
  // scroll-triggered whileInView reveal otherwise.
  return (
    <motion.div
      className={className}
      initial={skip ? false : { opacity: 0, ...offsets[direction] }}
      animate={skip ? { opacity: 1, x: 0, y: 0 } : undefined}
      whileInView={skip ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
