import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";
import { useRef, useState } from "react";
import { useApp } from "~/features/common";
import { Step1 } from "./Step1";

export interface TripPlannerModalProps {
  opened: boolean;
  onClosed: () => void;
}

export const TripPlannerModal = ({
  opened,
  onClosed,
}: TripPlannerModalProps) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const { routerOutletRef } = useApp();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  return (
    <IonModal
      ref={modal}
      presentingElement={routerOutletRef?.current}
      isOpen={opened}
      onIonModalDidDismiss={onClosed}
    >
      <IonHeader>
        <IonToolbar className="[--background:#fff]">
          <IonTitle>Plan New Trip</IonTitle>
          {/* <IonButtons slot="start">
            {step === 2 && (
              <IonButton
                color="dark"
                onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
            )}
          </IonButtons> */}
          <IonButtons slot="end">
            <IonButton color="dark" onClick={() => onClosed()}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* header */}
        <div className="flex flex-col items-center gap-4 mt-5">
          <IonImg class="h-[60px] w-[60px]" src={"/images/fly.svg"} />
          <div className="text-xl font-light">Where you want to go?</div>
        </div>

        <Step1 onSearch={(v) => console.log(v)} />
      </IonContent>
    </IonModal>
  );
};
