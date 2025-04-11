import { ArrowRight, CheckCircle2, Database, FileText, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegrationsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Integrations</h1>
        <p className="text-xl text-muted-foreground mb-10">
          InsureAI seamlessly integrates with your existing systems and third-party services to enhance your
          underwriting process.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Core Integrations</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Insurance Management Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connect with popular insurance management platforms to streamline your workflow.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Integrations <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Document Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Integrate with document storage systems to access and process policy documents.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Integrations <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Data Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connect with third-party data sources for enhanced risk assessment.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Integrations <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Supported Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <h3 className="font-medium text-center">Applied Epic</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">V</span>
                </div>
                <h3 className="font-medium text-center">Vertafore</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">D</span>
                </div>
                <h3 className="font-medium text-center">Duck Creek</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">G</span>
                </div>
                <h3 className="font-medium text-center">Guidewire</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">S</span>
                </div>
                <h3 className="font-medium text-center">Salesforce</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">H</span>
                </div>
                <h3 className="font-medium text-center">HawkSoft</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">E</span>
                </div>
                <h3 className="font-medium text-center">EZLynx</h3>
              </div>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">+</span>
                </div>
                <h3 className="font-medium text-center">Many More</h3>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Integration Benefits</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Seamless Data Flow</h3>
                  <p className="text-muted-foreground">
                    Eliminate manual data entry with bidirectional data synchronization between systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Enhanced Risk Assessment</h3>
                  <p className="text-muted-foreground">
                    Access third-party data sources to enrich your risk assessment with additional information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Streamlined Workflow</h3>
                  <p className="text-muted-foreground">
                    Maintain your existing workflow while adding AI-powered underwriting capabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Unified Experience</h3>
                  <p className="text-muted-foreground">
                    Provide a consistent experience for underwriters and agents across all systems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">API & Developer Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>RESTful API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our comprehensive RESTful API allows you to integrate InsureAI's underwriting capabilities into your
                    custom applications and workflows.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View API Documentation</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Webhooks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set up webhooks to receive real-time notifications about underwriting decisions, application status
                    changes, and more.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn About Webhooks</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SDKs & Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use our official SDKs for popular programming languages to simplify integration with InsureAI's
                    platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Browse SDKs</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Custom Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our professional services team can build custom integrations for your specific systems and
                    requirements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Contact Us</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Need help with integration?</h2>
            </div>
            <p className="mb-6">
              Our team of integration specialists can help you connect InsureAI with your existing systems and
              workflows.
            </p>
            <Button size="lg">Schedule Consultation</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
