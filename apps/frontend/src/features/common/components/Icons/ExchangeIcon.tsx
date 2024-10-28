import { IonIcon } from "@ionic/react";

interface ExchangeIconProps
  extends Omit<React.ComponentProps<typeof IonIcon>, "icon"> {}

export function ExchangeIcon(props: ExchangeIconProps) {
  return <IonIcon icon="images/exchange-icon.svg" {...props} />;
}
