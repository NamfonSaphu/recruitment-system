import NavbarPage from "@/components/nabar/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Mail, Phone, ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export default function ApplySuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <NavbarPage />

        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-700">Application Submitted Successfully!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for your interest in joining our team. We&apos;ve received your application and will review it
              carefully.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Initial Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Our hiring team will review your application within 3-5 business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Next Steps</h4>
                  <p className="text-sm text-muted-foreground">
                    If your profile matches our requirements, we&apos;ll reach out to schedule an initial conversation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Expected Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Application Review</span>
                <span className="text-sm text-muted-foreground">3-5 business days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Initial Interview</span>
                <span className="text-sm text-muted-foreground">1-2 weeks</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Technical/Final Round</span>
                <span className="text-sm text-muted-foreground">2-3 weeks</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Decision & Offer</span>
                <span className="text-sm text-muted-foreground">3-4 weeks</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Questions About Your Application?</CardTitle>
            <CardDescription>
              If you have any questions or need to update your application, don&apos;t hesitate to reach out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">careers@company.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">(+66) 12-345-6789</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Positions
            </Link>
          </Button>
          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
