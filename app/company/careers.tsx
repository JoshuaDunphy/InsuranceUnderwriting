import { ArrowRight, CheckCircle2, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Remote Option)",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Insurance Domain Expert",
    department: "Product",
    location: "New York, NY (Remote Option)",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data Science",
    location: "San Francisco, CA (Remote Option)",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY (Remote Option)",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Careers at InsureAI</h1>
        <p className="text-xl text-muted-foreground mb-10">
          Join our team and help transform the insurance industry with artificial intelligence.
        </p>

        <div className="space-y-12">
          <section className="bg-muted p-8 rounded-lg">
            <div className="md:flex items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Transform Insurance with AI</h2>
                <p className="mb-6">
                  At InsureAI, we're building the future of insurance underwriting. Our AI-powered platform helps
                  insurers make faster, more accurate decisions while providing a better experience for their customers.
                </p>
                <Button size="lg">View Open Positions</Button>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Team collaboration"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Why Join InsureAI?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Meaningful Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Work on technology that's transforming a trillion-dollar industry and making insurance more
                    accessible and fair for everyone.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join a diverse team of experts from insurance, data science, and software engineering working
                    together to solve complex problems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 w-fit rounded-md bg-primary/10">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Develop your skills and advance your career in a fast-growing company at the intersection of
                    insurance and artificial intelligence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Competitive Compensation</h3>
                  <p className="text-muted-foreground">Competitive salary, equity, and performance-based bonuses.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Health & Wellness</h3>
                  <p className="text-muted-foreground">
                    Comprehensive health, dental, and vision insurance for you and your dependents.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Flexible Work</h3>
                  <p className="text-muted-foreground">Remote-friendly environment with flexible working hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Professional Development</h3>
                  <p className="text-muted-foreground">Learning stipend and dedicated time for professional growth.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Generous Time Off</h3>
                  <p className="text-muted-foreground">Unlimited PTO policy that encourages work-life balance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Retirement Planning</h3>
                  <p className="text-muted-foreground">401(k) plan with employer matching.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <Card key={job.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-muted px-2 py-1 rounded-full text-xs font-medium">{job.location}</span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs font-medium">{job.type}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="gap-1">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Hiring Process</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Application Review</h3>
                  <p className="text-muted-foreground">
                    Our recruiting team reviews your application and resume to assess your qualifications and
                    experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Initial Interview</h3>
                  <p className="text-muted-foreground">
                    A 30-45 minute video call with a recruiter to discuss your background, experience, and interest in
                    InsureAI.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Technical Assessment</h3>
                  <p className="text-muted-foreground">
                    Depending on the role, you may be asked to complete a technical assessment or case study to
                    demonstrate your skills.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Team Interviews</h3>
                  <p className="text-muted-foreground">
                    A series of interviews with team members and leaders to assess your technical skills,
                    problem-solving abilities, and cultural fit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">
                  5
                </div>
                <div>
                  <h3 className="font-medium">Final Interview</h3>
                  <p className="text-muted-foreground">
                    A final interview with a senior leader or executive to discuss your career goals and how you can
                    contribute to InsureAI's mission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium">
                  6
                </div>
                <div>
                  <h3 className="font-medium">Offer</h3>
                  <p className="text-muted-foreground">
                    If selected, you'll receive a competitive offer with details about compensation, benefits, and next
                    steps.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Don't See the Right Position?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about transforming the insurance industry
              with AI. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg">Submit Your Resume</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
