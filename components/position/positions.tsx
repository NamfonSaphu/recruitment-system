import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase } from "lucide-react"
import { positions } from "@/utils/position"
import { SubmitButton } from "../form/Buttons"


export default function PositionsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Open Positions</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join our team and help us build the future. We&#39;re always looking for talented individuals who are passionate
                        about making a difference.
                    </p>
                </div>

                <div className="grid gap-6">
                    {positions.map((position) => (
                        <Card key={position.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div className="space-y-2">
                                        <CardTitle className="text-xl">{position.title}</CardTitle>
                                        <CardDescription className="text-base">{position.description}</CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="w-fit">
                                        {position.department}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {position.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {position.type}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Briefcase className="h-4 w-4" />
                                        {position.salary}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">Requirements:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                        {position.requirements.map((req, index) => (
                                            <li key={index}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>

                            <CardFooter className="flex justify-between items-center">
                                <SubmitButton text="Apply Now" href={`/apply/${position.id}`} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
