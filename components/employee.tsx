import { useState } from "react";
import { FormInput } from "./form/FormInput";
import { SubmitButton } from "./form/Buttons";
import { FormContainer } from "./form/FormContainer";
import { createEmployeeAction } from "@/actions/actions";
import { MultiFileDropzoneUsage } from "./upload-file";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const CreateEmployee = () => {
  const [uploadedUrl, setUploadedUrl] = useState<string | undefined>(undefined);

  return (
    <section className="px-4 md:px-6 lg:px-8">
      <FormContainer action={createEmployeeAction}>
        <FormInput name="position" label="Position" type="text" placeholder="e.g., Software Engineer" />
        <FormInput name="fullname" label="Fullname" type="text" placeholder="e.g., John Doe" />
        <FormInput name="email" label="Email" type="email" placeholder="e.g., john.doe@example.com" />
        <FormInput name="salary" label="Salary" type="number" placeholder="e.g., 20000" />
        <FormInput name="url" label="Url/Portfolio" type="text" placeholder="e.g., https://portfolio.example.com" />

        {uploadedUrl && (
          <input type="hidden" name="fileUrl" value={uploadedUrl} />
        )}

        <Card>
          <CardHeader>
            <CardTitle>Upload Your Resume</CardTitle>
            <CardDescription>
              Upload your resume and other required files.
            </CardDescription>
          </CardHeader>

          <MultiFileDropzoneUsage onUploadComplete={setUploadedUrl} />
        </Card>

        <div className="mt-6">
          <SubmitButton text="Submit" />
        </div>
      </FormContainer>
    </section>
  );
};
