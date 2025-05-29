export type BillboardTypes = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: BillboardTypes;
};

export type Product = {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
};

export type Image = {
  id: string;
  url: string;
};
export type Size = {
  id: string;
  name: string;
  value: string;
};
export type Color = {
  id: string;
  name: string;
  value: string;
};
