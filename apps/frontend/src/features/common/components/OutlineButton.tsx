import { IonButton } from "@ionic/react";
import { cn } from "~/lib/misc";

export const OutlineButton = (
  props: React.ComponentProps<typeof IonButton> & {
    widthFull?: boolean;
  },
) => {
  return (
    <IonButton
      fill="outline"
      className={cn(props.className, "!text-primary")}
      style={{
        "--background-activated": "#F2F2F2",
        "--color-activated": "var(--ion-color-primary)",
        "--border-color": "#F0F0F0",
        ...props.style,
      }}
      {...props}
    />
  );
};
