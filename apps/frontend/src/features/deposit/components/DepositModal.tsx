import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { AsiaMilesIcon, FormatNumber, Input, useApp } from "~/features/common";
import { chevronBack, close } from "ionicons/icons";
import { DepositPlanItem } from "./DepositPlanItem";
import { DepositPlan, depositPlanData } from "~/data/deposit.data";
import clsx from "clsx";
import { DepositPlanContent } from "./DepositPlanContent";

export interface DepositModalProps {
  opened: boolean;
  onClosed: () => void;
}

export function DepositModal({ opened, onClosed }: DepositModalProps) {
  const modal = useRef<HTMLIonModalElement>(null);
  const { routerOutletRef } = useApp();
  //Store the id of the selected plan
  const [selectedPlan, setSelectedPlan] = useState<DepositPlan | null>();
  const [step, setStep] = useState(1);

  const handleKeyPress = (e: {
    code: any;
    key: any;
    preventDefault: () => void;
  }) => {
    const keyCode = e.code || e.key;
    if (!/Digit[1-9]/.test(keyCode)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!opened) {
      setStep(1);
      setSelectedPlan(null);
    }
  }, [opened]);

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
          <IonTitle>New Time Deposit</IonTitle>
          <IonButtons slot="start">
            {step === 2 && (
              <IonButton
                color="dark"
                onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
            )}
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="dark" onClick={() => onClosed()}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="flex flex-col gap-4 p-4">
          {/* header */}
          <div className="flex flex-col items-center gap-4">
            <IonImg
              class="h-[60px] w-[60px]"
              src={
                step === 3 ? "/images/all-done.svg" : "/images/deposit-pig.svg"
              }
            />
            <div className="text-xl font-light">
              {clsx({
                "Select Plan Below": step === 1,
                "How would you like to set it up?": step === 2,
                "You are all set!": step === 3,
              })}
            </div>
          </div>

          {step === 1 &&
            depositPlanData.map((plan) => (
              <DepositPlanItem
                key={plan.id}
                selected={selectedPlan?.id === plan.id}
                months={plan.months}
                apy={plan.apy}
                extraApy={plan.extraApy}
                maxAmount={plan.maxAmount}
                onClick={() => setSelectedPlan(plan)}
              />
            ))}

          {step === 2 && (
            <div className="flex flex-col">
              <div className="border border-x-0 border-y border-zinc-100 py-3">
                <DepositPlanContent {...selectedPlan!} />
                <IonButton
                  size="small"
                  fill="clear"
                  className="m-0 p-0 text-left [--padding-start:0]"
                  onClick={() => setStep(1)}
                >
                  Change Plan
                </IonButton>
              </div>
              <div className="flex flex-col gap-2 pt-6 ">
                <div className="text-xs">Amount</div>
                <Input
                  placeholder="Enter amount"
                  showMaxButton
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex w-full flex-col gap-3 rounded-xl bg-[#F8F8F8] p-4 text-sm">
              <div className="text-base font-bold">Basic 3-month plan</div>
              <div className="flex flex-row justify-between">
                <div className="opacity-50 ">Amount deposited</div>
                <div className="flex flex-row items-center justify-center text-primary">
                  <AsiaMilesIcon />
                  <div className="font-bold ">
                    <FormatNumber value={10000} />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="opacity-50 ">Claim by</div>
                <div className="flex flex-row items-center justify-center text-black ">
                  <div className="font-medium ">19 Feb 2024</div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="opacity-50 ">Basic + extra interest</div>
                <div className="flex flex-row items-center justify-center text-primary">
                  <div className="font-medium text-black ">3.00% + 0.4%</div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="opacity-50 ">Basic + extra miles</div>
                <div className="flex flex-row gap-1 text-primary">
                  <div className="flex flex-row items-center justify-center ">
                    <AsiaMilesIcon />
                    <div className="font-bold ">
                      <FormatNumber value={75} />
                    </div>
                  </div>
                  +
                  <div className="flex flex-row items-center justify-center ">
                    <AsiaMilesIcon />
                    <div className="font-bold ">
                      <FormatNumber value={12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="opacity-50 ">You will get up to</div>
                <div className="flex flex-row items-center justify-center text-primary">
                  <AsiaMilesIcon />
                  <div className="font-bold ">
                    <FormatNumber value={87} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="[--background:#fff]">
          {step === 2 && (
            <div className="flex flex-col gap-2 pb-2 ">
              <div className="flex flex-row justify-between text-sm ">
                <div className="opacity-50 ">Claim by</div>
                <div>19 Feb 2024</div>
              </div>
              <div className="flex flex-row justify-between text-sm ">
                <div className="opacity-50 ">Basic + extra miles</div>
                <div className="flex flex-row gap-1 ">
                  <div className="flex flex-row items-center text-primary">
                    <AsiaMilesIcon />
                    <div className="font-bold ">
                      <FormatNumber value={75} />
                    </div>
                  </div>
                  +
                  <div className="flex flex-row items-center text-primary">
                    <AsiaMilesIcon />
                    <div className="font-bold ">
                      <FormatNumber value={12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between text-sm ">
                <div className="opacity-50 ">Claim by</div>
                <div className="flex flex-row items-center text-primary">
                  <AsiaMilesIcon />
                  <div className="font-bold ">
                    <FormatNumber value={87} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 3 ? (
            <IonButton
              className="w-full"
              disabled={!selectedPlan}
              onClick={() => onClosed()}
            >
              Done
            </IonButton>
          ) : (
            <IonButton
              className="w-full"
              disabled={!selectedPlan}
              onClick={() => nextStep()}
            >
              Next
            </IonButton>
          )}
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
}
