import { useIntl } from "react-intl";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

import ProductListItem from "./ProductListItem";
import Button from "../../common/components/Button";

const ProductList = ({ products, totalProducts, onLoadMore }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="bg-beige">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">
          {formatMessage({ id: "products", defaultMessage: "Products" })}
        </h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product?._id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-olivebrown-light bg-beige-alt"
            >
              <ProductListItem product={product} />
            </div>
          ))}
        </div>
        {totalProducts > products?.length && (
          <div className="items-center py-6 text-center">
            <Button
              icon={<ChevronDoubleDownIcon className="mr-2 h-6 w-6" />}
              text={formatMessage({
                id: "load_more",
                defaultMessage: "Load More",
              })}
              aria-label={formatMessage({
                id: "load_more",
                defaultMessage: "Load More",
              })}
              type="button"
              className="dark:text-white"
              onClick={onLoadMore}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
