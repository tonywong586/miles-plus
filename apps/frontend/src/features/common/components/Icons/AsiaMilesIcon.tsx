import { IonIcon } from "@ionic/react";

interface AsiaMilesIconProps
  extends Omit<React.ComponentProps<typeof IonIcon>, "icon"> {}

export function AsiaMilesIcon(props: AsiaMilesIconProps) {
  return <IonIcon icon="images/asia-miles.svg" {...props} />;
}
