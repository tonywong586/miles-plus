import { IonButton, IonContent, IonModal } from "@ionic/react";
import { useRef, useState } from "react";
import { Input } from "~/features/common";

export interface InfoModalProps {
  opened: boolean;
  onClosed: () => void;
}

export function InfoModal({ opened, onClosed }: InfoModalProps) {
  const modal = useRef<HTMLIonModalElement>(null);
  const [value, setValue] = useState("");

  return (
    <IonModal
      ref={modal}
      isOpen={opened}
      onIonModalDidDismiss={onClosed}
      backdropDismiss
      initialBreakpoint={0.35}
      breakpoints={[0, 0.35]}
    >
      <IonContent>
        <div className="p-4">
          <div className="text-lg font-extrabold">More</div>

          <div className="mt-2 flex flex-col gap-3">
            <Input
              placeholder="Tell us what you want to change"
              value={value}
              onIonChange={(e) => setValue(e.detail.value!)}
            />

            <IonButton
              expand="full"
              className="overflow-hidden rounded-lg"
              onClick={onClosed}
            >
              Confirm
            </IonButton>
          </div>

          <div className="my-3 opacity-50">
            E.g. I want to more fun, and meet some new friends
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
}
