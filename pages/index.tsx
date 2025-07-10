import { useIntl } from "react-intl";

import MetaTags from "../modules/common/components/MetaTags";
import useProducts from "../modules/products/hooks/useProducts";
import ProductList from "../modules/products/components/ProductList";
import Loading from "../modules/common/components/Loading";
import useAssortments from "../modules/assortment/hooks/useAssortments";
import CategoryListItem from "../modules/assortment/components/CategoryListItem";

const Home = () => {
  const { products, loading, error } = useProducts({});
  const { assortments, loading: categoriesLoading } = useAssortments();
  const { formatMessage } = useIntl();

  // Debug logging
  console.log(
    "Products count:",
    products?.length,
    "Products:",
    products,
    "Loading:",
    loading,
    "Error:",
    error,
  );
  if (error) {
    console.error("GraphQL Error:", error);
  }

  return (
    <>
      <MetaTags title={formatMessage({ id: "home", defaultMessage: "Home" })} />
      <div className="bg-beige">
        {/* All Categories Grid */}
        <div className="mx-auto px-4 py-16 sm:py-24">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-olivebrown-darker sm:text-5xl">
              {formatMessage({
                id: "welcome_anandi",
                defaultMessage: "Welcome to Anandi Yoga",
              })}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-olivebrown-dark">
              {formatMessage({
                id: "homepage_description",
                defaultMessage:
                  "Discover our complete collection of yoga products and explore our categories to find everything you need for your practice.",
              })}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-olivebrown-darker mb-4">
              {formatMessage({
                id: "shop_by_category",
                defaultMessage: "Shop by Category",
              })}
            </h2>
            <p className="text-olivebrown-dark max-w-2xl">
              Explore our thoughtfully curated collections designed to support
              your yoga journey and mindful living.
            </p>
          </div>

          {categoriesLoading ? (
            <Loading />
          ) : (
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              style={{ gridTemplateRows: "subgrid" }}
            >
              {assortments.map((category) => (
                <CategoryListItem key={category._id} category={category} />
              ))}
            </div>
          )}
        </div>

        {/* All Products Section */}
        <div className="">
          <div className="mx-auto py-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-olivebrown-darker mb-4">
                {formatMessage({
                  id: "all_products",
                  defaultMessage: "All Products",
                })}
              </h2>
              <p className="text-olivebrown-dark max-w-2xl">
                Discover our complete range of premium yoga essentials,
                carefully selected to enhance your practice and well-being.
              </p>
            </div>

            {loading ? (
              <Loading />
            ) : error ? (
              <div className="bg-beige">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-red-600">
                      GraphQL Error
                    </h3>
                    <p className="mt-2 text-sm text-red-500">{error.message}</p>
                    <details className="mt-4 text-left max-w-2xl mx-auto">
                      <summary className="cursor-pointer text-sm font-medium">
                        Show Details
                      </summary>
                      <pre className="mt-2 text-xs bg-red-50 p-4 rounded overflow-auto">
                        {JSON.stringify(error, null, 2)}
                      </pre>
                    </details>
                  </div>
                </div>
              </div>
            ) : products.length > 0 ? (
              <ProductList
                products={products}
                totalProducts={products.length}
                onLoadMore={() => {}}
              />
            ) : (
              <div>
                <h3 className="text-lg font-medium text-olivebrown-darker">
                  {formatMessage({
                    id: "no_products_found_homepage",
                    defaultMessage: "No products found for homepage display",
                  })}
                </h3>
                <p className="mt-2 text-sm text-olivebrown-dark">
                  {formatMessage({
                    id: "products_may_be_in_categories",
                    defaultMessage:
                      "Products may be available in specific categories above",
                  })}
                </p>
                <p className="mt-2 text-xs text-olivebrown-dark">
                  Debug: Found {products?.length || 0} products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
