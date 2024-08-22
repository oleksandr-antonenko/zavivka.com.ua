import { DataForSubmit } from "@/components/booking";
import { Control, FieldErrors} from "react-hook-form";

export interface InputPhoneProps {
    name: string;
    errors: FieldErrors;
    errorText: string;
    control: Control<DataForSubmit>;
}
