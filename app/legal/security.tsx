import { CheckCircle2, Lock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecurityPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 w-fit rounded-md bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Security</h1>
        </div>

        <p className="text-xl text-muted-foreground mb-10">
          At InsureAI, security is a top priority. We implement industry-leading security measures to protect your data
          and ensure the integrity of our platform.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Security Approach</h2>
            <div className="prose max-w-none">
              <p>
                InsureAI takes a comprehensive approach to security, implementing multiple layers of protection to
                safeguard your data and ensure the reliability of our platform. Our security program is designed to
                address the unique challenges of AI-powered insurance underwriting, with a focus on data protection,
                system integrity, and compliance with industry regulations.
              </p>
              <p>
                Our security team continuously monitors for threats, conducts regular security assessments, and updates
                our security measures to address emerging risks. We also work closely with independent security
                researchers and industry experts to validate our security controls and identify areas for improvement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Key Security Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption, ensuring that
                    sensitive information remains protected.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Access Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Role-based access controls, multi-factor authentication, and least privilege principles ensure that
                    only authorized users can access sensitive data and systems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Network Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced firewalls, intrusion detection systems, and regular vulnerability scanning protect our
                    infrastructure from external threats.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Secure Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our development process includes security reviews, code scanning, and penetration testing to
                    identify and address security issues before deployment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Logging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive logging and monitoring systems detect suspicious activities and provide visibility
                    into system operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Incident Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A dedicated incident response team is ready to quickly address security incidents and minimize
                    potential impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Compliance & Certifications</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">SOC 2 Type II</h3>
                  <p className="text-muted-foreground">
                    InsureAI has successfully completed a SOC 2 Type II audit, demonstrating our commitment to security,
                    availability, processing integrity, confidentiality, and privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">HIPAA Compliance</h3>
                  <p className="text-muted-foreground">
                    Our platform is designed to meet HIPAA requirements for the protection of sensitive health
                    information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">GDPR Compliance</h3>
                  <p className="text-muted-foreground">
                    InsureAI is committed to protecting the privacy rights of individuals in accordance with the General
                    Data Protection Regulation (GDPR).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">CCPA Compliance</h3>
                  <p className="text-muted-foreground">
                    We adhere to the California Consumer Privacy Act (CCPA) requirements for the protection of
                    California residents' personal information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Security Best Practices</h2>
            <div className="prose max-w-none">
              <p>
                While we implement robust security measures to protect our platform and your data, security is a shared
                responsibility. We recommend the following best practices to enhance the security of your InsureAI
                account:
              </p>
              <ul>
                <li>
                  <strong>Use strong, unique passwords</strong> for your InsureAI account and change them regularly.
                </li>
                <li>
                  <strong>Enable multi-factor authentication</strong> to add an extra layer of security to your account.
                </li>
                <li>
                  <strong>Regularly review user access</strong> and remove access for users who no longer need it.
                </li>
                <li>
                  <strong>Keep your devices and browsers updated</strong> with the latest security patches.
                </li>
                <li>
                  <strong>Be cautious of phishing attempts</strong> and verify the authenticity of emails claiming to be
                  from InsureAI.
                </li>
                <li>
                  <strong>Report suspicious activities</strong> to our security team immediately.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Report a Security Concern</h2>
            </div>
            <p className="mb-6">
              If you discover a potential security vulnerability or have concerns about the security of our platform,
              please contact our security team immediately.
            </p>
            <Button size="lg">Contact Security Team</Button>
          </section>
        </div>
      </div>
    </div>
  )
}
