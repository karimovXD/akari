"use client";
import { useState } from "react";
import { TrailerButton } from "./TrailerButton";

interface PropsType {
  trailerId: string;
}

export const Trailer: React.FC<PropsType> = ({ trailerId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TrailerButton onClick={() => setOpen(true)} />
    </>
  );
};

export default Trailer;
