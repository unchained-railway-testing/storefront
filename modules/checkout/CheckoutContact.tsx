import { useState } from "react";
import Link from "next/link";

import { useIntl } from "react-intl";
import ContactForm from "./ContactForm";
import ContactPanel from "./ContactPanel";
import useAddEmail from "../cart/hooks/useAddEmail";
import useUpdateCartContact from "../cart/hooks/useUpdateCartContact";

const CheckoutContact = ({ cart, isInitial }) => {
  const { updateCartContact } = useUpdateCartContact();
  const [editMode, setEditMode] = useState(isInitial);
  const { addEmail } = useAddEmail();
  const [showLogin, setShowLogin] = useState(false);
  const { formatMessage } = useIntl();

  const updateContact = async (contactInfo) => {
    try {
      // Try to add email first only if it's provided
      if (contactInfo.emailAddress) {
        try {
          await addEmail({
            email: contactInfo.emailAddress,
          });
        } catch (emailError) {
          // If email addition fails with duplicate, show login option
          if ((emailError as any)?.message.includes("duplicate")) {
            setShowLogin(true);
            return; // Don't proceed with cart update if email is duplicate
          }
          // For other email errors, log but continue with cart update
          console.warn("Email addition failed:", emailError);
        }
      }

      await updateCartContact({
        contact: contactInfo,
      });
      setShowLogin(false);
      setEditMode(false);
    } catch (error) {
      console.error("Contact update error:", error);
      throw error;
    }
  };

  const contact = { ...(cart.contact || {}) };
  delete contact?.__typename;

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <div className="mt-10 border-b border-olivebrown-light-2 pb-10">
      <h2 className="text-lg font-medium text-olivebrown-darker">
        {formatMessage({
          id: "contact_information",
          defaultMessage: "Contact information",
        })}
      </h2>
      {showLogin && editMode && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">
            {formatMessage({
              id: "email-not-available",
              defaultMessage: "E-Mail address is not available, please",
            })}{" "}
            <Link
              href="/login"
              className="font-medium text-red-700 hover:text-red-500 underline"
            >
              {formatMessage({
                id: "sign-in",
                defaultMessage: "Sign in",
              })}
            </Link>{" "}
            {formatMessage({
              id: "or-choose-another",
              defaultMessage: "or choose another one",
            })}
          </p>
        </div>
      )}
      <div className="mt-4">
        {editMode ? (
          <ContactForm
            contact={contact}
            onSubmit={updateContact}
            onCancel={toggleEditMode}
          />
        ) : (
          <ContactPanel contact={contact} onEdit={toggleEditMode} />
        )}
      </div>
    </div>
  );
};

export default CheckoutContact;
