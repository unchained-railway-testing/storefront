import Link from "next/link";
import { useIntl } from "react-intl";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
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
    <Dialog open={isOpen} onClose={() => toggleCart(false)} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-olivebrown-darker/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-beige shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-olivebrown-darker">
                      {intl.formatMessage({
                        id: "shopping_cart",
                        defaultMessage: "Shopping cart",
                      })}
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => toggleCart(false)}
                        className="relative -m-2 p-2 text-olivebrown-light hover:text-olivebrown-dark"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">
                          {intl.formatMessage({
                            id: "close_panel",
                            defaultMessage: "Close panel",
                          })}
                        </span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  {isEmpty ? (
                    <div className="mt-8 flex flex-col items-center justify-center text-center">
                      <ShoppingBagIcon className="h-12 w-12 text-olivebrown-light mb-4" />
                      <p className="text-olivebrown-dark">
                        {intl.formatMessage({
                          id: "no_product_in_cart",
                          defaultMessage: "There are no products in your Cart. Browse our",
                        })}{" "}
                        <Link
                          href="/shop"
                          onClick={() => toggleCart(false)}
                          className="font-medium text-olivebrown hover:text-olivebrown-dark underline"
                        >
                          {intl.formatMessage({ id: "shop", defaultMessage: "Shop" })}
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-olivebrown-light-2">
                          {cartItems.map((item) => (
                            <li key={item._id} className="py-6">
                              <CartItem {...item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {!isEmpty && (
                  <div className="border-t border-olivebrown-light-2 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-olivebrown-darker">
                      <p>
                        {intl.formatMessage({
                          id: "subtotal",
                          defaultMessage: "Subtotal",
                        })}
                      </p>
                      <p>
                        <FormattedPrice price={user?.cart?.itemsTotal} />
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-olivebrown-dark">
                      {intl.formatMessage({
                        id: "shipping_taxes_calculated",
                        defaultMessage: "Shipping and taxes calculated at checkout.",
                      })}
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/checkout"
                        onClick={() => toggleCart(false)}
                        className="flex items-center justify-center rounded-md border border-transparent bg-olivebrown px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-olivebrown-dark"
                      >
                        {intl.formatMessage({
                          id: "checkout",
                          defaultMessage: "Checkout",
                        })}
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-olivebrown-dark">
                      <p>
                        {intl.formatMessage({
                          id: "or",
                          defaultMessage: "or",
                        })}{" "}
                        <button
                          type="button"
                          onClick={() => toggleCart(false)}
                          className="font-medium text-olivebrown hover:text-olivebrown-dark"
                        >
                          {intl.formatMessage({
                            id: "continue_shopping",
                            defaultMessage: "Continue Shopping",
                          })}
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
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
