import { BookmarkIcon, PhotoIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";

import useUser from "../../auth/hooks/useUser";
import useConditionalBookmarkProduct from "../../cart/hooks/useConditionalBookmarkProduct";
import useRemoveBookmark from "../../common/hooks/useRemoveBookmark";
import defaultNextImageLoader from "../../common/utils/defaultNextImageLoader";
import FormattedPrice from "../../common/components/FormattedPrice";

const ProductListItem = ({ product, disableBookmark = false }) => {
  const { conditionalBookmarkProduct } = useConditionalBookmarkProduct();
  const { removeBookmark } = useRemoveBookmark();

  const { user } = useUser();

  const [filteredBookmark] =
    user?.bookmarks?.filter(
      (bookmark) => bookmark?.product?._id === product?._id,
    ) || [];

  const firstMediaUrl = product?.media?.[0]?.file?.url;

  return (
    <>
      <Link
        href={`/product/${product?.texts?.slug}`}
        className="block"
      >
        {firstMediaUrl ? (
          <img
            src={firstMediaUrl}
            alt={product?.texts?.title}
            className="aspect-3/4 w-full bg-olivebrown-alt object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
          />
        ) : (
          <div className="aspect-3/4 w-full bg-olivebrown-alt flex items-center justify-center group-hover:opacity-75 sm:aspect-auto sm:h-96">
            <PhotoIcon className="h-24 w-24 text-olivebrown-light" />
          </div>
        )}
      </Link>
      
      {!disableBookmark && (
        <button
          type="button"
          className="absolute top-2 right-2 rounded-full bg-beige p-2 shadow-md hover:bg-olivebrown-alt"
          onClick={(e) => {
            e.preventDefault();
            filteredBookmark
              ? removeBookmark({
                  bookmarkId: filteredBookmark?._id,
                })
              : conditionalBookmarkProduct({
                  productId: product?._id,
                })
          }}
        >
          <BookmarkIcon
            className={classNames("h-5 w-5", {
              "text-olivebrown-dark": filteredBookmark,
              "text-olivebrown-light-2": !filteredBookmark,
            })}
          />
        </button>
      )}

      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-olivebrown-darker">
          <Link href={`/product/${product?.texts?.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product?.texts?.title}
          </Link>
        </h3>
        {product?.texts?.description && (
          <p className="text-sm text-olivebrown-dark line-clamp-2">
            {product?.texts?.description}
          </p>
        )}
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-base font-medium text-olivebrown-darker">
            <FormattedPrice price={product?.simulatedPrice} />
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
