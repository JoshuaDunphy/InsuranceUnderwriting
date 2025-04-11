import Link from "next/link"
import { BarChart3, FileCheck, FileText, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardCard } from "@/components/dashboard-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <div className="container py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back! Here's an overview of your insurance underwriting activities.
            </p>
          </div>
          <Button asChild>
            <Link href="/underwriting">
              <Plus className="mr-2 h-4 w-4" /> New Application
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <DashboardCard title="Total Applications" icon={<FileText className="h-4 w-4" />}>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </DashboardCard>

          <DashboardCard title="Approved" icon={<FileCheck className="h-4 w-4" />}>
            <div className="text-2xl font-bold">21</div>
            <p className="text-xs text-muted-foreground">87.5% approval rate</p>
          </DashboardCard>

          <DashboardCard title="Pending Review" icon={<Users className="h-4 w-4" />}>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Awaiting underwriting</p>
          </DashboardCard>

          <DashboardCard title="Average Risk Score" icon={<BarChart3 className="h-4 w-4" />}>
            <div className="text-2xl font-bold">76/100</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </DashboardCard>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Your most recent underwriting applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground">
                  <div>Applicant</div>
                  <div>Type</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <div>John Doe</div>
                  <div>Auto Insurance</div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Approved
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <div>Jane Smith</div>
                  <div>Home Insurance</div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Approved
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <div>Robert Johnson</div>
                  <div>Life Insurance</div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div>
                    Manual Review
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <div>Maria Garcia</div>
                  <div>Auto Insurance</div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Approved
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                  <div>David Wilson</div>
                  <div>Home Insurance</div>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    Declined
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/applications">View All</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance Types</CardTitle>
              <CardDescription>Distribution by insurance type</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Auto Insurance</div>
                    <div className="text-sm font-medium">45%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Home Insurance</div>
                    <div className="text-sm font-medium">30%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "30%" }}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Life Insurance</div>
                    <div className="text-sm font-medium">15%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "15%" }}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Commercial</div>
                    <div className="text-sm font-medium">10%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
