import { BarChart3, CheckCircle2, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RiskAssessmentPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 w-fit rounded-md bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Risk Assessment</h1>
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          Our advanced AI algorithms analyze multiple risk factors to provide accurate assessments, helping insurers
          make informed decisions.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How Our Risk Assessment Works</h2>
            <p className="mb-4">
              InsureAI's risk assessment engine uses machine learning algorithms trained on millions of insurance cases
              to evaluate risk with unprecedented accuracy. Our system analyzes hundreds of data points to determine
              risk levels across all insurance types.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our system collects and processes data from multiple sources, including application forms,
                    documents, external databases, and historical claims data.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced machine learning models analyze the collected data to identify patterns, correlations, and
                    risk factors that might be missed by traditional underwriting methods.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Risk Scoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The system generates a comprehensive risk score based on multiple factors, providing a clear
                    indication of the overall risk level associated with the application.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Along with the risk assessment, our AI provides actionable recommendations to mitigate risks and
                    optimize coverage options.
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
                  <h3 className="font-medium">Increased Accuracy</h3>
                  <p className="text-muted-foreground">
                    Our AI models achieve 95% accuracy in risk prediction, significantly higher than traditional
                    methods.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Faster Processing</h3>
                  <p className="text-muted-foreground">
                    Risk assessments are completed in minutes rather than days, accelerating the entire underwriting
                    process.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Comprehensive Analysis</h3>
                  <p className="text-muted-foreground">
                    Our system evaluates hundreds of risk factors simultaneously, providing a more holistic view than
                    traditional methods.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    The AI system continuously improves its accuracy by learning from new data and outcomes.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Ready to experience advanced risk assessment?</h2>
            </div>
            <p className="mb-6">
              Start using our AI-powered risk assessment tools today and transform your underwriting process.
            </p>
            <Button size="lg">Get Started</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
