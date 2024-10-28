import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { useApp } from "../lib";
import { OutlineButton } from "./OutlineButton";
import { cn } from "~/lib/misc";
import { close } from "ionicons/icons";

export interface MissionCardProps {
  title: string;
  src: string;
  Status: string;
  boostingRate: number;
  checked: boolean;
  description?: string;
}
export interface MissionCardModalProps {
  opened: boolean;
  onClosed: () => void;
  MissionCard: MissionCardProps;
}

export function MissionCardModal({
  opened,
  onClosed,
  MissionCard,
}: MissionCardModalProps) {
  const modal = useRef<HTMLIonModalElement>(null);
  const { routerOutletRef } = useApp();
  return (
    <IonModal
      ref={modal}
      presentingElement={routerOutletRef?.current}
      isOpen={opened}
      onIonModalDidDismiss={onClosed}
    >
      <IonContent>
        <div>
          <IonImg src={MissionCard.src} className=" bg rounded-t-lg bg-cover" />
        </div>
        <div className=" flex flex-col p-4">
          <div className=" text-xs opacity-50">{MissionCard.Status}</div>
          <div className="flex flex-row gap-2">
            {MissionCard.title}{" "}
            <div className=" flex items-center rounded-[4px] border-[1px] border-primary px-1 text-xs font-medium text-primary">
              Boosting {MissionCard.boostingRate}x
            </div>
          </div>
          <div className=" pt-4 text-xs leading-5 opacity-50">
            {MissionCard.description}
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="[--background:#fff]">
          <IonButton className="w-full" onClick={() => onClosed()}>
            Next
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
}
