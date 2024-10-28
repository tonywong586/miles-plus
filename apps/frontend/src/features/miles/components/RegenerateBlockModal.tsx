import { IonButton, IonContent, IonLoading, IonModal } from "@ionic/react";
import { useRef, useState } from "react";
import { Input } from "~/features/common";
import { trpc } from "~/lib/trpcClient";
import { Activity } from "~/pages/TripPlannerPage";

export interface RegenerateModalProps {
  opened: boolean;
  onClosed: () => void;
  onNewPlan: (newPlan: Activity[]) => void;
}

export function RegenerateBlockModal({
  opened,
  onClosed,
  onNewPlan,
}: RegenerateModalProps) {
  const tripActivities = trpc.ai.genTripActivities.useMutation();
  const modal = useRef<HTMLIonModalElement>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegenerate = async (v: string) => {
    setLoading(true);
    try {
      const newPlan = await tripActivities.mutateAsync({
        requirement: v,
      });
      console.log("newPlan", newPlan);
      onNewPlan(JSON.parse(newPlan as any));
    } finally {
      setLoading(false);
    }
  };

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

          <IonLoading isOpen={loading} message="Generating new plan..." />

          <div className="mt-2 flex flex-col gap-3">
            <Input
              placeholder="Tell us what you want to change"
              value={value}
              onIonChange={(e) => {
                setValue(e.detail.value!);
                handleRegenerate(e.detail.value!);
              }}
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
