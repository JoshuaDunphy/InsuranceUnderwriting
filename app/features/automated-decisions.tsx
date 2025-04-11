import { CheckCircle2, FileText, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AutomatedDecisionsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 w-fit rounded-md bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Automated Decisions</h1>
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          Get instant underwriting decisions with detailed explanations and recommendations. Our AI provides transparent
          reasoning for each decision, helping you understand risk factors.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How Automated Decisions Work</h2>
            <p className="mb-4">
              InsureAI's automated decision engine uses advanced machine learning algorithms to analyze application
              data, assess risks, and make underwriting decisions in real-time. The system provides clear explanations
              for each decision, ensuring transparency and trust.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Instant Decisions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our AI provides immediate underwriting decisions for straightforward cases, reducing processing time
                    from days to seconds.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Transparent Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Each decision comes with detailed explanations of the key factors that influenced the outcome,
                    ensuring transparency and trust.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Risk-Based Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The system calculates premiums based on individual risk profiles, ensuring fair and accurate pricing
                    for each applicant.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Along with decisions, our AI provides tailored recommendations to optimize coverage and reduce
                    premiums.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Decision Types</h2>
            <div className="space-y-4">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50 border-b border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <CardTitle>Automatic Approval</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>
                    For low-risk applications that meet all underwriting criteria, the system provides immediate
                    approval with recommended coverage options and premium calculations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader className="bg-yellow-50 border-b border-yellow-200">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-yellow-600" />
                    <CardTitle>Manual Review</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>
                    For complex cases that require human expertise, the system flags specific areas of concern and
                    provides detailed information to assist underwriters in making informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="bg-red-50 border-b border-red-200">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-red-600" />
                    <CardTitle>Decline</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>
                    For high-risk applications that don't meet underwriting criteria, the system provides a detailed
                    explanation of the decision factors and potential paths to reconsideration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Faster Processing</h3>
                  <p className="text-muted-foreground">
                    Reduce underwriting time from days to seconds with automated decisions for straightforward cases.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Consistent Decisions</h3>
                  <p className="text-muted-foreground">
                    Ensure consistent application of underwriting guidelines across all cases, eliminating human bias
                    and variability.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Transparent Explanations</h3>
                  <p className="text-muted-foreground">
                    Build trust with detailed explanations of decision factors, helping agents and customers understand
                    outcomes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Optimized Resource Allocation</h3>
                  <p className="text-muted-foreground">
                    Free up underwriters to focus on complex cases that truly require human expertise and judgment.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Ready to automate your underwriting decisions?</h2>
            </div>
            <p className="mb-6">
              Start using our AI-powered decision engine today and transform your underwriting process.
            </p>
            <Button size="lg">Get Started</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
