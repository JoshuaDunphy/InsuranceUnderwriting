// Add imports for the header and footer components
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Wrap the entire content with the header and footer
export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <div className="container max-w-4xl py-12">{/* Existing content */}</div>
      <SiteFooter />
    </>
  )
}
