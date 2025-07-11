import Image from "next/legacy/image";
import Link from "next/link";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import defaultNextImageLoader from "../../common/utils/defaultNextImageLoader";

import getMediaUrl from "../../common/utils/getMediaUrl";

const CategoryListItem = ({ category }) => {
  const mediaUrl = getMediaUrl(category);
  return (
    <Link href={`shop/${category.texts.slug}`} className="group block">
      <div className="relative overflow-hidden bg-beige rounded-lg hover:shadow-md hover:bg-beige-alt transition-all duration-300 border border-olivebrown-light/20 grid grid-rows-subgrid row-span-3">
        {mediaUrl ? (
          <>
            {/* Image Container with Gradient Overlay */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <Image
                src={mediaUrl}
                alt={category?.texts.title}
                layout="fill"
                placeholder="blur"
                blurDataURL="/placeholder.png"
                objectFit="cover"
                objectPosition="center"
                className="transition-transform duration-700 group-hover:scale-110"
                loader={defaultNextImageLoader}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-olivebrown-darker/80 via-olivebrown-darker/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                <SparklesIcon className="h-4 w-4 text-olivebrown-dark" />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-olivebrown-darker">
                  {category.texts?.title}
                </h3>
                {category.texts?.subtitle && (
                  <p className="text-sm text-olivebrown-dark leading-relaxed line-clamp-2">
                    {category.texts?.subtitle}
                  </p>
                )}

                {/* Explore Button */}
                <div className="pt-1">
                  <div className="inline-flex items-center space-x-2 px-3 py-2 bg-olivebrown rounded-md text-olivebrown-darker text-sm font-medium hover:bg-olivebrown-light transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* No Image Fallback */}
            <div className="h-48 sm:h-56 bg-gradient-to-br from-beige-alt via-beige to-olivebrown-light/20 flex items-center justify-start p-6 relative">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-olivebrown-light to-olivebrown rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-white">🧘‍♀️</span>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                <SparklesIcon className="h-4 w-4 text-olivebrown-dark" />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-olivebrown-darker">
                  {category.texts?.title}
                </h3>
                {category.texts?.subtitle && (
                  <p className="text-sm text-olivebrown-dark leading-relaxed line-clamp-2">
                    {category.texts?.subtitle}
                  </p>
                )}

                {/* Explore Button */}
                <div className="pt-1">
                  <div className="inline-flex items-center space-x-2 px-3 py-2 bg-olivebrown rounded-md text-olivebrown-darker text-sm font-medium hover:bg-olivebrown-light transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default CategoryListItem;
