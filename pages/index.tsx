import { useIntl } from "react-intl";
import Link from "next/link";

import MetaTags from "../modules/common/components/MetaTags";
import useProducts from "../modules/products/hooks/useProducts";
import ProductListItem from "../modules/products/components/ProductListItem";
import Loading from "../modules/common/components/Loading";
import useAssortments from "../modules/assortment/hooks/useAssortments";

const Home = () => {
  const { products, loading } = useProducts({});
  const { assortments } = useAssortments();
  const { formatMessage } = useIntl();

  // Get first 3 assortments for category showcase
  const categories = assortments?.slice(0, 3) || [];

  return (
    <>
      <MetaTags title={formatMessage({ id: "home", defaultMessage: "Home" })} />
      <div className="bg-beige">
        {/* Category Showcase */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-olivebrown-darker">
              {formatMessage({ id: "shop_by_category", defaultMessage: "Shop by Category" })}
            </h2>
            <Link href="/shop" className="hidden text-sm font-semibold text-olivebrown hover:text-olivebrown-dark sm:block">
              {formatMessage({ id: "browse_all_categories", defaultMessage: "Browse all categories" })}
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            {/* Featured Category - Large */}
            {categories[0] && (
              <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                <img
                  alt={categories[0]?.texts?.title}
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-olivebrown-darker opacity-50" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href={`/shop/${categories[0]?.texts?.slug}`}>
                        <span className="absolute inset-0" />
                        {categories[0]?.texts?.title || formatMessage({ id: "new_arrivals", defaultMessage: "New Arrivals" })}
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      {formatMessage({ id: "shop_now", defaultMessage: "Shop now" })}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Second Category */}
            {categories[1] && (
              <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                <img
                  alt={categories[1]?.texts?.title}
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-olivebrown-darker opacity-50" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href={`/shop/${categories[1]?.texts?.slug}`}>
                        <span className="absolute inset-0" />
                        {categories[1]?.texts?.title || formatMessage({ id: "accessories", defaultMessage: "Accessories" })}
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      {formatMessage({ id: "shop_now", defaultMessage: "Shop now" })}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Third Category */}
            {categories[2] && (
              <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                <img
                  alt={categories[2]?.texts?.title}
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-olivebrown-darker opacity-50" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href={`/shop/${categories[2]?.texts?.slug}`}>
                        <span className="absolute inset-0" />
                        {categories[2]?.texts?.title || formatMessage({ id: "workspace", defaultMessage: "Workspace" })}
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      {formatMessage({ id: "shop_now", defaultMessage: "Shop now" })}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/shop" className="block text-sm font-semibold text-olivebrown hover:text-olivebrown-dark">
              {formatMessage({ id: "browse_all_categories", defaultMessage: "Browse all categories" })}
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Featured Products */}
        {loading ? (
          <Loading />
        ) : (
          products.length !== 0 && (
            <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
              <div className="sm:flex sm:items-baseline sm:justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-olivebrown-darker">
                  {formatMessage({
                    id: "our_products",
                    defaultMessage: "Our Products",
                  })}
                </h2>
                <Link href="/shop" className="hidden text-sm font-semibold text-olivebrown hover:text-olivebrown-dark sm:block">
                  {formatMessage({ id: "view_all", defaultMessage: "View all" })}
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                {products.map((product) => (
                  <div
                    key={product?._id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-olivebrown-light bg-beige-alt"
                  >
                    <ProductListItem product={product} disableBookmark />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Home;
