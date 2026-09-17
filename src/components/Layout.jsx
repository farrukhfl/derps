import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import { skipInitialAnimation, clearHydrationFlag } from '../utils/hydrationFlag'

export default function Layout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { clearHydrationFlag() }, [])
  return <><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-ink focus:shadow-lg">Skip to main content</a><ScrollProgress /><Navbar /><motion.main id="main-content" tabIndex={-1} key={pathname} initial={(reduceMotion || skipInitialAnimation) ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}><Outlet /></motion.main><Footer /></>
}
