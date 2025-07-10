import { useIntl } from "react-intl";
import {
  PrinterIcon,
  UserIcon,
  TruckIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import useFormatDateTime from "../common/utils/useFormatDateTime";
import FormattedPrice from "../common/components/FormattedPrice";
import Button from "../common/components/Button";

const OrderDetail = ({ order }) => {
  const { formatMessage } = useIntl();
  const { formatDateTime } = useFormatDateTime();

  const onPrint = () => {
    window.print();
  };

  const statusSteps = [
    { name: "OPEN", label: "Order Placed", date: order?.created, icon: "📝" },
    { name: "PENDING", label: "Processing", date: order?.updated, icon: "⏳" },
    {
      name: "CONFIRMED",
      label: "Confirmed",
      date: order?.confirmed,
      icon: "✅",
    },
    { name: "FULFILLED", label: "Delivered", date: null, icon: "🚚" },
  ];

  const currentStatusIndex = statusSteps.findIndex(
    (step) => step.name === order?.status,
  );

  return (
    <div className="min-h-screen">
      {/* Light Header Background */}
      <div className="bg-gradient-to-r from-beige via-beige-alt to-beige">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-olivebrown-light to-olivebrown-dark rounded-full mb-6 shadow-lg">
              <CheckCircleIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-olivebrown-darker mb-2 tracking-tight">
              Order Confirmed
            </h1>
            <p className="text-olivebrown-dark text-lg">
              Thank you for your purchase! Your order is being processed.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 -mt-8">
        {/* Elegant Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-olivebrown-light/30 p-8 mb-12 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-olivebrown to-olivebrown-dark rounded-xl flex items-center justify-center">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-olivebrown-darker tracking-tight">
                  Order #{order?.orderNumber}
                </h2>
                <p className="text-olivebrown-dark font-medium">
                  Your yoga journey continues
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-olivebrown-dark uppercase tracking-wide">
                Order Placed
              </p>
              <p className="text-xl font-bold text-olivebrown-darker">
                {order?.created
                  ? formatDateTime(order.created)
                  : formatDateTime(new Date())}
              </p>
              <div className="print:hidden mt-4">
                <Button
                  text={formatMessage({
                    id: "print",
                    defaultMessage: "Print Order",
                  })}
                  className="bg-olivebrown-darker text-white hover:bg-olivebrown-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  type="button"
                  onClick={onPrint}
                  icon={<PrinterIcon className="h-4 w-4" />}
                />
              </div>
            </div>
          </div>

          {/* Premium Status Progress */}
          <div className="bg-gradient-to-r from-beige-alt to-beige rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              {statusSteps.map((step, index) => (
                <div key={step.name} className="flex-1 text-center relative">
                  {index < statusSteps.length - 1 && (
                    <div
                      className={`absolute top-6 left-1/2 transform translate-x-1/2 w-full h-0.5 ${
                        index < currentStatusIndex
                          ? "bg-gradient-to-r from-olivebrown-light to-olivebrown"
                          : "bg-olivebrown-light/30"
                      }`}
                      style={{ zIndex: 0 }}
                    />
                  )}
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                        index <= currentStatusIndex
                          ? "bg-gradient-to-br from-olivebrown-light to-olivebrown-dark shadow-lg transform scale-110"
                          : "bg-white border-2 border-olivebrown-light"
                      }`}
                    >
                      {index <= currentStatusIndex ? (
                        <CheckCircleIcon className="h-6 w-6 text-white" />
                      ) : (
                        <span className="text-olivebrown-dark">
                          {step.icon}
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      <p
                        className={`text-sm font-semibold ${
                          index <= currentStatusIndex
                            ? "text-olivebrown-darker"
                            : "text-olivebrown-dark"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-olivebrown-dark">
                        {step.date
                          ? formatDateTime(step.date).split(",")[0]
                          : step.name === "FULFILLED"
                            ? "Pending"
                            : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-olivebrown to-olivebrown-dark text-white shadow-lg">
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                {order?.status || "CONFIRMED"}
              </span>
              <p className="text-sm text-olivebrown-dark mt-2 font-medium">
                Expected delivery: Friday, July 11, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Premium Customer Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Billing Address */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-olivebrown-light/20 hover:shadow-xl transition-all duration-300 hover:border-olivebrown-light/40">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-olivebrown-light to-olivebrown rounded-xl flex items-center justify-center mr-4">
                <UserIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olivebrown-darker">
                Billing address
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-olivebrown rounded-full mr-3"></div>
                <p className="font-bold text-olivebrown-darker text-lg">
                  {order?.user?.name || order?.contact?.emailAddress}
                </p>
              </div>
              <div className="pl-5 space-y-2 text-olivebrown-dark">
                <p className="flex items-center">
                  <span className="w-16 text-xs uppercase tracking-wide font-medium">
                    Email:
                  </span>
                  <span className="font-medium">
                    {order?.contact?.emailAddress}
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="w-16 text-xs uppercase tracking-wide font-medium">
                    Phone:
                  </span>
                  <span className="font-medium">
                    {order?.contact?.telNumber}
                  </span>
                </p>
                {order?.billingAddress && (
                  <div className="pt-2 border-t border-olivebrown-light/30">
                    <p className="font-medium text-olivebrown-darker">
                      {order.billingAddress?.addressLine}
                    </p>
                    <p className="text-olivebrown-dark">
                      {order.billingAddress?.postalCode}{" "}
                      {order.billingAddress?.city}
                    </p>
                    <p className="text-olivebrown-dark font-medium">
                      {order.billingAddress?.country?.name}{" "}
                      {order.billingAddress?.country?.flagEmoji}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-olivebrown-light/20 hover:shadow-xl transition-all duration-300 hover:border-olivebrown-light/40">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-olivebrown to-olivebrown-dark rounded-xl flex items-center justify-center mr-4">
                <TruckIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olivebrown-darker">
                Delivery address
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-olivebrown rounded-full mr-3"></div>
                <p className="font-bold text-olivebrown-darker text-lg">
                  {order?.user?.name || order?.contact?.emailAddress}
                </p>
              </div>
              <div className="pl-5 space-y-2 text-olivebrown-dark">
                {order?.deliveryAddress && (
                  <div className="pt-2">
                    <p className="font-medium text-olivebrown-darker">
                      {order.deliveryAddress?.addressLine}
                    </p>
                    <p className="text-olivebrown-dark">
                      {order.deliveryAddress?.postalCode}{" "}
                      {order.deliveryAddress?.city}
                    </p>
                    <p className="text-olivebrown-dark font-medium">
                      {order.deliveryAddress?.country?.name}{" "}
                      {order.deliveryAddress?.country?.flagEmoji}
                    </p>
                  </div>
                )}
                <div className="flex items-center pt-3 border-t border-olivebrown-light/30">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-olivebrown-light text-olivebrown-darker">
                    🚚 Standard Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Items Ordered & Order Total */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Items Ordered */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-olivebrown to-olivebrown-dark rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-olivebrown-darker">
                Items ordered
              </h3>
            </div>
            <div className="space-y-6">
              {order?.items?.map((item, index) => (
                <div
                  key={item._id}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-olivebrown-light/20 hover:shadow-xl transition-all duration-300 hover:border-olivebrown/30"
                >
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-beige-alt to-beige rounded-2xl flex-shrink-0 overflow-hidden shadow-lg">
                        {item?.product?.media?.[0]?.file?.url ? (
                          <img
                            src={item.product.media[0].file.url}
                            alt={item?.product?.texts?.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-olivebrown-light to-olivebrown-alt flex items-center justify-center">
                            <span className="text-white text-lg">🧘‍♀️</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-olivebrown-darker text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-olivebrown-darker mb-2">
                        {item?.product?.texts?.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-lg font-bold text-olivebrown-dark">
                            <FormattedPrice price={item?.unitPrice} />
                          </p>
                          <p className="text-sm text-olivebrown-dark flex items-center">
                            <span className="w-16 font-medium">Quantity:</span>
                            <span className="px-2 py-1 bg-olivebrown-light rounded-lg text-olivebrown-darker font-bold ml-2">
                              {item?.quantity}
                            </span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-wide text-olivebrown-dark font-medium">
                            Item Total
                          </p>
                          <p className="text-xl font-bold text-olivebrown-darker">
                            CHF{" "}
                            {(
                              (item?.unitPrice?.amount * item?.quantity) /
                              100
                            ).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Order Total */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-olivebrown-light to-olivebrown rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-olivebrown-darker">
                Order total
              </h3>
            </div>
            <div className="bg-gradient-to-br from-white to-beige-alt rounded-2xl p-8 shadow-xl border border-olivebrown-light/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-olivebrown-dark font-medium">
                    Discount
                  </span>
                  <span className="text-olivebrown-darker font-bold">
                    CHF 0.00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-olivebrown-dark font-medium">
                    Shipping
                  </span>
                  <span className="text-olivebrown-darker font-bold">
                    CHF 0.00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-olivebrown-dark font-medium">Tax</span>
                  <span className="text-olivebrown-darker font-bold">
                    CHF 0.00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-olivebrown-dark font-medium">Fees</span>
                  <span className="text-olivebrown-darker font-bold">
                    CHF 0.00
                  </span>
                </div>
                <div className="border-t-2 border-olivebrown-light/40 pt-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-olivebrown-dark font-medium">
                      Subtotal
                    </span>
                    <span className="text-lg font-bold text-olivebrown-darker">
                      <FormattedPrice price={order?.total} />
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-olivebrown-darker to-olivebrown-dark rounded-xl p-4 text-center">
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wide mb-1">
                    Total Amount
                  </p>
                  <p className="text-3xl font-bold text-white">
                    CHF {(order?.total?.amount / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Delivery */}
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <TruckIcon className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olivebrown-darker">
                Delivery
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-olivebrown-light/20 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <p className="text-sm text-olivebrown-dark font-medium mb-2">
                  {order?.delivery?.provider?.texts?.title ||
                    "Jul 11, 2025, 12:47 AM"}
                </p>
                <p className="text-xs text-olivebrown-dark">
                  Forward via Messaging 1.0.0
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-olivebrown-darker mb-1">
                    Method
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-olivebrown-light text-olivebrown-darker">
                    📦 SHIPPING
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-olivebrown-darker mb-1">
                    Status
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-olivebrown-light text-olivebrown-darker">
                    ✅ DELIVERED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <CreditCardIcon className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olivebrown-darker">
                Payment
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-olivebrown-light/20 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <p className="text-xs text-olivebrown-dark font-medium">
                  Invoice 1.0.0
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-olivebrown-darker mb-1">
                    Method
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-olivebrown-light text-olivebrown-darker">
                    📄 INVOICE
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-olivebrown-darker mb-1">
                    Status
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                      ⏳ OPEN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discounts */}
          <div className="group">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">%</span>
              </div>
              <h3 className="text-xl font-bold text-olivebrown-darker">
                Discounts
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-olivebrown-light/20 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl text-gray-500">⊘</span>
              </div>
              <p className="text-sm font-bold text-olivebrown-darker mb-2">
                No Discounts Available
              </p>
              <p className="text-xs text-olivebrown-dark">
                Check back for future promotions!
              </p>
            </div>
          </div>
        </div>

        {/* Elegant Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-olivebrown-dark">
            <span className="text-2xl">🧘‍♀️</span>
            <p className="text-lg font-medium">
              Thank you for choosing Anandi Yoga
            </p>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-sm text-olivebrown-dark mt-2 max-w-md mx-auto">
            Your journey towards inner peace and wellness continues. We are
            honored to be part of your yoga practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
