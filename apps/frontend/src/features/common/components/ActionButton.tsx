import { IonButton, IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React from "react";
import { cn } from "~/lib/misc";

export const ActionButton = (
  props: React.ComponentProps<typeof IonButton> & {
    widthFull?: boolean;
    number?: number;
    topRadius?: string;
    bottomRadius?: string;
  },
) => {
  return (
    <IonButton
      color={props.color || "light"}
      className={cn(props.className, "!text-primary")}
      style={{
        "--background-activated": "#F2F2F2",
        "--color-activated": "var(--ion-color-primary)",
        "--border-color": "#F0F0F0",
        "--border-radius": `${props.topRadius || "12px"} ${
          props.topRadius || "12px"
        } ${props.bottomRadius || "12px"} ${props.bottomRadius || "12px"}`,
      }}
      {...props}
    >
      <div slot="end" className="text-sm opacity-50">
        {props.number && props.number > 1 && 2}
      </div>
      <IonIcon
        slot="end"
        className="opacity-50 "
        icon={chevronForwardOutline}
      ></IonIcon>
      <div className="w-full">{props.children || "Button"}</div>
    </IonButton>
  );
};
