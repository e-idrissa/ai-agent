"use client";

import { useUser } from "@clerk/nextjs";
import { useSchematicEvents } from "@schematichq/schematic-react";
import React, { useEffect } from "react";

export const SchematicWrapped = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { identify } = useSchematicEvents();
  const { user } = useUser();

  useEffect(() => {
    const userName =
      user?.username ??
      user?.firstName ??
      user?.lastName ??
      user?.emailAddresses[0].emailAddress ??
      user?.id;
    if (user?.id) {
        identify({
            company: {
                keys: {
                    id: user.id
                },
                name: userName
            },
            keys: {
                id: user.id,
            },
            name: userName
        }) 
    }
  }, [user, identify]);
  
  return <>{ children }</>;
};
