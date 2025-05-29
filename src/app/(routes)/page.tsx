import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const data = await getBillboard("cmb713bfz00015hegfmn28q0p");
  const { billboard } = data as never;

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
