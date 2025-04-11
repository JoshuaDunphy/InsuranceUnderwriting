import { Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 w-fit rounded-md bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <div className="text-sm text-muted-foreground mb-6">
          <p>Last updated: June 1, 2023</p>
        </div>

        <div className="prose max-w-none">
          <p>
            At InsureAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our AI-powered insurance underwriting platform.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide to us:</strong> This includes personal information such as your name,
              email address, company information, and any other information you provide when you register for an
              account, use our services, or communicate with us.
            </li>
            <li>
              <strong>Information we collect automatically:</strong> When you visit our website or use our platform, we
              may automatically collect certain information about your device, browsing actions, and patterns. This
              information may include your IP address, browser type, operating system, referring URLs, and information
              about how you use our platform.
            </li>
            <li>
              <strong>Information from third parties:</strong> We may receive information about you from third parties,
              including business partners, insurance carriers, and data providers.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our platform and services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our platform</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience on our platform</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>With service providers:</strong> We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us or on our behalf.
            </li>
            <li>
              <strong>With business partners:</strong> We may share your information with our business partners to offer
              you certain products, services, or promotions.
            </li>
            <li>
              <strong>For legal purposes:</strong> We may disclose your information if required to do so by law or in
              response to valid requests by public authorities.
            </li>
            <li>
              <strong>With your consent:</strong> We may share your information with your consent or at your direction.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure. Although we will do our best to protect your personal information,
            transmission of personal information to and from our platform is at your own risk.
          </p>

          <h2>Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this
            Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal
            obligations, resolve disputes, and enforce our policies.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to request restriction of processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@insureai.com">privacy@insureai.com</a>.
          </p>
        </div>

        <div className="mt-12 bg-muted p-8 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">Have questions about our privacy practices?</h2>
          </div>
          <p className="mb-6">
            Our team is here to help you understand how we protect your data and comply with privacy regulations.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
