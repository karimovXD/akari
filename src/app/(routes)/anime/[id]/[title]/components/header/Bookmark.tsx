import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

const BookmarkButton = () => (
  <Button variant={"outline"} type="button" aria-label="Bookmark" disabled>
    <Bookmark />
    Bookmark
  </Button>
);

export default BookmarkButton;
