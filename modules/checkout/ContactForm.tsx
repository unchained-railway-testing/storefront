import { useIntl } from "react-intl";
import { useState } from "react";
import classNames from "classnames";
import { useAppContext } from "../common/components/AppContextWrapper";
import Button from "../common/components/Button";

import Toggle from "../common/components/Toggle";
import usePushNotification from "../context/push-notification/usePushNotification";

const ContactForm = ({ contact, onSubmit, onCancel }) => {
  const { formatMessage } = useIntl();
  const { isSubscribed, subscribe, unsubscribe } = usePushNotification();
  const [emailAddress, setEmailAddress] = useState(contact?.emailAddress);
  const [telNumber, setTelNumber] = useState(contact?.telNumber);
  const { emailSupportDisabled } = useAppContext();
  const submitHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await onSubmit({ emailAddress, telNumber });
  };

  const isDisabled = !emailAddress && !isSubscribed;
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-4">
        <label
          htmlFor="emailAddress"
          className="block text-sm/6 font-medium text-olivebrown-dark"
        >
          {formatMessage({
            id: "email-address",
            defaultMessage: "Email Address",
          })}
        </label>
        <div className="mt-2">
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required={!emailSupportDisabled || !isSubscribed}
            className="block w-full rounded-md bg-beige px-3 py-2 text-base text-olivebrown-darker outline-1 -outline-offset-1 outline-olivebrown-light-2 placeholder:text-olivebrown-light focus:outline-2 focus:-outline-offset-2 focus:outline-olivebrown sm:text-sm/6"
            name="emailAddress"
            id="emailAddress"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="telNumber"
          className="block text-sm/6 font-medium text-olivebrown-dark"
        >
          {formatMessage({
            id: "telNumber",
            defaultMessage: "Mobile Phone",
          })}
        </label>
        <div className="mt-2">
          <input
            type="tel"
            value={telNumber}
            id="telNumber"
            name="telNumber"
            onChange={(e) => setTelNumber(e.target.value)}
            className="block w-full rounded-md bg-beige px-3 py-2 text-base text-olivebrown-darker outline-1 -outline-offset-1 outline-olivebrown-light-2 placeholder:text-olivebrown-light focus:outline-2 focus:-outline-offset-2 focus:outline-olivebrown sm:text-sm/6"
          />
        </div>
      </div>
      <Toggle
        className=""
        onToggle={async () => {
          if (isSubscribed) {
            await unsubscribe();
          } else {
            await subscribe();
          }
        }}
        toggleText="Receive order confirmation / order status update"
        toggleKey=""
        active={isSubscribed}
      />

      <div className="mt-6 flex gap-4">
        <input
          type="submit"
          id="submit"
          disabled={isDisabled}
          name="submit"
          value={formatMessage({
            id: "save_contact",
            defaultMessage: "Save Contact Data",
          })}
          className={classNames(
            "flex-1 rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-olivebrown-light focus:ring-offset-2",
            {
              "bg-olivebrown-light cursor-not-allowed": isDisabled,
              "bg-olivebrown hover:bg-olivebrown-dark": !isDisabled,
            },
          )}
        />
        <Button
          text={formatMessage({
            id: "cancel",
            defaultMessage: "Cancel",
          })}
          type="button"
          className="bg-beige-alt text-olivebrown-dark border border-olivebrown-light hover:bg-olivebrown-alt rounded-md py-2 px-4 text-sm font-medium"
          onClick={onCancel}
        />
      </div>
    </form>
  );
};

export default ContactForm;
