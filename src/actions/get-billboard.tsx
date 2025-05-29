import { BillboardTypes } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URl}/billboards`;

const getBillboard = async (id: string): Promise<BillboardTypes[]> => {
  const res = await fetch(`${url}/${id}`);

  return res.json();
};

export default getBillboard;
