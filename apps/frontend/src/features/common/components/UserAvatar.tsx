import { IonAvatar, IonImg } from "@ionic/react";

export function UserAvatar(props: React.ComponentProps<typeof IonAvatar>) {
  return (
    <IonAvatar {...props}>
      <IonImg
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
      />
    </IonAvatar>
  );
}
