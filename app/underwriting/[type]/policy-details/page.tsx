"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function PolicyDetailsPage({ params }: { params: { type: string } }) {
  const insuranceType = params.type
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      window.location.href = `/underwriting/${insuranceType}/document-upload`
    }, 1500)
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
          href={`/underwriting/${insuranceType}/applicant-info`}
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
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="policyStartDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Policy Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="policyTerm"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Policy Term (months)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select policy term" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="6">6 months</SelectItem>
                            <SelectItem value="12">12 months</SelectItem>
                            <SelectItem value="24">24 months</SelectItem>
                            <SelectItem value="36">36 months</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {insuranceType === "auto" && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Vehicle Information</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="vehicleMake"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vehicle Make</FormLabel>
                            <FormControl>
                              <Input placeholder="Toyota" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="vehicleModel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vehicle Model</FormLabel>
                            <FormControl>
                              <Input placeholder="Camry" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="vehicleYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vehicle Year</FormLabel>
                            <FormControl>
                              <Input placeholder="2020" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="vin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>VIN</FormLabel>
                            <FormControl>
                              <Input placeholder="1HGCM82633A123456" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="primaryUse"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Use</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select primary use" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="personal">Personal</SelectItem>
                                <SelectItem value="commute">Commute</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="annualMileage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Annual Mileage</FormLabel>
                            <FormControl>
                              <Input placeholder="12000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="driverLicense"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Driver&apos;s License Number</FormLabel>
                            <FormControl>
                              <Input placeholder="D1234567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {insuranceType === "home" && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Property Information</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="propertyType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select property type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="single-family">Single Family Home</SelectItem>
                                <SelectItem value="multi-family">Multi-Family Home</SelectItem>
                                <SelectItem value="condo">Condominium</SelectItem>
                                <SelectItem value="mobile-home">Mobile Home</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="yearBuilt"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year Built</FormLabel>
                            <FormControl>
                              <Input placeholder="2005" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="squareFootage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Square Footage</FormLabel>
                            <FormControl>
                              <Input placeholder="2000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="constructionType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Construction Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select construction type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="wood-frame">Wood Frame</SelectItem>
                                <SelectItem value="masonry">Masonry</SelectItem>
                                <SelectItem value="steel-frame">Steel Frame</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="roofType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Roof Type</FormLabel>
                            <FormControl>
                              <Input placeholder="Asphalt Shingle" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="securitySystem"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Security System</FormLabel>
                              <FormDescription>Does the property have a security system?</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="floodZone"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Flood Zone</FormLabel>
                              <FormDescription>Is the property located in a flood zone?</FormDescription>
                            </div>
                            <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {insuranceType !== "auto" && insuranceType !== "home" && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Coverage Information</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="coverageAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Coverage Amount</FormLabel>
                            <FormControl>
                              <Input placeholder="$500,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="deductible"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Deductible</FormLabel>
                            <FormControl>
                              <Input placeholder="$1,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="additionalDetails"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Additional Details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide any additional details relevant to this policy..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-medium mb-4">Claims History</h3>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="previousClaims"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">Previous Claims</FormLabel>
                            <FormDescription>
                              Has the applicant filed any insurance claims in the past 5 years?
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {form.watch("previousClaims") && (
                      <FormField
                        control={form.control}
                        name="claimsDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Claims Details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide details about previous claims including dates, types, and amounts..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline" type="button" asChild>
                    <Link href={`/underwriting/${insuranceType}/applicant-info`}>Back</Link>
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
