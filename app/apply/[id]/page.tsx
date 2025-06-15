
'use client'

import { CreateEmployee } from "@/components/employee";
import NavbarPage from "@/components/nabar/navbar";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { positions } from "@/utils/position";
import { useParams } from 'next/navigation';

export default function ApplyPage() {
  const params = useParams();
  const id = Number(params.id); 

  const position = positions.find((pos) => pos.id === id);

  if (!position) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold text-red-600">Position not found</h1>
      </div>
    );
  }

    if (!position) {
        return (
            <div className="container py-10">
                <h1 className="text-2xl font-bold text-red-600">Position not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-8 space-y-1">
            <NavbarPage />
            <div className="container py-10 space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Apply for: {position.title}</h1>
                    <p className="text-muted-foreground">{position.description}</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Position Details</CardTitle>
                        <CardDescription>{position.department}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p><strong>Location:</strong> {position.location}</p>
                        <p><strong>Type:</strong> {position.type}</p>
                        <p><strong>Salary:</strong> {position.salary}</p>
                        <div>
                            <strong>Requirements:</strong>
                            <ul className="list-disc list-inside mt-1">
                                {position.requirements.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>
                                Please fill in your personal and contact information.
                            </CardDescription>
                        </CardHeader>
                        <CreateEmployee />
                    </Card>
                </div>
            </div>
        </div>
    );
}
