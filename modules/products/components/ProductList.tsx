import { useIntl } from "react-intl";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

import ProductListItem from "./ProductListItem";
import Button from "../../common/components/Button";

const ProductList = ({ products, totalProducts, onLoadMore }) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <div className="mx-auto pb-16">
        <h2 className="sr-only">
          {formatMessage({ id: "products", defaultMessage: "Products" })}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductListItem key={product?._id} product={product} />
          ))}
        </div>

        {totalProducts > products?.length && (
          <div className="items-center py-12 text-center">
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
              className="bg-olivebrown hover:bg-olivebrown-light text-olivebrown-darker px-8 py-3 rounded-md transition-all duration-300"
              onClick={onLoadMore}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
