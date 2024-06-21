import { DataForSubmit } from "@/components/booking";
import { FieldErrors, UseFormRegister} from "react-hook-form";

export interface InputProps {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<DataForSubmit>;
    errors: FieldErrors;
    errorText?: string;
    lengthMin?: number;
    lengthMax?: number;
}
