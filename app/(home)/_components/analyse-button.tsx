"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const AnalyseButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
    disabled={pending}
      type="submit"
      size={"sm"}
      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white"
    >
      {pending ? "Analysing..." : "Analyse"}
    </Button>
  );
};
