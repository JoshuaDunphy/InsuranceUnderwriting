"use client"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ReviewPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [underwritingResult, setUnderwritingResult] = useState<null | {
    decision: "approved" | "declined" | "manual_review"
    score: number
    premium: string
    factors: string[]
    recommendations: string[]
  }>(null)

  const params = useParams()
  const navigate = useNavigate()
  const insuranceType = params.type || "auto"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = () => {
    setIsProcessing(true)

    // Simulate API call to DeepSeek AI for underwriting
    setTimeout(() => {
      setIsComplete(true)
      setIsProcessing(false)

      // Mock response from DeepSeek AI
      setUnderwritingResult({
        decision: "approved",
        score: 85,
        premium: "$1,250.00",
        factors: [
          "Clean driving record",
          "No previous claims",
          "Vehicle age and model",
          "Credit score within acceptable range",
        ],
        recommendations: [
          "Consider bundling with home insurance for additional discount",
          "Defensive driving course could lower premium by 5%",
        ],
      })
    }, 3000)
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
          to={`/underwriting/${insuranceType}/document-upload`}
          className="text-muted-foreground hover:text-foreground text-sm"
        >
          Document Upload
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Review & Submit</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Review & Submit</h1>
          <p className="text-muted-foreground mt-2">
            Review your {formatInsuranceType(insuranceType)} application and submit for automated underwriting.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Application Progress</h2>
          <Progress value={isComplete ? 100 : 90} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Review & Submit</span>
            <span>{isComplete ? "100%" : "90%"}</span>
          </div>
        </div>

        {/* Card content here - abbreviated for brevity */}
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
