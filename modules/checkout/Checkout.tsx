import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "../common/components/ErrorMessage";
import CheckoutContact from "./CheckoutContact";
import CheckoutAddresses from "./CheckoutAddresses";
import CheckoutPaymentMethod from "./CheckoutPaymentMethod";
import { useAppContext } from "../common/components/AppContextWrapper";
import usePushNotification from "../context/push-notification/usePushNotification";
import FormattedPrice from "../common/components/FormattedPrice";
import { useIntl } from "react-intl";

export const CART_CHECKOUT_QUERY = gql`
  query CartCheckout {
    me {
      _id
      cart {
        _id
        itemsTotal: total(category: ITEMS) {
          amount
          currencyCode
        }
        total {
          amount
          currencyCode
        }
        items {
          _id
          quantity
          unitPrice {
            amount
            currencyCode
          }
          product {
            _id
            texts {
              title
              subtitle
            }
            media {
              _id
              file {
                url
              }
              texts {
                title
              }
            }
          }
        }
        paymentFee: total(category: PAYMENT) {
          amount
          currencyCode
        }
        payment {
          _id
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
  const { formatMessage } = useIntl();

  if (error) return <ErrorMessage message="Error loading cart" />;
  if (!data?.me?.cart) return <div>Loading</div>;

  const isAddressesMissing =
    !data.me.cart.delivery?.address?.firstName &&
    !data.me.cart.billingAddress?.firstName;
  const isContactDataMissing =
    !data.me.cart.contact?.emailAddress && !emailSupportDisabled;

  const cart = data.me.cart;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
      <div data-loading={loading}>
        <CheckoutAddresses cart={cart} isInitial={isAddressesMissing} />
        {!isAddressesMissing && (
          <CheckoutContact
            cart={cart}
            isInitial={isContactDataMissing}
          />
        )}
        {!isAddressesMissing && !isContactDataMissing && (
          <CheckoutPaymentMethod
            cart={cart}
            disabled={isContactDataMissing}
          />
        )}
        
        {isContactDataMissing && !isSubscribed && (
          <div className="mt-10 bg-olivebrown-light-2 border border-olivebrown-light p-6 rounded-lg print:hidden">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-olivebrown-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-olivebrown-darker">
                  Contact information required
                </h3>
                <div className="mt-2 text-sm text-olivebrown-dark">
                  <p>
                    Please provide a way for us to contact you about your order status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Order summary */}
      <div className="mt-10 lg:mt-0">
        <h2 className="text-lg font-medium text-olivebrown-darker">Order summary</h2>
        
        <div className="mt-4 bg-beige rounded-lg border border-olivebrown-light-2 shadow-sm">
          <div className="px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-olivebrown-light-2">
                {cart.items?.map((item) => (
                  <li key={item._id} className="py-6 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-olivebrown-light-2">
                      {item.product.media?.[0]?.file?.url ? (
                        <img
                          src={item.product.media[0].file.url}
                          alt={item.product.texts?.title || ''}
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <div className="h-full w-full bg-olivebrown-light flex items-center justify-center">
                          <span className="text-olivebrown-dark text-xs">No image</span>
                        </div>
                      )}
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-olivebrown-darker">
                          <h3>{item.product.texts?.title}</h3>
                          <p className="ml-4">
                            <FormattedPrice price={item.unitPrice} />
                          </p>
                        </div>
                        {item.product.texts?.subtitle && (
                          <p className="mt-1 text-sm text-olivebrown-dark">{item.product.texts.subtitle}</p>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-olivebrown-dark">Qty {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-olivebrown-light-2 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-olivebrown-darker">
              <p>Subtotal</p>
              <p>
                <FormattedPrice price={cart.itemsTotal} />
              </p>
            </div>
            {cart.paymentFee?.amount > 0 && (
              <div className="flex justify-between text-sm text-olivebrown-dark mt-2">
                <p>Payment fee</p>
                <p>
                  <FormattedPrice price={cart.paymentFee} />
                </p>
              </div>
            )}
            <div className="flex justify-between text-lg font-medium text-olivebrown-darker mt-4 pt-4 border-t border-olivebrown-light-2">
              <p>Total</p>
              <p>
                <FormattedPrice price={cart.total} />
              </p>
            </div>
            <p className="mt-0.5 text-sm text-olivebrown-dark">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
