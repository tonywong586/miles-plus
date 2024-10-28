import { IonIcon } from "@ionic/react";

interface AddIconProps
  extends Omit<React.ComponentProps<typeof IonIcon>, "icon"> {}

export function AddIcon(props: AddIconProps) {
  return <IonIcon src="/images/add-icon.svg" {...props} />;
}
