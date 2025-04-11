"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Shield } from "lucide-react"

export function SiteFooter() {
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

  // Don't show the footer on auth pages
  if (currentPath.startsWith("/auth/")) {
    return null
  }

  return (
    <footer className="border-t mt-auto">
      <div className="container w-full max-w-full px-4 md:px-6 flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
        <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">InsureAI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Transforming insurance underwriting with artificial intelligence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/product/features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/product/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/product/integrations" className="text-muted-foreground hover:text-foreground">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/company/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/legal/security" className="text-muted-foreground hover:text-foreground">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container w-full max-w-full px-4 md:px-6 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} InsureAI. All rights reserved.
      </div>
    </footer>
  )
}
