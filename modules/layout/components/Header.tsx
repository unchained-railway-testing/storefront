import Link from "next/link";
import getConfig from "next/config";
import { useIntl } from "react-intl";

import LoginCart from "../../auth/components/LoginCart";
import SideCart from "../../cart/components/SideCart";

import { useAppContext } from "../../common/components/AppContextWrapper";

const {
  publicRuntimeConfig: { theme },
} = getConfig();

const Header = () => {
  const { isCartOpen } = useAppContext();
  return (
    <header className="sticky top-0 z-[1020] overflow-visible bg-quaternary text-black opacity-100 dark:bg-slate-600 dark:text-white print:hidden">
      <div className="relative">
        <SideCart isOpen={isCartOpen} />
        <div className="container relative mx-auto hidden w-full sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:py-4 sm:px-6">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-medium text-gray-900">
                Yoga Kurse bei Anandi
              </span>
            </Link>
          </div>
          <div className="flex">
            <LoginCart />
          </div>
        </div>
        <div className="container flex flex-wrap items-center justify-between px-6 py-3 sm:hidden">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-medium text-gray-900">
                anandi yoga shop
              </span>
            </Link>
          </div>

          <div className="flex">
            <LoginCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
