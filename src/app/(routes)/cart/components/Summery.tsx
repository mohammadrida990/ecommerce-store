"use client";

import Button from "@/components/Button";
import Currency from "@/components/Currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Summery = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URl}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = res.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast("Payment completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast("Something went wrong");
    }
  }, [removeAll, searchParams]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-500">Order summery</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-500">Order total</div>

          <Currency value={totalPrice} />
        </div>
      </div>

      <Button
        onClick={onCheckout}
        className="w-full mt-6"
        disabled={items.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summery;
