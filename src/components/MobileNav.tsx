"use client";
import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "./IconButton";
import { Category } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNav = ({ data }: { data: Category[] }) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="md:hidden flex">
      <Button className="flex items-center bg-white" onClick={onOpen}>
        <Menu size={20} className="text-black" />
      </Button>

      <Dialog open={open} as="div" className="relative  z-40" onClose={onClose}>
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

            <nav className="p-4 mx-6 flex flex-col items-center space-y-10 h-full">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-black border rounded-lg p-2",
                    route.active ? "text=black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileNav;
