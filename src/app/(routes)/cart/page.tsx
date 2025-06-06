"use client";

import Container from "@/components/Container";
import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Summery from "./components/Summery";
import SpinnerLoading from "@/components/Spinner";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  // You can adjust this condition based on your actual loading logic
  const isLoading = !isMounted || !cart;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500"> No items added to cart</p>
              )}

              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summery />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
