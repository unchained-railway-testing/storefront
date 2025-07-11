import { useRouter } from "next/router";
import Markdown from "react-markdown";

import CategoriesList from "../../modules/assortment/components/CategoriesList";
import useAssortmentProducts from "../../modules/assortment/hooks/useAssortmentProducts";
import getAssortmentPath from "../../modules/assortment/utils/getAssortmentPath";
import AssortmentBreadcrumbs from "../../modules/assortment/components/AssortmentBreadcrumbs";
import ProductList from "../../modules/products/components/ProductList";
import MetaTags from "../../modules/common/components/MetaTags";
import useCategoriesTree from "../../modules/assortment/hooks/useCategoriesTree";
import getMediaUrl from "../../modules/common/utils/getMediaUrl";
import Loading from "../../modules/common/components/Loading";

const CategoryDetail = () => {
  const router = useRouter();
  const { slug: slugs } = router.query;
  const slug = slugs?.length ? slugs[(slugs?.length || 0) - 1] : "";

  const { assortmentTree, loading: categoryTreeLoading } = useCategoriesTree({
    slugs: [slug],
    includeLeaves: true,
  });

  const {
    assortment: { texts, media } = {},
    products,
    paths,
    loadMore,
    filteredProducts,
    loading: productsLoading,
  } = useAssortmentProducts({
    slugs: slug,
    includeLeaves: true,
  });

  const assortmentPaths = getAssortmentPath(paths);

  let currentPath;
  if (typeof slugs === "string") {
    currentPath = slugs;
  } else {
    currentPath = slugs?.join("/");
  }

  return (
    <>
      <MetaTags
        title={texts?.title}
        description={texts?.description}
        imageUrl={getMediaUrl({ media })}
      />
      <div className="flex flex-wrap px-4 sm:px-0">
        <div className="relative w-full flex-3 pl-1">
          <AssortmentBreadcrumbs
            paths={assortmentPaths}
            currentAssortment={texts}
          />
        </div>
        <div className="relative w-full p-4 pl-1 md:max-w-1/3 md:flex-4 lg:max-w-1/4 lg:flex-5">
          {categoryTreeLoading ? (
            <Loading />
          ) : (
            <CategoriesList
              assortment={assortmentTree.children}
              currentPath={currentPath}
            />
          )}
        </div>
        <div className="relative w-full px-4 md:max-w-2/3 md:flex-6 lg:max-w-3/4 lg:flex-7">
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
              {texts?.title}
            </h1>
            <h2>{texts?.subtitle}</h2>
            <Markdown>{texts?.description}</Markdown>
          </div>
          {productsLoading ? (
            <Loading />
          ) : (
            <ProductList
              onLoadMore={loadMore}
              totalProducts={filteredProducts}
              products={products}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
