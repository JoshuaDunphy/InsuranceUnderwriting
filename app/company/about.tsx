import { CheckCircle2, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About InsureAI</h1>
        <p className="text-xl text-muted-foreground mb-10">
          We're on a mission to transform insurance underwriting with artificial intelligence.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p>
                InsureAI was founded in 2020 by a team of insurance industry veterans and AI experts who recognized the
                potential for artificial intelligence to revolutionize the underwriting process. After experiencing
                firsthand the inefficiencies and inconsistencies of traditional underwriting methods, our founders set
                out to create a solution that would make the process faster, more accurate, and more transparent.
              </p>
              <p>
                Starting with a small team of data scientists and insurance underwriters, we developed our first AI
                model focused on auto insurance. The results were impressive: a 90% reduction in processing time and a
                35% improvement in risk assessment accuracy. Building on this success, we expanded our platform to
                support multiple insurance types and developed additional features to address the complex needs of
                insurance providers.
              </p>
              <p>
                Today, InsureAI serves insurance companies of all sizes, from small agencies to large carriers. Our
                platform processes thousands of applications daily, helping insurers make faster, more accurate
                underwriting decisions while providing a better experience for their customers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg font-medium text-center">
                "To transform insurance underwriting through artificial intelligence, making it faster, more accurate,
                and more transparent for insurers and their customers."
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We're committed to reducing underwriting time from days to minutes, allowing insurers to focus on
                    serving their customers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI models continuously learn and improve, providing increasingly accurate risk assessments and
                    underwriting decisions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We believe in explainable AI that provides clear reasoning for every decision, building trust with
                    insurers and their customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <p className="mb-6">
              InsureAI brings together experts from the insurance industry, data science, and software engineering to
              create innovative solutions for insurance underwriting.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
                <h3 className="font-medium">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
                <h3 className="font-medium">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
                <h3 className="font-medium">David Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Chief Data Scientist</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
                <h3 className="font-medium">Emily Patel</h3>
                <p className="text-sm text-muted-foreground">VP of Product</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline">View Full Team</Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Investors</h2>
            <p className="mb-6">
              InsureAI is backed by leading venture capital firms and strategic investors who share our vision for the
              future of insurance underwriting.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <div className="w-full h-12 bg-muted rounded"></div>
              </div>
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <div className="w-full h-12 bg-muted rounded"></div>
              </div>
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <div className="w-full h-12 bg-muted rounded"></div>
              </div>
              <div className="flex items-center justify-center p-6 border rounded-lg">
                <div className="w-full h-12 bg-muted rounded"></div>
              </div>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Join Our Team</h2>
            </div>
            <p className="mb-6">
              We're always looking for talented individuals who are passionate about transforming the insurance industry
              with AI.
            </p>
            <Button size="lg">View Open Positions</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
