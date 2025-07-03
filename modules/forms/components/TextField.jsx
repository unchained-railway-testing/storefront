import classnames from "classnames";
import React from "react";
import { useFormContext } from "react-hook-form";
import useValidators from "../lib/useValidators";

import FieldWrapper from "./FieldWrapper";

const TextField = ({ ...props }) => {
  const { register, formState } = useFormContext();
  const { validateRequired } = useValidators();

  const error = formState?.errors?.[props?.name];

  return (
    <FieldWrapper {...props} error={error}>
      <input
        className={classnames(
          "block w-full rounded-md bg-beige px-3 py-2 text-base text-olivebrown-darker outline-1 -outline-offset-1 outline-olivebrown-light-2 placeholder:text-olivebrown-light focus:outline-2 focus:-outline-offset-2 focus:outline-olivebrown sm:text-sm/6",
          props.className,
          {
            "outline-red-600 focus:outline-red-600": !!error,
            "outline-olivebrown-light-2 focus:outline-olivebrown": !error,
          },
        )}
        disabled={props.disabled}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        defaultValue={props.defaultValue}
        type={props.type}
        value={props.value}
        {...register(props.name, {
          required: props?.required ? validateRequired : false,
          validate: {
            ...props.validators,
          },
        })}
      />
    </FieldWrapper>
  );
};

export default TextField;
