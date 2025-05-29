import { BillboardTypes } from "@/types";
import React from "react";

type BillboardProps = {
  data: BillboardTypes;
};
const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-[2/1] md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-ful flex flex-col justify-center text-center items-center ga-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
