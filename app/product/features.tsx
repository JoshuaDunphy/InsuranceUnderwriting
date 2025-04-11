import { ArrowRight, BarChart3, CheckCircle2, FileText, Home, Shield } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Product Features</h1>
        <p className="text-xl text-muted-foreground mb-10">
          Discover how InsureAI's powerful features can transform your insurance underwriting process.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Core Features</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Risk Assessment</CardTitle>
                  <CardDescription>
                    Advanced AI algorithms analyze multiple risk factors to provide accurate assessments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our system evaluates hundreds of data points to determine risk levels across all insurance types.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link to="/features/risk-assessment">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Multi-Insurance Support</CardTitle>
                  <CardDescription>
                    One platform for all insurance types: auto, home, life, health, and commercial.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Customize your underwriting process for each insurance type while maintaining consistency.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link to="/features/insurance-types">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Automated Decisions</CardTitle>
                  <CardDescription>
                    Get instant underwriting decisions with detailed explanations and recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI provides transparent reasoning for each decision, helping you understand risk factors.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link to="/features/automated-decisions">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Additional Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-md bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Document Processing</h3>
                  <p className="text-muted-foreground">
                    Automatically extract and analyze information from policy documents, claims history, and supporting
                    materials.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-md bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">
                    Comprehensive analytics and reporting tools to track underwriting performance, approval rates, and
                    risk distribution.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-md bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Fraud Detection</h3>
                  <p className="text-muted-foreground">
                    Advanced AI algorithms to identify potential fraud indicators and flag suspicious applications for
                    review.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="p-2 rounded-md bg-primary/10">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">API Integration</h3>
                  <p className="text-muted-foreground">
                    Seamless integration with existing insurance systems, CRMs, and third-party data providers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Why Choose InsureAI?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Increased Efficiency</h3>
                  <p className="text-muted-foreground">
                    Reduce underwriting time by up to 90% with automated processing and instant decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Enhanced Accuracy</h3>
                  <p className="text-muted-foreground">
                    Improve risk assessment accuracy by 35% compared to traditional underwriting methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Consistent Decisions</h3>
                  <p className="text-muted-foreground">
                    Ensure consistent application of underwriting guidelines across all cases and insurance types.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Scalable Solution</h3>
                  <p className="text-muted-foreground">
                    Handle increasing application volumes without adding staff or compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Ready to transform your underwriting process?</h2>
            </div>
            <p className="mb-6">
              Schedule a demo to see how InsureAI can streamline your insurance underwriting operations.
            </p>
            <Button size="lg">Request Demo</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
