"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Button
      onClick={handleBack}
      variant={"ghost"}
      type="button"
      aria-label="Back"
    >
      <ArrowLeft />
      Back
    </Button>
  );
};
