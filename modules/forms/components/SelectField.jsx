import classNames from "classnames";
import React from "react";
import { useFormContext } from "react-hook-form";
import useValidators from "../lib/useValidators";

import FieldWrapper from "./FieldWrapper";

const SelectField = ({ ...props }) => {
  const { register, formState } = useFormContext();
  const { validateRequired } = useValidators();

  const error = formState?.errors?.[props?.name];

  return (
    <FieldWrapper {...props} error={error}>
      <select
        className={classNames(
          "block w-full appearance-none rounded-md bg-beige py-2 pr-8 pl-3 text-base text-olivebrown-darker outline-1 -outline-offset-1 outline-olivebrown-light-2 focus:outline-2 focus:-outline-offset-2 focus:outline-olivebrown sm:text-sm/6",
          {
            "outline-olivebrown-light-2 focus:outline-olivebrown": !error,
            "outline-red-600 focus:outline-red-600": !!error,
          },
        )}
        disabled={props.disabled}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        value={props.value}
        {...register(props.name, {
          required: props?.required ? validateRequired : false,
          validate: {
            ...props.validators,
          },
        })}
      >
        {props.children}
      </select>
    </FieldWrapper>
  );
};

export default SelectField;
