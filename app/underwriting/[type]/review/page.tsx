"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReviewPage({ params }: { params: { type: string } }) {
  const insuranceType = params.type
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [underwritingResult, setUnderwritingResult] = useState<null | {
    decision: "approved" | "declined" | "manual_review"
    score: number
    premium: string
    factors: string[]
    recommendations: string[]
  }>(null)

  const handleSubmit = () => {
    setIsProcessing(true)

    // Simulate API call to DeepSeek AI for underwriting
    setTimeout(() => {
      setIsComplete(true)
      setIsProcessing(false)

      // Mock response from DeepSeek AI
      setUnderwritingResult({
        decision: "approved",
        score: 85,
        premium: "$1,250.00",
        factors: [
          "Clean driving record",
          "No previous claims",
          "Vehicle age and model",
          "Credit score within acceptable range",
        ],
        recommendations: [
          "Consider bundling with home insurance for additional discount",
          "Defensive driving course could lower premium by 5%",
        ],
      })
    }, 3000)
  }

  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link href="/underwriting" className="text-muted-foreground hover:text-foreground text-sm">
          New Application
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link
          href={`/underwriting/${insuranceType}/document-upload`}
          className="text-muted-foreground hover:text-foreground text-sm"
        >
          Document Upload
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Review & Submit</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Review & Submit</h1>
          <p className="text-muted-foreground mt-2">
            Review your {formatInsuranceType(insuranceType)} application and submit for automated underwriting.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Application Progress</h2>
          <Progress value={isComplete ? 100 : 90} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Review & Submit</span>
            <span>{isComplete ? "100%" : "90%"}</span>
          </div>
        </div>

        {!isComplete ? (
          <Card>
            <CardHeader>
              <CardTitle>Application Summary</CardTitle>
              <CardDescription>
                Review the information below before submitting your application for automated underwriting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="applicant">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="applicant">Applicant</TabsTrigger>
                  <TabsTrigger value="policy">Policy Details</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                <TabsContent value="applicant" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                      <p>John Doe</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                      <p>john.doe@example.com</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                      <p>(555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Date of Birth</h3>
                      <p>01/15/1985</p>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                      <p>123 Main St, New York, NY 10001</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="policy" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Policy Type</h3>
                      <p>{formatInsuranceType(insuranceType)}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Policy Start Date</h3>
                      <p>05/01/2023</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Policy Term</h3>
                      <p>12 months</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Previous Claims</h3>
                      <p>None</p>
                    </div>

                    {insuranceType === "auto" && (
                      <>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Vehicle</h3>
                          <p>2020 Toyota Camry</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">VIN</h3>
                          <p>1HGCM82633A123456</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Primary Use</h3>
                          <p>Personal</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Annual Mileage</h3>
                          <p>12,000</p>
                        </div>
                      </>
                    )}

                    {insuranceType === "home" && (
                      <>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Property Type</h3>
                          <p>Single Family Home</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Year Built</h3>
                          <p>2005</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Square Footage</h3>
                          <p>2,000 sq ft</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Construction Type</h3>
                          <p>Wood Frame</p>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="documents" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Proof of Identity</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Proof of Address</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    {insuranceType === "auto" && (
                      <>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Driver's License</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Vehicle Registration</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </>
                    )}
                    {insuranceType === "home" && (
                      <>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Property Deed</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Home Inspection Report</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href={`/underwriting/${insuranceType}/document-upload`}>Back</Link>
              </Button>
              <Button onClick={handleSubmit} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit for Underwriting"
                )}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Underwriting Results</CardTitle>
              <CardDescription>
                The AI has analyzed your application and provided the following assessment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {underwritingResult && (
                <>
                  <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${
                          underwritingResult.decision === "approved"
                            ? "bg-green-100 text-green-700"
                            : underwritingResult.decision === "declined"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {underwritingResult.decision === "approved" ? (
                          <CheckCircle2 className="h-10 w-10" />
                        ) : underwritingResult.decision === "declined" ? (
                          <AlertCircle className="h-10 w-10" />
                        ) : (
                          <AlertCircle className="h-10 w-10" />
                        )}
                      </div>
                      <h2 className="text-2xl font-bold mb-2">
                        {underwritingResult.decision === "approved"
                          ? "Application Approved"
                          : underwritingResult.decision === "declined"
                            ? "Application Declined"
                            : "Manual Review Required"}
                      </h2>
                      <p className="text-muted-foreground">
                        {underwritingResult.decision === "approved"
                          ? "Your application has been approved based on the information provided."
                          : underwritingResult.decision === "declined"
                            ? "Unfortunately, your application has been declined."
                            : "Your application requires additional review by an underwriter."}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Risk Assessment</h3>
                      <div className="p-4 border rounded-lg">
                        <div className="mb-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Risk Score</span>
                            <span className="text-sm font-medium">{underwritingResult.score}/100</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full ${
                                underwritingResult.score > 80
                                  ? "bg-green-500"
                                  : underwritingResult.score > 60
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${underwritingResult.score}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>High Risk</span>
                            <span>Low Risk</span>
                          </div>
                        </div>

                        <Separator className="my-4" />

                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Factors</h4>
                          <ul className="space-y-1">
                            {underwritingResult.factors.map((factor, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                <span>{factor}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Premium & Recommendations</h3>
                      <div className="p-4 border rounded-lg">
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-1">Estimated Premium</h4>
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold">{underwritingResult.premium}</span>
                            <span className="text-sm text-muted-foreground ml-1">per year</span>
                          </div>
                        </div>

                        <Separator className="my-4" />

                        <div>
                          <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                          <ul className="space-y-1">
                            {underwritingResult.recommendations.map((recommendation, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                                <span>{recommendation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href="/underwriting">New Application</Link>
              </Button>
              <Button asChild>
                <Link href="/applications">View All Applications</Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

function formatInsuranceType(type: string): string {
  return (
    type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ") + " Insurance"
  )
}
