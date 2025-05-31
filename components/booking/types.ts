import { UseFormRegister } from 'react-hook-form';

export type ServiceCheckbox = {
  name: string;
  title: string;
};

export interface ServiceCheckboxProps {
  servicesCheckbox: ServiceCheckbox[];
  register: UseFormRegister<DataForSubmit>;
}

export interface DataForSubmit {
  [key: string]: string;
}

export interface BookingProps {
  forMen?: boolean;
  isCorrection?: boolean;
  servicesForCheckbox?: ServiceCheckbox[];
}

export interface AfterBookingProps {
  visible: boolean;
  close: () => void;
}
