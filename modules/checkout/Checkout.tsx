import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "../common/components/ErrorMessage";
import CheckoutContact from "./CheckoutContact";
import CheckoutAddresses from "./CheckoutAddresses";
import CheckoutPaymentMethod from "./CheckoutPaymentMethod";
import { useAppContext } from "../common/components/AppContextWrapper";
import usePushNotification from "../context/push-notification/usePushNotification";

export const CART_CHECKOUT_QUERY = gql`
  query CartCheckout {
    me {
      _id
      cart {
        _id
        total(category: ITEMS) {
          amount
          currencyCode
        }
        payment {
          _id
          fee {
            amount
            currencyCode
          }
          provider {
            _id
            type
            interface {
              _id
              label
              version
            }
          }
        }
        supportedPaymentProviders {
          _id
          type
          interface {
            _id
            label
            version
          }
        }
        contact {
          telNumber
          emailAddress
        }
        billingAddress {
          firstName
          lastName
          addressLine
          addressLine2
          postalCode
          regionCode
          city
          countryCode
        }
        delivery {
          _id
          ... on OrderDeliveryShipping {
            address {
              firstName
              lastName
              addressLine
              addressLine2
              postalCode
              regionCode
              city
              countryCode
            }
          }
        }
      }
    }
  }
`;

const Checkout = () => {
  const { emailSupportDisabled } = useAppContext();
  const { loading, error, data } = useQuery(CART_CHECKOUT_QUERY, {
    notifyOnNetworkStatusChange: true,
  });
  const { isSubscribed } = usePushNotification();

  if (error) return <ErrorMessage message="Error loading cart" />;
  if (!data?.me?.cart) return <div>Loading</div>;

  const isAddressesMissing =
    !data.me.cart.delivery?.address?.firstName &&
    !data.me.cart.billingAddress?.firstName;
  const isContactDataMissing =
    !data.me.cart.contact?.emailAddress && !emailSupportDisabled;

  return (
    <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
      <div data-loading={loading}>
        <CheckoutAddresses cart={data.me.cart} isInitial={isAddressesMissing} />
        {!isAddressesMissing && (
          <CheckoutContact
            cart={data.me.cart}
            isInitial={isContactDataMissing}
          />
        )}
        {!isAddressesMissing && !isContactDataMissing && (
          <CheckoutPaymentMethod
            cart={data.me.cart}
            disabled={isContactDataMissing}
          />
        )}
      </div>
      
      {/* Order summary will be added by the individual components */}
      
      {isContactDataMissing && !isSubscribed && (
        <div className="col-span-2 bg-beige-alt p-8 rounded-lg text-center border border-red-300 print:hidden">
          <h1 className="text-2xl font-semibold text-red-600">
            Contact address is required
          </h1>
          <p className="text-olivebrown-dark mt-2">
            You have not selected any method we can use to contact you. Please
            select at least one medium we can use to send you information about your
            order status in order to complete your order.
          </p>
        </div>
      )}
    </form>
  );
};

export default Checkout;
