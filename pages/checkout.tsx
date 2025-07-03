import { useIntl } from "react-intl";
import Checkout from "../modules/checkout/Checkout";

import MetaTags from "../modules/common/components/MetaTags";

const CheckoutPage = () => {
  const intl = useIntl();

  return (
    <>
      <MetaTags
        title={intl.formatMessage({
          id: "checkout",
          defaultMessage: "Checkout",
        })}
      />
      <div className="bg-beige min-h-screen">
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">
            {intl.formatMessage({
              id: "checkout",
              defaultMessage: "Checkout",
            })}
          </h2>
          <Checkout />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
