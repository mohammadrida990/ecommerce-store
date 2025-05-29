"use client";

import { Image as ImageType } from "@/types";
import React from "react";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import Image from "next/image";

const Gallery = ({ images }: { images: ImageType[] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-4">
          {images?.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>

      <TabPanels className="h-full w-full">
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div className=" relative h-[300px] w-full sm:rounded-lg overflow-hidden ">
              <Image
                src={image.url}
                fill
                alt=""
                sizes="50vw"
                priority
                className="object-cover object-center w-full"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
