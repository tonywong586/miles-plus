import { IonButton, IonIcon, IonItem, IonLabel, IonNote } from "@ionic/react";
import React from "react";
import { cn } from "~/lib/misc";

export const ListItem = (
  props: React.ComponentProps<typeof IonButton> & {
    number?: number;
    className?: string;
    children?: React.ReactNode;
  },
) => {
  return (
    <IonItem
      color="light"
      button
      style={{ "--border-radius": "0px" }}
      className={cn(props.className, "!text-primary")}
    >
      <IonLabel className="py-1">{props.children}</IonLabel>
      <IonNote slot="end">{props.number}</IonNote>
    </IonItem>
  );
};
