import { ArrowRight, Calendar, Shield, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Insurance Underwriting",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the insurance underwriting process, making it faster, more accurate, and more transparent.",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    category: "AI in Insurance",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "The Future of Risk Assessment in Insurance",
    excerpt:
      "Discover how advanced AI algorithms are changing the way insurers assess risk, leading to more accurate pricing and better customer experiences.",
    date: "April 28, 2023",
    author: "Michael Chen",
    category: "Risk Assessment",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Automated Underwriting: Benefits and Challenges",
    excerpt:
      "Learn about the benefits and challenges of implementing automated underwriting systems in insurance companies of all sizes.",
    date: "April 10, 2023",
    author: "Emily Patel",
    category: "Automation",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "How to Prepare Your Insurance Company for AI Adoption",
    excerpt:
      "A step-by-step guide to preparing your insurance company for the adoption of AI-powered underwriting systems.",
    date: "March 22, 2023",
    author: "David Rodriguez",
    category: "Implementation",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "The Role of Data in Modern Insurance Underwriting",
    excerpt:
      "Explore how data quality and quantity impact the effectiveness of AI-powered underwriting systems and what insurers can do to improve their data practices.",
    date: "March 5, 2023",
    author: "Sarah Johnson",
    category: "Data Science",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Case Study: How ABC Insurance Reduced Underwriting Time by 90%",
    excerpt:
      "Learn how ABC Insurance implemented InsureAI's platform and reduced their underwriting time from days to minutes while improving accuracy.",
    date: "February 18, 2023",
    author: "Michael Chen",
    category: "Case Study",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">InsureAI Blog</h1>
        <p className="text-xl text-muted-foreground mb-10">
          Insights, news, and updates from the world of AI-powered insurance underwriting.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Featured blog post"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        AI in Insurance
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>June 5, 2023</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">The Evolution of AI in Insurance Underwriting</CardTitle>
                    <CardDescription>
                      A comprehensive look at how AI has evolved in the insurance industry over the past decade and
                      where it's headed in the future.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>By Sarah Johnson, CEO</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="gap-1">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Latest Articles</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="ghost" size="sm">
                  AI in Insurance
                </Button>
                <Button variant="ghost" size="sm">
                  Case Studies
                </Button>
                <Button variant="ghost" size="sm">
                  Implementation
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>By {post.author}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="gap-1 w-full justify-start">
                      Read Article <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">AI in Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">12 articles</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost" size="sm">
                    View Articles
                  </Button>
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Case Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">8 articles</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost" size="sm">
                    View Articles
                  </Button>
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">6 articles</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost" size="sm">
                    View Articles
                  </Button>
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Data Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">5 articles</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="ghost" size="sm">
                    View Articles
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
            </div>
            <p className="mb-6">
              Stay up-to-date with the latest insights, news, and updates from the world of AI-powered insurance
              underwriting.
            </p>
            <div className="flex gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
