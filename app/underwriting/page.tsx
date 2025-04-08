"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Car, ChevronRight, HomeIcon, Shield, Umbrella, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UnderwritingPage() {
  const [selectedInsuranceType, setSelectedInsuranceType] = useState<string | null>(null)

  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">New Underwriting Application</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Underwriting Application</h1>
          <p className="text-muted-foreground mt-2">
            Select an insurance type to begin the automated underwriting process.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Application Progress</h2>
          <Progress value={0} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Select Insurance Type</span>
            <span>0%</span>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="all">All Types</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="specialty">Specialty</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InsuranceTypeCard
                icon={<Car />}
                title="Auto Insurance"
                description="Vehicle coverage for individuals and families"
                selected={selectedInsuranceType === "auto"}
                onClick={() => setSelectedInsuranceType("auto")}
              />
              <InsuranceTypeCard
                icon={<HomeIcon />}
                title="Home Insurance"
                description="Property coverage for homeowners and renters"
                selected={selectedInsuranceType === "home"}
                onClick={() => setSelectedInsuranceType("home")}
              />
              <InsuranceTypeCard
                icon={<User />}
                title="Life Insurance"
                description="Financial protection for beneficiaries"
                selected={selectedInsuranceType === "life"}
                onClick={() => setSelectedInsuranceType("life")}
              />
              <InsuranceTypeCard
                icon={<Shield />}
                title="Health Insurance"
                description="Medical coverage for individuals and families"
                selected={selectedInsuranceType === "health"}
                onClick={() => setSelectedInsuranceType("health")}
              />
              <InsuranceTypeCard
                icon={<Umbrella />}
                title="Commercial Insurance"
                description="Business coverage for various industries"
                selected={selectedInsuranceType === "commercial"}
                onClick={() => setSelectedInsuranceType("commercial")}
              />
              <InsuranceTypeCard
                icon={<Shield />}
                title="Specialty Insurance"
                description="Specialized coverage for unique risks"
                selected={selectedInsuranceType === "specialty"}
                onClick={() => setSelectedInsuranceType("specialty")}
              />
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InsuranceTypeCard
                icon={<Car />}
                title="Auto Insurance"
                description="Vehicle coverage for individuals and families"
                selected={selectedInsuranceType === "auto"}
                onClick={() => setSelectedInsuranceType("auto")}
              />
              <InsuranceTypeCard
                icon={<HomeIcon />}
                title="Home Insurance"
                description="Property coverage for homeowners and renters"
                selected={selectedInsuranceType === "home"}
                onClick={() => setSelectedInsuranceType("home")}
              />
              <InsuranceTypeCard
                icon={<User />}
                title="Life Insurance"
                description="Financial protection for beneficiaries"
                selected={selectedInsuranceType === "life"}
                onClick={() => setSelectedInsuranceType("life")}
              />
              <InsuranceTypeCard
                icon={<Shield />}
                title="Health Insurance"
                description="Medical coverage for individuals and families"
                selected={selectedInsuranceType === "health"}
                onClick={() => setSelectedInsuranceType("health")}
              />
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InsuranceTypeCard
                icon={<Umbrella />}
                title="Commercial Property"
                description="Coverage for business buildings and contents"
                selected={selectedInsuranceType === "commercial-property"}
                onClick={() => setSelectedInsuranceType("commercial-property")}
              />
              <InsuranceTypeCard
                icon={<Shield />}
                title="General Liability"
                description="Protection against third-party claims"
                selected={selectedInsuranceType === "general-liability"}
                onClick={() => setSelectedInsuranceType("general-liability")}
              />
              <InsuranceTypeCard
                icon={<Shield />}
                title="Workers' Compensation"
                description="Coverage for employee injuries and illnesses"
                selected={selectedInsuranceType === "workers-comp"}
                onClick={() => setSelectedInsuranceType("workers-comp")}
              />
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <InsuranceTypeCard
                icon={<Shield />}
                title="Cyber Insurance"
                description="Protection against digital threats and data breaches"
                selected={selectedInsuranceType === "cyber"}
                onClick={() => setSelectedInsuranceType("cyber")}
              />
              <InsuranceTypeCard
                icon={<Shield />}
                title="Professional Liability"
                description="Coverage for professional services errors"
                selected={selectedInsuranceType === "professional-liability"}
                onClick={() => setSelectedInsuranceType("professional-liability")}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Button
            size="lg"
            disabled={!selectedInsuranceType}
            onClick={() => {
              if (selectedInsuranceType) {
                window.location.href = `/underwriting/${selectedInsuranceType}/applicant-info`
              }
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

interface InsuranceTypeCardProps {
  icon: React.ReactNode
  title: string
  description: string
  selected: boolean
  onClick: () => void
}

function InsuranceTypeCard({ icon, title, description, selected, onClick }: InsuranceTypeCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all ${selected ? "border-primary ring-2 ring-primary/20" : ""}`}
      onClick={onClick}
    >
      <CardHeader>
        <div className={`p-2 w-fit rounded-md ${selected ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
          {icon}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant={selected ? "default" : "outline"} className="w-full">
          {selected ? "Selected" : "Select"}
        </Button>
      </CardContent>
    </Card>
  )
}
