import React from "react";
import { Button } from "../../button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const ViewMoreButton = ({ url }: { url: string }) => (
  <Button variant={"secondary"} size={"sm"} asChild>
    <Link href={url} target="_blank" rel="noopener noreferrer">
      View More <ExternalLink />
    </Link>
  </Button>
);
