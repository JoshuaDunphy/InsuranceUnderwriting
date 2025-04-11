// Add imports for the header and footer components
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Wrap the entire content with the header and footer
export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <div className="container max-w-5xl py-12">{/* Existing content */}</div>
      <SiteFooter />
    </>
  )
}
