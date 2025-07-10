import Image from "next/legacy/image";
import Link from "next/link";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import defaultNextImageLoader from "../../common/utils/defaultNextImageLoader";

import getMediaUrl from "../../common/utils/getMediaUrl";

const CategoryListItem = ({ category }) => {
  const mediaUrl = getMediaUrl(category);
  return (
    <Link href={`shop/${category.texts.slug}`} className="group block">
      <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-olivebrown-light/20">
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
            <div className="p-6">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-olivebrown-darker group-hover:text-olivebrown-dark transition-colors duration-300">
                  {category.texts?.title}
                </h3>
                {category.texts?.subtitle && (
                  <p className="text-sm text-olivebrown-dark leading-relaxed line-clamp-2">
                    {category.texts?.subtitle}
                  </p>
                )}
                
                {/* Explore Button */}
                <div className="pt-2">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-olivebrown rounded-md text-olivebrown-darker text-sm font-medium hover:bg-olivebrown-light transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* No Image Fallback */}
            <div className="h-48 sm:h-56 bg-gradient-to-br from-beige-alt via-beige to-olivebrown-light/20 flex items-center justify-center relative">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-olivebrown-light to-olivebrown rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl text-white">🧘‍♀️</span>
                </div>
              </div>
              
              {/* Floating Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                <SparklesIcon className="h-4 w-4 text-olivebrown-dark" />
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-6">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-olivebrown-darker group-hover:text-olivebrown-dark transition-colors duration-300">
                  {category.texts?.title}
                </h3>
                {category.texts?.subtitle && (
                  <p className="text-sm text-olivebrown-dark leading-relaxed line-clamp-2">
                    {category.texts?.subtitle}
                  </p>
                )}
                
                {/* Explore Button */}
                <div className="pt-2">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-olivebrown rounded-md text-olivebrown-darker text-sm font-medium hover:bg-olivebrown-light transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
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