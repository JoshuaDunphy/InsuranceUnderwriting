"use client"

import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function RootLayout() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render anything during SSR
  if (!isMounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col w-full">
      <SiteHeader />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
