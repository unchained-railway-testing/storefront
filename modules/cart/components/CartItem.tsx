import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  MinusIcon,
  PhotoIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import getMediaUrl from "../../common/utils/getMediaUrl";
import useRemoveCartItem from "../hooks/useRemoveCartItem";
import useUpdateCartItemMutation from "../hooks/useUpdateCartItem";
import defaultNextImageLoader from "../../common/utils/defaultNextImageLoader";
import FormattedPrice from "../../common/components/FormattedPrice";

const CartItem = ({
  _id,
  quantity,
  product,
  unitPrice,
  enableUpdate = true,
}) => {
  const { updateCartItem } = useUpdateCartItemMutation();
  const { removeCartItem } = useRemoveCartItem();
  const [previousQuantity, setPreviousQuantity] = useState(quantity);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const { formatMessage } = useIntl();

  const handleChange = (e) => {
    const amount = e.target.value;
    setCurrentQuantity(amount);
  };
  useEffect(() => {
    setCurrentQuantity(quantity);
  }, [quantity]);

  const handleBlur = (e) => {
    const amount = parseFloat(currentQuantity);
    let newValue = 0;
    if (Number.isNaN(amount) || amount < 0 || e.target.value === "0") {
      newValue = 1;
      setCurrentQuantity(1);
    } else {
      newValue = 0;
      const difference = Math.abs(amount - previousQuantity);
      if (previousQuantity < amount) {
        newValue = previousQuantity + difference;
      } else {
        newValue = previousQuantity - difference;
      }
    }
    if (previousQuantity !== newValue) {
      updateCartItem({
        itemId: _id,
        quantity: newValue,
      });

      setPreviousQuantity(amount);
    }
  };

  return (
    <div className="flex" key={_id}>
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-olivebrown-light-2">
        {getMediaUrl(product) ? (
          <img
            src={getMediaUrl(product)}
            alt={product?.texts?.title}
            className="size-full object-cover"
          />
        ) : (
          <div className="size-full flex items-center justify-center bg-olivebrown-alt">
            <PhotoIcon className="h-12 w-12 text-olivebrown-light" />
          </div>
        )}
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-olivebrown-darker">
            <h3>
              <Link
                href={`/product/${product?.texts?.slug}`}
                className="hover:text-olivebrown"
              >
                {product?.texts?.title}
              </Link>
            </h3>
            <p className="ml-4">
              <FormattedPrice price={unitPrice} />
            </p>
          </div>
          {product?.texts?.subtitle && (
            <p className="mt-1 text-sm text-olivebrown-dark">
              {product?.texts?.subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-olivebrown-dark">
            {formatMessage({ id: "qty", defaultMessage: "Qty" })} {quantity}
          </p>

          <div className="flex">
            {enableUpdate && (
              <button
                type="button"
                className="font-medium text-olivebrown hover:text-olivebrown-dark"
                onClick={() => removeCartItem({ itemId: _id })}
              >
                {formatMessage({ id: "remove", defaultMessage: "Remove" })}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
