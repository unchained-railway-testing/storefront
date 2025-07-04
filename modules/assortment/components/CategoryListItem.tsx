import Image from "next/legacy/image";
import Link from "next/link";
import defaultNextImageLoader from "../../common/utils/defaultNextImageLoader";

import getMediaUrl from "../../common/utils/getMediaUrl";

const CategoryListItem = ({ category }) => {
  const mediaUrl = getMediaUrl(category);
  return (
    <Link href={`shop/${category.texts.slug}`} className="group block">
      {mediaUrl ? (
        <>
          <div
            aria-hidden="true"
            className="aspect-w-3 aspect-h-2 relative overflow-hidden rounded-lg  group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
          >
            <Image
              src={mediaUrl}
              alt={category?.texts.title}
              layout="fill"
              placeholder="blur"
              blurDataURL="/placeholder.png"
              objectFit="cover"
              objectPosition="center"
              className="h-full w-full"
              loader={defaultNextImageLoader}
            />
          </div>
          <h3 className="mt-4 text-base font-medium text-slate-900 dark:text-slate-100">
            {category.texts?.title}
          </h3>
          <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
            {category.texts?.subtitle}
          </p>
        </>
      ) : (
        <div className="group relative m-2 rounded-tl-lg rounded-tr-lg  border-2  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-500 sm:rounded-tr-none ">
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <span className="absolute inset-0 h-24" aria-hidden="true" />
              <h3 className="mt-4 text-base font-medium text-slate-900 dark:text-slate-100">
                {category.texts?.title}
              </h3>
              <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
                {category.texts?.subtitle}
              </p>
            </h3>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      )}
    </Link>
  );
};

export default CategoryListItem;
