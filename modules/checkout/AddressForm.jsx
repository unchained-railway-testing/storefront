import { useIntl } from "react-intl";
import Button from "../common/components/Button";

import COUNTRIES from "../common/data/countries-list";
import Form from "../forms/components/Form";
import FormErrors from "../forms/components/FormErrors";
import SelectField from "../forms/components/SelectField";
import TextField from "../forms/components/TextField";

const AddressForm = ({ address, onSubmit, onCancel }) => {
  const { formatMessage } = useIntl();

  const submitHandler = async (data) => {
    await onSubmit(data);
  };

  const onSubmitError = async (e) => {
    return {
      root: {
        message: e.message,
      },
    };
  };

  return (
    <Form
      onSubmit={submitHandler}
      onSubmitError={onSubmitError}
      defaultValues={{ ...address }}
    >
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <TextField
            label={formatMessage({
              id: "first_name",
              defaultMessage: "First name",
            })}
            name="firstName"
            required
          />
        </div>
        <div>
          <TextField
            label={formatMessage({
              id: "last-name",
              defaultMessage: "Last Name",
            })}
            name="lastName"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <TextField
            label={`${formatMessage({
              id: "company-name",
              defaultMessage: "Company Name",
            })} ${formatMessage({
              id: "optional",
              defaultMessage: "(Optional)",
            })}`}
            name="company"
          />
        </div>

        <div className="sm:col-span-2">
          <TextField
            label={formatMessage({ id: "address", defaultMessage: "Address" })}
            name="addressLine"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <TextField
            label={formatMessage({
              id: "apartment_suite",
              defaultMessage: "Apartment, suite, etc.",
            })}
            name="addressLine2"
          />
        </div>

        <div>
          <TextField
            label={formatMessage({
              id: "city",
              defaultMessage: "City",
            })}
            name="city"
            required
          />
        </div>

        <div>
          <TextField
            label={formatMessage({
              id: "postal-code-or-zip",
              defaultMessage: "Postal Code / ZIP",
            })}
            name="postalCode"
            required
          />
        </div>

        <div>
          <TextField
            label={`${formatMessage({ id: "region", defaultMessage: "Region" })} ${formatMessage({
              id: "optional",
              defaultMessage: "(Optional)",
            })}`}
            name="regionCode"
          />
        </div>
        <div>
          <SelectField
            label={formatMessage({ id: "country", defaultMessage: "Country" })}
            name="countryCode"
            required
          >
            <option value=""> - </option>
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </SelectField>
        </div>
      </div>
      
      <FormErrors />

      <div className="mt-6 flex gap-4">
        <Button
          text={formatMessage({
            id: "save_address",
            defaultMessage: "Save Address",
          })}
          type="submit"
          className="flex-1 bg-olivebrown text-white hover:bg-olivebrown-dark"
        />
        <Button
          text={formatMessage({
            id: "cancel",
            defaultMessage: "Cancel",
          })}
          className="bg-beige-alt text-olivebrown-dark border border-olivebrown-light hover:bg-olivebrown-alt"
          type="button"
          onClick={onCancel}
        />
      </div>
    </Form>
  );
};

export default AddressForm;
