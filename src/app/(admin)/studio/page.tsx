'use client'
import { useEffect, useState } from 'react'
import Studio from './Studio'

const SanityPage = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [mounted])
  return mounted && <Studio />
}

export default SanityPage
