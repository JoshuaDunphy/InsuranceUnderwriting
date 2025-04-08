import { NextResponse } from "next/server"

// This would be the integration with DeepSeek API
// For demonstration purposes, we're mocking the response

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a real implementation, we would call the DeepSeek API here
    // const deepseekResponse = await callDeepSeekAPI(data)

    // For demo purposes, we'll simulate a response based on the insurance type
    const { insuranceType } = data

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock response based on insurance type
    let response

    switch (insuranceType) {
      case "auto":
        response = {
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
        }
        break

      case "home":
        response = {
          decision: "approved",
          score: 78,
          premium: "$2,450.00",
          factors: [
            "Property in low-risk area",
            "Modern construction",
            "Security system installed",
            "No previous claims",
          ],
          recommendations: [
            "Consider increasing deductible to lower premium",
            "Install water leak detection system for additional discount",
          ],
        }
        break

      case "life":
        response = {
          decision: "manual_review",
          score: 65,
          premium: "$750.00",
          factors: ["Age and health factors", "Family medical history", "Lifestyle factors"],
          recommendations: ["Medical examination may be required", "Consider term life policy for lower premiums"],
        }
        break

      default:
        response = {
          decision: "approved",
          score: 72,
          premium: "$1,800.00",
          factors: ["Risk assessment complete", "Policy details analyzed", "Document verification successful"],
          recommendations: ["Consider additional coverage options", "Bundle with other policies for discounts"],
        }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error in underwriting API:", error)
    return NextResponse.json({ error: "Failed to process underwriting request" }, { status: 500 })
  }
}

// This would be the actual integration with DeepSeek API
async function callDeepSeekAPI(data: any) {
  // In a real implementation, we would:
  // 1. Format the data for DeepSeek API
  // 2. Make the API call
  // 3. Process the response

  // Example (pseudocode):
  // const response = await fetch('https://api.deepseek.com/underwrite', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     applicant: data.applicant,
  //     policy: data.policy,
  //     documents: data.documents,
  //     insuranceType: data.insuranceType
  //   })
  // })

  // return response.json()

  // For now, return a mock response
  return {
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
  }
}
