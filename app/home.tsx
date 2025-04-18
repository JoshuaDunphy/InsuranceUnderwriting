import { Link } from "react-router-dom"
import { ArrowRight, BarChart3, FileText, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1">
        <section className="container w-full py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI-Powered Insurance Underwriting
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Streamline your underwriting process with our advanced AI system. Get accurate risk assessments in
                minutes, not days.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link to="/underwriting">
                    Start New Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <div className="flex h-[280px] items-center justify-center rounded-md border border-dashed p-8">
                <div className="flex flex-col items-center gap-2 text-center">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-xl font-medium">Intelligent Document Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes policy documents, claims history, and risk factors to provide comprehensive
                    underwriting decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-12">
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
      </main>
    </div>
  )
}
