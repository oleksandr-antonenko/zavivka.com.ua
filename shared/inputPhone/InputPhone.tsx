import type {FC} from 'react';
import { InputPhoneProps } from "./type";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import { Controller } from 'react-hook-form';
import 'react-phone-number-input/style.css';


const InputPhone: FC<InputPhoneProps> = ({name, control, errors, errorText}) => {

  const classEr = errors[name] ? "border-red-500" : "border-grey-light";
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{ required: true, validate: (value) => isValidPhoneNumber(value)}}
        render={({ field: { ref, value, onChange, ...field }}) => (
          <PhoneInput
            {...field}
            value={value}
            onChange={onChange}
            international
            className={`rounded py-3 pl-6 border bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange text-[16px] text-white w-full ${classEr}`}
            placeholder='Вкажіть номер телефону'
          />
        )}
      />
      <div className="text-[12px] text-red-500 pl-5">
          {errors[name] && <p>{errorText}</p>}
      </div>
    </>
  )
}

export default InputPhone
