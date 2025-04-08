"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, File, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DocumentUploadPage({ params }: { params: { type: string } }) {
  const insuranceType = params.type
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

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
      window.location.href = `/underwriting/${insuranceType}/review`
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
          href={`/underwriting/${insuranceType}/policy-details`}
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
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {requiredDocuments.map((doc, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{doc}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <label
                          htmlFor={`file-upload-${index}`}
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer bg-muted/50 hover:bg-muted"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PDF, JPG or PNG (max. 10MB)</p>
                          </div>
                          <input
                            id={`file-upload-${index}`}
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </label>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Uploaded Files</h3>
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-md bg-muted/30"
                        >
                          <div className="flex items-center gap-2">
                            <File className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{file.name}</span>
                            <span className="text-xs text-muted-foreground">
                              ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFile(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link href={`/underwriting/${insuranceType}/policy-details`}>Back</Link>
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
