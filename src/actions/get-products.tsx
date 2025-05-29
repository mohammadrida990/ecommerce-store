import { Product } from "@/types";

import qs from "query-string";

type Query = {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  isFeatured?: boolean;
};
const URL = `${process.env.NEXT_PUBLIC_API_URl}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      sizeId: query.sizeId,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
