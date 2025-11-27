"use client";
import { Button } from "@/components/ui/button";
import { Copy, CopyCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export const CopyLink = () => {
  const pathname = usePathname();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const fullUrl = `${window.location.origin}${pathname}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      type="button"
      aria-label="Copy link"
      onClick={handleCopy}
      disabled={copied}
    >
      {copied ? <CopyCheck /> : <Copy />}
    </Button>
  );
};
