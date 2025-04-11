import { Car, Home, Shield, Umbrella, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InsuranceTypesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 w-fit rounded-md bg-primary/10">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Multi-Insurance Support</h1>
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          One platform for all insurance types: auto, home, life, health, and commercial. Customize your underwriting
          process for each insurance type while maintaining consistency.
        </p>

        <Tabs defaultValue="auto" className="w-full mb-10">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="auto">Auto</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="life">Life</TabsTrigger>
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>

          <TabsContent value="auto" className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <Car className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Auto Insurance Underwriting</h2>
            </div>
            <p className="mb-6">
              Our AI-powered auto insurance underwriting system analyzes vehicle details, driver history, and usage
              patterns to provide accurate risk assessments and premium calculations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Driver Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive analysis of driving history, violations, and claims to accurately assess driver risk
                    levels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Detailed evaluation of vehicle make, model, year, safety features, and market value to determine
                    coverage requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Usage-Based Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Analysis of annual mileage, primary use (personal, commute, business), and geographic factors that
                    impact risk.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Claims Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced predictive models that estimate the likelihood of future claims based on multiple risk
                    factors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="home" className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <Home className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Home Insurance Underwriting</h2>
            </div>
            <p className="mb-6">
              Our home insurance underwriting platform evaluates property characteristics, location risks, and homeowner
              profiles to provide comprehensive coverage recommendations and accurate pricing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Property Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Detailed assessment of property type, age, construction materials, and condition to determine
                    replacement value and risk factors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Location Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive evaluation of geographic risks including flood zones, wildfire risk, crime rates, and
                    natural disaster probability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Safety Features Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Analysis of security systems, fire protection, water leak detection, and other risk mitigation
                    features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Claims History Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Review of property and homeowner claims history to identify patterns and predict future claim
                    likelihood.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="life" className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <User className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Life Insurance Underwriting</h2>
            </div>
            <p className="mb-6">
              Our life insurance underwriting system analyzes health data, lifestyle factors, and medical history to
              provide accurate risk assessment and personalized coverage recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Health Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive analysis of medical history, current health status, and family medical history to
                    determine risk levels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lifestyle Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Assessment of lifestyle factors including smoking, alcohol consumption, exercise habits, and
                    occupation risks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mortality Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced predictive models that estimate life expectancy based on multiple health and lifestyle
                    factors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Coverage Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Personalized recommendations for coverage amounts, term length, and policy features based on
                    individual needs and risk profile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Health Insurance Underwriting</h2>
            </div>
            <p className="mb-6">
              Our health insurance underwriting platform evaluates medical history, current health status, and lifestyle
              factors to provide accurate risk assessment and personalized coverage options.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical History Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive review of past medical conditions, treatments, and procedures to identify potential
                    risk factors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Current Health Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Assessment of current health status, including chronic conditions, medications, and recent medical
                    tests.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lifestyle Risk Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Analysis of lifestyle factors that impact health, including smoking, alcohol consumption, exercise
                    habits, and occupation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Utilization Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Predictive models that estimate future healthcare utilization and costs based on individual risk
                    profiles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <Umbrella className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Commercial Insurance Underwriting</h2>
            </div>
            <p className="mb-6">
              Our commercial insurance underwriting system analyzes business operations, industry risks, and financial
              stability to provide comprehensive coverage recommendations and accurate pricing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive analysis of business operations, industry-specific risks, and loss prevention
                    measures.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Property Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Detailed assessment of commercial properties, equipment, inventory, and business personal property
                    values.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Liability Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Evaluation of general liability, professional liability, and product liability risks based on
                    business activities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Financial Stability Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Analysis of business financial health, credit history, and stability to determine risk levels and
                    coverage needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="bg-muted p-8 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">Ready to streamline your multi-line underwriting?</h2>
          </div>
          <p className="mb-6">
            Start using our AI-powered platform today and transform your underwriting process across all insurance
            types.
          </p>
          <Button size="lg">Get Started</Button>
        </section>
      </div>
    </div>
  )
}
