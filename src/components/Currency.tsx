"use client";

import React, { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

const Currency = ({ value }: { value?: string | number }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
