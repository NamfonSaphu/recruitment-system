import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

export const FormInput = (props: FormInputProps) => {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="flex flex-col space-y-1 mb-4">
      {label && (
        <Label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
