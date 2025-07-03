import { useIntl } from "react-intl";
import Button from "../common/components/Button";

const formatAddress = ({
  firstName,
  lastName,
  addressLine,
  addressLine2,
  postalCode,
  city,
  regionCode,
  countryCode,
}) =>
  [
    [firstName, lastName].filter(Boolean).join(" "),
    addressLine,
    addressLine2,
    [postalCode, city].filter(Boolean).join(" "),
    regionCode,
    countryCode,
  ]
    .filter(Boolean)
    .join("\n");

const AddressPanel = ({ address, onEdit }) => {
  const { formatMessage } = useIntl();
  return (
    <div className="mt-4 p-4 bg-beige-alt rounded-lg border border-olivebrown-light-2">
      <div className="text-olivebrown-darker whitespace-pre-wrap">
        {formatAddress(address)}
      </div>
      <Button
        text={formatMessage({
          id: "edit-address",
          defaultMessage: "Edit Address",
        })}
        type="button"
        className="mt-3 inline-flex justify-center rounded-md border border-transparent bg-olivebrown py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-olivebrown-dark focus:outline-none focus:ring-2 focus:ring-olivebrown-light focus:ring-offset-2"
        onClick={onEdit}
      />
    </div>
  );
};

export default AddressPanel;
