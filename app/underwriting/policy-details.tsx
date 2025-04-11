"use client"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Progress } from "@/components/ui/progress"

export default function PolicyDetailsPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const params = useParams()
  const navigate = useNavigate()
  const insuranceType = params.type || "auto"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Dynamic form schema based on insurance type
  const getFormSchema = () => {
    const baseSchema = {
      policyStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Please enter a valid date in YYYY-MM-DD format.",
      }),
      policyTerm: z.enum(["6", "12", "24", "36"], {
        required_error: "Please select a policy term.",
      }),
      previousClaims: z.boolean(),
      claimsDetails: z.string().optional(),
    }

    if (insuranceType === "auto") {
      return z.object({
        ...baseSchema,
        vehicleMake: z.string().min(1, "Vehicle make is required"),
        vehicleModel: z.string().min(1, "Vehicle model is required"),
        vehicleYear: z.string().regex(/^\d{4}$/, "Please enter a valid year"),
        vin: z.string().min(17, "VIN must be 17 characters").max(17),
        primaryUse: z.enum(["personal", "commute", "business"]),
        annualMileage: z.string().min(1, "Annual mileage is required"),
        driverLicense: z.string().min(1, "Driver's license number is required"),
      })
    } else if (insuranceType === "home") {
      return z.object({
        ...baseSchema,
        propertyType: z.enum(["single-family", "multi-family", "condo", "mobile-home"]),
        yearBuilt: z.string().regex(/^\d{4}$/, "Please enter a valid year"),
        squareFootage: z.string().min(1, "Square footage is required"),
        constructionType: z.enum(["wood-frame", "masonry", "steel-frame", "other"]),
        roofType: z.string().min(1, "Roof type is required"),
        securitySystem: z.boolean(),
        floodZone: z.boolean(),
      })
    } else {
      // Generic schema for other insurance types
      return z.object({
        ...baseSchema,
        coverageAmount: z.string().min(1, "Coverage amount is required"),
        deductible: z.string().min(1, "Deductible is required"),
        additionalDetails: z.string().optional(),
      })
    }
  }

  const formSchema = getFormSchema()

  // Default values based on insurance type
  const getDefaultValues = () => {
    const baseValues = {
      policyStartDate: "",
      policyTerm: undefined,
      previousClaims: false,
      claimsDetails: "",
    }

    if (insuranceType === "auto") {
      return {
        ...baseValues,
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: "",
        vin: "",
        primaryUse: undefined,
        annualMileage: "",
        driverLicense: "",
      }
    } else if (insuranceType === "home") {
      return {
        ...baseValues,
        propertyType: undefined,
        yearBuilt: "",
        squareFootage: "",
        constructionType: undefined,
        roofType: "",
        securitySystem: false,
        floodZone: false,
      }
    } else {
      return {
        ...baseValues,
        coverageAmount: "",
        deductible: "",
        additionalDetails: "",
      }
    }
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(),
  })

  function onSubmit(values: any) {
    setIsSubmitting(true)
    console.log(values)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      navigate(`/underwriting/${insuranceType}/document-upload`)
    }, 1500)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link to="/underwriting" className="text-muted-foreground hover:text-foreground text-sm">
          New Application
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link
          to={`/underwriting/${insuranceType}/applicant-info`}
          className="text-muted-foreground hover:text-foreground text-sm"
        >
          Applicant Information
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Policy Details</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Policy Details</h1>
          <p className="text-muted-foreground mt-2">
            Please provide details about the {formatInsuranceType(insuranceType)} policy.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Application Progress</h2>
          <Progress value={50} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Policy Details</span>
            <span>50%</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Policy Information</CardTitle>
            <CardDescription>
              Enter the details required for the {formatInsuranceType(insuranceType)} policy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Form content here - abbreviated for brevity */}
                <div className="flex justify-end gap-4">
                  <Button variant="outline" type="button" asChild>
                    <Link to={`/underwriting/${insuranceType}/applicant-info`}>Back</Link>
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Continue"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
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
