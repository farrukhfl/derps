import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return <><ScrollProgress /><Navbar /><motion.main key={pathname} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}><Outlet /></motion.main><Footer /></>
}
