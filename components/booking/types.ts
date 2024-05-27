import { UseFormRegister } from "react-hook-form";

export type ServiceCheckbox = {
    name: string;
    title: string;
  };

export interface ServiceCheckboxProps {
  servicesCheckbox: ServiceCheckbox[];
  register: UseFormRegister<DataForSubmit>
}

export interface DataForSubmit{
  [key: string]: string;
}
