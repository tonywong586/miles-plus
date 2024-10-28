import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { useApp } from "../lib";
import { UserAvatar } from "./UserAvatar";
import { OutlineButton } from "./OutlineButton";
import { pencilSharp } from "ionicons/icons";
import { ListItem } from "./ListItem";

export interface UserProfileModalProps {
  opened: boolean;
  onClosed: () => void;
}

export function UserProfileModal({ opened, onClosed }: UserProfileModalProps) {
  const modal = useRef<HTMLIonModalElement>(null);
  const { routerOutletRef } = useApp();

  return (
    <IonModal
      ref={modal}
      presentingElement={routerOutletRef?.current}
      isOpen={opened}
      onIonModalDidDismiss={onClosed}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onClosed()}>Done</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex w-full flex-col items-center justify-center gap-4 p-4 pt-8">
          <UserAvatar />
          <div className="flex text-2xl font-bold">Elvin Chu</div>
          <div className="font-normal opacity-50 ">Green | 28173993127</div>
          <OutlineButton color={"primary"} className="w-full">
            <IonIcon slot="start" icon={pencilSharp} />
            Edit Profile
          </OutlineButton>
          <IonList inset className="m-0 w-full rounded-xl text-black">
            <ListItem>Transaction History</ListItem>
          </IonList>
          <IonList inset className="m-0 w-full rounded-xl text-black">
            <ListItem className="m-0 w-full rounded-xl text-black" number={2}>
              Connected Account
            </ListItem>
          </IonList>
          <IonList inset className="m-0 w-full rounded-xl text-black">
            <div className="flex w-full flex-col gap-0">
              <ListItem className="m-0 w-full rounded-t-xl text-black">
                Privacy
              </ListItem>
              <ListItem className="m-0 w-full rounded-b-xl text-black">
                Help & Support
              </ListItem>
            </div>
          </IonList>
        </div>
      </IonContent>
    </IonModal>
  );
}
