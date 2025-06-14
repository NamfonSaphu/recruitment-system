import { FormInput } from "./form/FormInput";
import { SubmitButton } from "./form/Buttons";
import { FormContainer } from "./form/FormContainer";
import { createEmployeeAction } from "@/actions/actions";

export const CreateEmployee = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8"> 
      <FormContainer action={createEmployeeAction}>
        <FormInput name="position" label="Position" type="text" placeholder="e.g., Software Engineer" />
        <FormInput name="fullname" label="Fullname" type="text" placeholder="e.g., John Doe" />
        <FormInput name="email" label="Email" type="email" placeholder="e.g., john.doe@example.com" />
        <FormInput name="salary" label="Salary" type="number" placeholder="e.g., 20000" />
        <FormInput name="url" label="Url/Portfolio" type="text" placeholder="e.g., https://portfolio.example.com" />
        <SubmitButton text="Submit" />
      </FormContainer>
    </section>
  );
};
