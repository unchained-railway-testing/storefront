import Link from "next/link";
import { useIntl } from "react-intl";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useUser from "../../auth/hooks/useUser";
import CartItem from "./CartItem";
import { useAppContext } from "../../common/components/AppContextWrapper";
import FormattedPrice from "../../common/components/FormattedPrice";

const SideCart = ({ isOpen }) => {
  const { user } = useUser();
  const intl = useIntl();
  const { toggleCart } = useAppContext();

  const cartItems = user?.cart?.items || [];
  const isEmpty = cartItems.length === 0;

  return (
    <Dialog
      open={isOpen}
      onClose={() => toggleCart(false)}
      className="relative z-[1030]"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-olivebrown-darker/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-sm transform transition duration-300 ease-in-out data-closed:translate-x-full data-enter:translate-x-0"
            >
              <div
                className="flex mt-3 flex-col bg-beige shadow-2xl rounded-2xl mr-4 border border-olivebrown-light/30 overflow-hidden"
                style={{ height: "calc(100vh - 1.5rem)" }}
              >
                {/* Header */}
                <div className="bg-olivebrown/5 px-6 py-4 border-b border-olivebrown-light/20">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-bold text-olivebrown-darker">
                      {intl.formatMessage({
                        id: "shopping_cart",
                        defaultMessage: "Shopping cart",
                      })}
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={() => toggleCart(false)}
                      className="relative p-2 rounded-full text-olivebrown-light hover:text-olivebrown-darker hover:bg-olivebrown-light/20 transition-all duration-200"
                    >
                      <span className="sr-only">
                        {intl.formatMessage({
                          id: "close_panel",
                          defaultMessage: "Close panel",
                        })}
                      </span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {isEmpty ? (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                      <div className="w-16 h-16 bg-olivebrown-light/20 rounded-full flex items-center justify-center mb-4">
                        <ShoppingBagIcon className="h-8 w-8 text-olivebrown-light" />
                      </div>
                      <h3 className="text-lg font-medium text-olivebrown-darker mb-2">
                        Your cart is empty
                      </h3>
                      <p className="text-sm text-olivebrown-dark mb-6 max-w-xs">
                        {intl.formatMessage({
                          id: "no_product_in_cart",
                          defaultMessage:
                            "There are no products in your Cart. Browse our",
                        })}{" "}
                        <Link
                          href="/shop"
                          onClick={() => toggleCart(false)}
                          className="font-medium text-olivebrown hover:text-olivebrown-dark underline"
                        >
                          {intl.formatMessage({
                            id: "shop",
                            defaultMessage: "Shop",
                          })}
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div className="py-2">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="divide-y divide-olivebrown-light/30"
                        >
                          {cartItems.map((item) => (
                            <li key={item._id} className="py-4">
                              <CartItem {...item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {!isEmpty && (
                  <div className="border-t border-olivebrown-light/30 bg-olivebrown/5 px-6 py-5">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-olivebrown-darker">
                          {intl.formatMessage({
                            id: "subtotal",
                            defaultMessage: "Subtotal",
                          })}
                        </p>
                        <p className="text-lg font-bold text-olivebrown-darker">
                          <FormattedPrice price={user?.cart?.itemsTotal} />
                        </p>
                      </div>
                      <p className="text-xs text-olivebrown-dark">
                        {intl.formatMessage({
                          id: "shipping_taxes_calculated",
                          defaultMessage:
                            "Shipping and taxes calculated at checkout.",
                        })}
                      </p>
                      <Link
                        href="/checkout"
                        onClick={() => toggleCart(false)}
                        className="w-full flex items-center justify-center rounded-lg bg-olivebrown px-6 py-3 text-base font-medium text-olivebrown-darker shadow-sm hover:bg-olivebrown-light transition-all duration-200"
                      >
                        {intl.formatMessage({
                          id: "checkout",
                          defaultMessage: "Checkout",
                        })}
                      </Link>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => toggleCart(false)}
                          className="text-sm font-medium text-olivebrown hover:text-olivebrown-dark transition-colors"
                        >
                          {intl.formatMessage({
                            id: "continue_shopping",
                            defaultMessage: "Continue Shopping",
                          })}
                          <span aria-hidden="true"> →</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SideCart;
