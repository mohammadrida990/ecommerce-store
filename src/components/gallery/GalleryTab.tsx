import { cn } from "@/lib/utils";
import { Image as ImageTypes } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

function GalleryTab({ image }: { image: ImageTypes }) {
  return (
    <Tab className="relative flex h-[100px]  w-[100px] cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-[100px]  w-[100px]  inset-0 overflow-hidden rounded-md">
            <Image
              fill
              alt=""
              priority
              sizes="50vw"
              src={image.url}
              className="object-cover object-center"
            />
          </span>

          <span
            className={cn(
              "absolute inset-0 rounded-md ring-3 ring-offset-3",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
