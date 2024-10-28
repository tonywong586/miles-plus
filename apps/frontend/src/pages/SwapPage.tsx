import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AsiaMilesIcon, UnionIcon } from "~/features/common";
import {
  chevronDown,
  chevronDownOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import { AsiaMilesYellowIcon } from "~/features/common/components/Icons/AsiaMilesYellowIcon";

export const SwapPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Swap</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Swap</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="flex-col p-4">
          <div className="flex flex-col gap-3 rounded-xl border-[1px] border-black border-opacity-5 p-4">
            <div className=" flex flex-row justify-between">
              <div className="font-bold">10,000</div>
              <div className="flex h-[30px] items-center justify-center rounded-xl bg-[#F8F8F8]">
                <div className=" pl-2">
                  <AsiaMilesYellowIcon />
                </div>
                <IonSelect
                  value="CAM"
                  className="rounded-xl px-1 py-0 text-sm"
                  aria-label="Fruit"
                  interface="popover"
                  toggleIcon={chevronDownOutline}
                >
                  <IonSelectOption value="CAM">
                    <AsiaMilesYellowIcon />
                    CAM
                  </IonSelectOption>
                  <IonSelectOption value="AMM">AAM</IonSelectOption>
                </IonSelect>
              </div>
            </div>
            <div className=" flex flex-row justify-between text-xs ">
              <div className="flex flex-row gap-1">
                <div className="opacity-50">Available</div>
                <div className="flex items-center justify-center">
                  <AsiaMilesIcon />
                  10000
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <div className="opacity-50">Locked</div>
                <div className=" flex items-center justify-center">
                  <AsiaMilesIcon />
                  81,309.11
                  <UnionIcon className=" pl-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl border-[1px] border-black border-opacity-5 p-4">
            <div className=" flex flex-row justify-between">
              <div className="font-bold">5,000</div>
              <div className="flex h-[30px] items-center justify-center rounded-xl bg-[#F8F8F8]">
                <div className="pl-2">
                  <AsiaMilesYellowIcon />
                </div>
                <IonSelect
                  value="AMM"
                  className="rounded-xl px-1 py-0 text-sm"
                  aria-label="Fruit"
                  interface="popover"
                  toggleIcon={chevronDownOutline}
                >
                  <IonSelectOption value="CAM">
                    <AsiaMilesYellowIcon />
                    CAM
                  </IonSelectOption>
                  <IonSelectOption value="AMM">
                    <AsiaMilesYellowIcon />
                    AAM
                  </IonSelectOption>
                </IonSelect>
              </div>
            </div>
            <div className=" flex flex-row justify-between text-xs">
              <div className="flex flex-row gap-1">
                <div className="flex items-center justify-center">
                  Connected to 43221233D
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <div className=" flex items-center justify-center text-[#016564]">
                  Unbind
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
