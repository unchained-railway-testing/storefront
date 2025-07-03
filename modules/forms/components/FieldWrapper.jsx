/* eslint-disable no-undef */
import classnames from "classnames";
import { useIntl } from "react-intl";

const FieldWrapper = ({
  children,
  className,
  error,
  disabled,
  required,
  name,
  label,
  hideLabel,
  labelClassName,
}) => {
  const { formatMessage } = useIntl();
  const errorsMap = {
    required: formatMessage(
      {
        id: "error_required",
        defaultMessage: "{label} is a required field",
      },
      {
        label: label || name,
      },
    ),
  };
  return (
    <div
      className={classnames(
        "container",
        {
          "is-invalid": !!error,
          disabled,
          required,
        },
        className,
      )}
    >
      <label
        aria-label={label}
        htmlFor={name}
        className={classnames(
          "block text-sm/6 font-medium text-olivebrown-dark",
          {
            "mb-2 rounded border border-red-200 bg-red-50 p-2 pl-4 text-red-600":
              !!error,
            "sr-only": hideLabel,
          },
          labelClassName,
        )}
      >
        {errorsMap[error?.type] ||
          error?.message?.replace(/{label}/gi, label) ||
          label}
      </label>
      {children}
    </div>
  );
};

export default FieldWrapper;
