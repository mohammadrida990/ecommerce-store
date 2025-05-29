import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import React from "react";
import Filter from "./components/Filter";
import NoResults from "@/components/no-results";
import ProductCard from "@/components/ProductCard";
import MobileFilters from "./components/MobileFilters";

type CategoryProps = {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{
    colorId: string;
    sizeId: string;
  }>;
};

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }: CategoryProps) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />

            <div className="hidden lg:block">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />

              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
