"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import the Router component with no SSR
const RouterComponent = dynamic(() => import("./router-component"), { ssr: false })

export default function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR, render a simple loading state
  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
          <p>Please wait while we load the application.</p>
        </div>
      </div>
    )
  }

  return <RouterComponent />
}
