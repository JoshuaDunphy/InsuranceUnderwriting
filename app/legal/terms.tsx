import { Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 w-fit rounded-md bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <div className="text-sm text-muted-foreground mb-6">
          <p>Last updated: June 1, 2023</p>
        </div>

        <div className="prose max-w-none">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the InsureAI platform and services. Please
            read these Terms carefully before using our platform.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the InsureAI platform, you agree to be bound by these Terms. If you do not agree to
            these Terms, you may not access or use the platform.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. If we make changes to these Terms, we will provide notice of such
            changes, such as by sending an email notification, providing notice through the platform, or updating the
            "Last updated" date at the top of these Terms. By continuing to use the platform after the revised Terms
            become effective, you agree to be bound by the revised Terms.
          </p>

          <h2>Access and Use of the Platform</h2>
          <p>
            Subject to your compliance with these Terms, InsureAI grants you a limited, non-exclusive, non-transferable,
            non-sublicensable license to access and use the platform for your internal business purposes.
          </p>

          <h2>Account Registration</h2>
          <p>
            To access certain features of the platform, you may be required to register for an account. You agree to
            provide accurate, current, and complete information during the registration process and to update such
            information to keep it accurate, current, and complete. You are responsible for safeguarding your account
            credentials and for all activities that occur under your account.
          </p>

          <h2>Subscription and Fees</h2>
          <p>
            Some features of the platform may require a subscription. You agree to pay all fees associated with your
            subscription. All fees are non-refundable except as expressly provided in these Terms or as required by
            applicable law.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            The platform and its entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by InsureAI, its licensors, or other providers of such material and are protected by
            copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2>User Content</h2>
          <p>
            You retain all rights in, and are solely responsible for, the content you post, upload, or otherwise make
            available through the platform ("User Content"). By making any User Content available through the platform,
            you grant to InsureAI a non-exclusive, transferable, sublicensable, worldwide, royalty-free license to use,
            copy, modify, create derivative works based upon, distribute, publicly display, publicly perform, and
            distribute your User Content in connection with operating and providing the platform.
          </p>

          <h2>Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the platform in any manner that could disable, overburden, damage, or impair the platform or interfere
              with any other party's use of the platform
            </li>
            <li>
              Use any robot, spider, or other automatic device, process, or means to access the platform for any
              purpose, including monitoring or copying any of the material on the platform
            </li>
            <li>
              Use any manual process to monitor or copy any of the material on the platform or for any other
              unauthorized purpose without our prior written consent
            </li>
            <li>Use any device, software, or routine that interferes with the proper working of the platform</li>
            <li>
              Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or
              technologically harmful
            </li>
            <li>
              Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the platform, the
              server on which the platform is stored, or any server, computer, or database connected to the platform
            </li>
            <li>Attack the platform via a denial-of-service attack or a distributed denial-of-service attack</li>
            <li>Otherwise attempt to interfere with the proper working of the platform</li>
          </ul>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to all or part of the platform, with or without notice, for any
            conduct that we, in our sole discretion, believe is in violation of these Terms or is harmful to other users
            of the platform, us, or third parties, or for any other reason.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL INSUREAI, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
            OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
            CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE PLATFORM, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms and your use of the platform will be governed by and construed in accordance with the laws of
            the State of California, without giving effect to any choice or conflict of law provision or rule.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            Any legal action or proceeding arising out of or relating to these Terms or the platform will be exclusively
            settled in the state or federal courts located in San Francisco County, California.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:legal@insureai.com">legal@insureai.com</a>.
          </p>
        </div>

        <div className="mt-12 bg-muted p-8 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">Have questions about our terms?</h2>
          </div>
          <p className="mb-6">
            Our team is here to help you understand our terms of service and how they apply to your use of the InsureAI
            platform.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
