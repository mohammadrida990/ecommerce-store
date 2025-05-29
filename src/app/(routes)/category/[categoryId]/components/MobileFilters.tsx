"use client";

import React, { useState } from "react";
import { Color, Size } from "@/types";
import Button from "@/components/Button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@/components/IconButton";
import Filter from "./Filter";

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};
const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative  z-40 lg:hidden "
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto
            bg-white py-4 pb-6 shadow-xl
            "
          >
            <div className="flex items-center px-4 justify-end">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />

              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
