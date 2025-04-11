"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ChevronRight, type File } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DocumentUploadPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const params = useParams()
  const navigate = useNavigate()
  const insuranceType = params.type || "auto"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Required documents based on insurance type
  const getRequiredDocuments = () => {
    const baseDocuments = ["Proof of Identity", "Proof of Address"]

    if (insuranceType === "auto") {
      return [
        ...baseDocuments,
        "Driver's License",
        "Vehicle Registration",
        "Vehicle Title",
        "Current Insurance Declaration Page (if any)",
      ]
    } else if (insuranceType === "home") {
      return [
        ...baseDocuments,
        "Property Deed",
        "Home Inspection Report",
        "Current Insurance Declaration Page (if any)",
        "Photos of Property",
      ]
    } else if (insuranceType === "life") {
      return [...baseDocuments, "Medical Records", "Beneficiary Information", "Financial Statements"]
    } else {
      return [...baseDocuments, "Relevant Financial Documents", "Current Insurance Policies (if any)"]
    }
  }

  const requiredDocuments = getRequiredDocuments()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setUploadedFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      navigate(`/underwriting/${insuranceType}/review`)
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
          to={`/underwriting/${insuranceType}/policy-details`}
          className="text-muted-foreground hover:text-foreground text-sm"
        >
          Policy Details
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Document Upload</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Upload</h1>
          <p className="text-muted-foreground mt-2">
            Please upload the required documents for the {formatInsuranceType(insuranceType)} application.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Application Progress</h2>
          <Progress value={75} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Document Upload</span>
            <span>75%</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Required Documents</CardTitle>
            <CardDescription>
              Upload the following documents to complete your application. Accepted formats: PDF, JPG, PNG.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form content here - abbreviated for brevity */}
              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link to={`/underwriting/${insuranceType}/policy-details`}>Back</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Uploading..." : "Continue"}
                </Button>
              </div>
            </form>
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
