"use client"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Import components
import RootLayout from "@/components/layouts/root-layout"
import HomePage from "./home"
import DashboardPage from "./dashboard/page"
import ApplicationsPage from "./applications/page"
import UnderwritingPage from "./underwriting/page"
import SignInPage from "./auth/sign-in"
import RegisterPage from "./auth/register"

// Feature pages
import RiskAssessmentPage from "./features/risk-assessment"
import InsuranceTypesPage from "./features/insurance-types"
import AutomatedDecisionsPage from "./features/automated-decisions"

// Product pages
import FeaturesPage from "./product/features"
import PricingPage from "./product/pricing"
import IntegrationsPage from "./product/integrations"

// Company pages
import AboutPage from "./company/about"
import BlogPage from "./company/blog"
import CareersPage from "./company/careers"

// Legal pages
import PrivacyPage from "./legal/privacy"
import TermsPage from "./legal/terms"
import SecurityPage from "./legal/security"

// Dynamic pages
import ApplicantInfoPage from "./underwriting/applicant-info"
import PolicyDetailsPage from "./underwriting/policy-details"
import DocumentUploadPage from "./underwriting/document-upload"
import ReviewPage from "./underwriting/review"

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="underwriting" element={<UnderwritingPage />} />
          <Route path="underwriting/:type/applicant-info" element={<ApplicantInfoPage />} />
          <Route path="underwriting/:type/policy-details" element={<PolicyDetailsPage />} />
          <Route path="underwriting/:type/document-upload" element={<DocumentUploadPage />} />
          <Route path="underwriting/:type/review" element={<ReviewPage />} />
          <Route path="features/risk-assessment" element={<RiskAssessmentPage />} />
          <Route path="features/insurance-types" element={<InsuranceTypesPage />} />
          <Route path="features/automated-decisions" element={<AutomatedDecisionsPage />} />
          <Route path="product/features" element={<FeaturesPage />} />
          <Route path="product/pricing" element={<PricingPage />} />
          <Route path="product/integrations" element={<IntegrationsPage />} />
          <Route path="company/about" element={<AboutPage />} />
          <Route path="company/blog" element={<BlogPage />} />
          <Route path="company/careers" element={<CareersPage />} />
          <Route path="legal/privacy" element={<PrivacyPage />} />
          <Route path="legal/terms" element={<TermsPage />} />
          <Route path="legal/security" element={<SecurityPage />} />
        </Route>
        <Route path="auth/sign-in" element={<SignInPage />} />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
