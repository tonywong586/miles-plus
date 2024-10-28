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
import { OutlineButton } from "./OutlineButton";
import { cn } from "~/lib/misc";
import { close } from "ionicons/icons";

export interface ExtraInterestModalProps {
  opened: boolean;
  onClosed: () => void;
}

export function ExtraInterestModal({
  opened,
  onClosed,
}: ExtraInterestModalProps) {
  const modal = useRef<HTMLIonModalElement>(null);
  const { routerOutletRef } = useApp();
  //create a extra interest array to store the extra interest and data
  const extraInterest = [
    {
      Date: "19 Nov 2021",
      interest: 0.4,
    },
    {
      Date: "18 Nov 2021",
      interest: 0.4,
    },
    {
      Date: "17 Nov 2021",
      interest: 0.3,
    },
    {
      Date: "16 Nov 2021",
      interest: 0.3,
    },
    {
      Date: "15 Nov 2021",
      interest: 0.4,
    },
    {
      Date: "14 Nov 2021",
      interest: 0.4,
    },
    {
      Date: "13 Nov 2021",
      interest: 0.3,
    },
    {
      Date: "12 Nov 2021",
      interest: 0.4,
    },
    {
      Date: "11 Nov 2021",
      interest: 0.3,
    },
  ];

  return (
    <IonModal
      ref={modal}
      presentingElement={routerOutletRef?.current}
      isOpen={opened}
      onIonModalDidDismiss={onClosed}
    >
      <IonHeader>
        <IonToolbar className="[--background:#fff]">
          <IonTitle>Extra interest</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark" onClick={() => onClosed()}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-sm opacity-50 ">
              Accumulate rewards by completing daily missions, applicable to all
              plans.
            </div>
            <div>
              <OutlineButton className="text-sm " color={"primary"}>
                Learn more
              </OutlineButton>
            </div>
          </div>
        </div>
        <hr />
        <IonList className="overflow-y-scroll text-black">
          {extraInterest.map((item, index) => {
            return (
              <div
                className={cn(
                  index % 2 == 0 ? " bg-[#F8F8F8]" : "",
                  "flex flex-row justify-between p-2 px-3",
                )}
                key={item.Date + item.interest}
              >
                <div className="text-sm font-normal">{item.Date}</div>

                <div className="text-sm font-normal text-primary">
                  + {item.interest} %
                </div>
              </div>
            );
          })}
        </IonList>
      </IonContent>
    </IonModal>
  );
}
