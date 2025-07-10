/* eslint-disable react/no-danger */
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import Markdown from "react-markdown";
import useProductDetail from "../../modules/products/hooks/useProductDetail";
import AddToCartButton from "../../modules/cart/components/AddToCartButton";
import MetaTags from "../../modules/common/components/MetaTags";
import getAssortmentPath from "../../modules/assortment/utils/getAssortmentPath";
import AssortmentBreadcrumbs from "../../modules/assortment/components/AssortmentBreadcrumbs";
import getMediaUrl from "../../modules/common/utils/getMediaUrl";
import getMediaUrls from "../../modules/common/utils/getMediaUrls";
import NotFound from "../404";
import Loading from "../../modules/common/components/Loading";
import FormattedPrice from "../../modules/common/components/FormattedPrice";
import useConditionalBookmarkProduct from "../../modules/cart/hooks/useConditionalBookmarkProduct";
import useRemoveBookmark from "../../modules/common/hooks/useRemoveBookmark";
import useUser from "../../modules/auth/hooks/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Detail = () => {
  const router = useRouter();
  const intl = useIntl();
  const { product, paths, loading } = useProductDetail({
    slug: router.query.slug,
  });
  const { conditionalBookmarkProduct } = useConditionalBookmarkProduct();
  const { removeBookmark } = useRemoveBookmark();
  const { user } = useUser();

  const productPath = getAssortmentPath(paths);
  const mediaUrls = product ? getMediaUrls(product) : [];

  const [filteredBookmark] =
    user?.bookmarks?.filter(
      (bookmark) => bookmark?.product?._id === product?._id,
    ) || [];

  if (!product && !loading)
    return (
      <NotFound
        page={intl.formatMessage({
          id: "product",
          defaultMessage: "Product",
        })}
      />
    );

  const productDetails = product?.texts?.description
    ? [
        {
          name: intl.formatMessage({
            id: "description",
            defaultMessage: "Description",
          }),
          content: product?.texts?.description,
        },
      ]
    : [];

  if (product?.texts?.subtitle) {
    productDetails.push({
      name: intl.formatMessage({ id: "details", defaultMessage: "Details" }),
      content: product?.texts?.subtitle,
    });
  }

  return (
    <>
      <MetaTags
        title={product?.texts?.title}
        imageUrl={getMediaUrl(product)}
        description={product?.texts?.description}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-beige">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <AssortmentBreadcrumbs
              paths={productPath}
              currentAssortment={product?.texts}
            />

            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 mt-8">
              {/* Image gallery */}
              <TabGroup className="flex flex-col-reverse">
                {/* Image selector */}
                {mediaUrls.length > 1 && (
                  <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                    <TabList className="grid grid-cols-4 gap-6">
                      {mediaUrls.map((image, idx) => (
                        <Tab
                          key={idx}
                          className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-beige-alt text-sm font-medium text-olivebrown-darker uppercase hover:bg-olivebrown-alt focus:ring-3 focus:ring-olivebrown/50 focus:ring-offset-4 focus:outline-hidden"
                        >
                          <span className="sr-only">
                            {product?.texts?.title} {idx + 1}
                          </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img
                              alt=""
                              src={image}
                              className="size-full object-cover"
                            />
                          </span>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-olivebrown"
                          />
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                )}

                <TabPanels>
                  {mediaUrls.length > 0 ? (
                    mediaUrls.map((image, idx) => (
                      <TabPanel key={idx}>
                        <img
                          alt={product?.texts?.title}
                          src={image}
                          className="aspect-square w-full object-cover sm:rounded-lg"
                        />
                      </TabPanel>
                    ))
                  ) : (
                    <TabPanel>
                      <img
                        alt={product?.texts?.title}
                        src="/static/img/sun-glass-placeholder.jpeg"
                        className="aspect-square w-full object-cover sm:rounded-lg"
                      />
                    </TabPanel>
                  )}
                </TabPanels>
              </TabGroup>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-medium tracking-tight text-olivebrown-darker">
                  {product?.texts?.title}
                </h1>

                <div className="mt-3">
                  <h2 className="sr-only">
                    {intl.formatMessage({
                      id: "product_information",
                      defaultMessage: "Product information",
                    })}
                  </h2>
                  <p className="text-3xl tracking-tight text-olivebrown-dark">
                    <FormattedPrice price={product?.simulatedPrice} />
                  </p>
                </div>

                {product?.texts?.subtitle && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-olivebrown-dark">
                      {product?.texts?.subtitle}
                    </h3>
                  </div>
                )}

                <div className="mt-6">
                  <div className="mt-10 flex gap-4">
                    <div className="flex-1">
                      <AddToCartButton productId={product?._id} {...product} />
                    </div>

                  </div>
                </div>

                {productDetails.length > 0 && (
                  <section aria-labelledby="details-heading" className="mt-12">
                    <h2 id="details-heading" className="sr-only">
                      {intl.formatMessage({
                        id: "additional_details",
                        defaultMessage: "Additional details",
                      })}
                    </h2>

                    <div className="divide-y divide-olivebrown-light-2 border-t border-olivebrown-light-2">
                      {productDetails.map((detail) => (
                        <Disclosure key={detail.name} as="div">
                          <h3>
                            <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span className="text-sm font-medium text-olivebrown-darker group-data-open:text-olivebrown">
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                <PlusIcon
                                  aria-hidden="true"
                                  className="block size-6 text-olivebrown-light group-hover:text-olivebrown group-data-open:hidden"
                                />
                                <MinusIcon
                                  aria-hidden="true"
                                  className="hidden size-6 text-olivebrown group-hover:text-olivebrown-dark group-data-open:block"
                                />
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pb-6">
                            <div className="prose prose-sm text-olivebrown-dark">
                              <Markdown>{detail.content}</Markdown>
                            </div>
                          </DisclosurePanel>
                        </Disclosure>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
