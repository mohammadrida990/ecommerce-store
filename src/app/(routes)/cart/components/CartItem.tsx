"use client";

import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import { X } from "lucide-react";
import Currency from "@/components/Currency";
import useCart from "@/hooks/use-cart";

const CartItem = ({ data }: { data: Product }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          alt=""
          priority
          fill
          sizes="50vw"
          src={data.images[0].url}
          className="object-cover object-center"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton icon={<X size={15} />} onClick={onRemove} />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="ml-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>

            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>

          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
