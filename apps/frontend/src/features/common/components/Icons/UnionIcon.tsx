
import { IonIcon } from "@ionic/react";

interface UnionIconProps
    extends Omit<React.ComponentProps<typeof IonIcon>, "icon"> { }

export function UnionIcon(props: UnionIconProps) {
    return <IonIcon icon="images/union.svg" {...props} />;
}
