import { PhotoIcon, StarIcon } from "@heroicons/react/20/solid";
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
    <div className="group relative bg-beige rounded-lg hover:shadow-md hover:bg-beige-alt transition-all duration-300 border border-olivebrown-light/20 overflow-hidden grid grid-rows-subgrid row-span-4">
      {/* Product Image Container */}
      <Link
        href={`/product/${product?.texts?.slug}`}
        className="block relative"
      >
        <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-beige-alt to-beige">
          {firstMediaUrl ? (
            <img
              src={firstMediaUrl}
              alt={product?.texts?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-start p-6">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-olivebrown rounded-md flex items-center justify-center">
                  <PhotoIcon className="h-8 w-8 text-olivebrown-darker" />
                </div>
                <p className="text-olivebrown-dark text-sm font-medium">
                  No Image
                </p>
              </div>
            </div>
          )}

          {/* Premium Badge */}
          <div className="absolute top-3 left-3">
            <div className="flex items-center space-x-1 bg-olivebrown px-2 py-1 rounded-md">
              <StarIcon className="h-3 w-3 text-olivebrown-darker" />
              <span className="text-olivebrown-darker text-xs font-bold">
                Premium
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-4 space-y-3">
        {/* Product Title & Description */}
        <div className="space-y-1">
          <h3 className="text-base font-bold text-olivebrown-darker line-clamp-2">
            <Link href={`/product/${product?.texts?.slug}`}>
              {product?.texts?.title}
            </Link>
          </h3>
          {product?.texts?.description && (
            <p className="text-sm text-olivebrown-dark leading-relaxed line-clamp-2">
              {product?.texts?.description}
            </p>
          )}
        </div>

        {/* Rating Stars (Mock) */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-3 w-3 ${
                i < 4 ? "text-olivebrown" : "text-olivebrown-light/30"
              }`}
            />
          ))}
          <span className="text-xs text-olivebrown-dark ml-1">
            (24 reviews)
          </span>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <p className="text-lg font-bold text-olivebrown-darker">
            <FormattedPrice price={product?.simulatedPrice} />
          </p>
          <p className="text-xs text-olivebrown-dark">
            Free shipping included
          </p>
        </div>

        {/* Benefits Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-olivebrown-light/20 text-olivebrown-darker">
            🌱 Eco-friendly
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-olivebrown-light/20 text-olivebrown-darker">
            ✨ Mindful
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
