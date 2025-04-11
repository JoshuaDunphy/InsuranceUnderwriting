"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Shield, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setCurrentPath(window.location.pathname)
  }, [])

  // Don't render anything during SSR or if not mounted yet
  if (!isMounted) {
    return null
  }

  // Don't show the header on auth pages
  if (currentPath.startsWith("/auth/")) {
    return null
  }

  const isActive = (path: string) => {
    return currentPath === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container w-full max-w-full px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InsureAI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              to="/dashboard"
              className={`text-sm font-medium ${isActive("/dashboard") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              Dashboard
            </Link>
            <Link
              to="/underwriting"
              className={`text-sm font-medium ${isActive("/underwriting") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              New Application
            </Link>
            <Link
              to="/applications"
              className={`text-sm font-medium ${isActive("/applications") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              Applications
            </Link>
            <Link
              to="/reports"
              className={`text-sm font-medium ${isActive("/reports") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              Reports
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden md:flex">
            <Link to="/auth/sign-in" className="text-primary-foreground">
              Sign In
            </Link>
          </Button>

          <button className="md:hidden p-2 rounded-md border border-input" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col h-full p-4">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">InsureAI</span>
              </Link>
              <button className="p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link to="/dashboard" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <Link to="/underwriting" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>
                New Application
              </Link>
              <Link to="/applications" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>
                Applications
              </Link>
              <Link to="/reports" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>
                Reports
              </Link>
              <div className="h-px w-full bg-border my-2" />
              <Link to="/auth/sign-in" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>
              <Link to="/auth/register" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
