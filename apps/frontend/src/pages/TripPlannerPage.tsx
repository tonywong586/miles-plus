import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonPage,
  IonProgressBar,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, reload } from "ionicons/icons";
import { useState } from "react";
import { OutlineButton } from "~/features/common";
import { ActivityList } from "~/features/common/components/ActivityList";
import { RegenerateBlockModal } from "~/features/miles/components/RegenerateBlockModal";

export interface Activity {
  name: string;
  type: string;
  priceHKD: number;
  asiaMiles: number;
  imageUrl: string;
}

export function TripPlanner() {
  const [regenerateModal, setRegenerateModal] = useState(false);
  const [activityLists, setActivityLists] = useState<Activity[]>([
    {
      name: "TeamLab Planets TOKYO Ticket",
      type: "Digital Nature | All day",
      priceHKD: 195,
      asiaMiles: 2500,
      imageUrl: "/images/Activity1.png",
    },
    {
      name: "TeamLab 2 TOKYO Ticket",
      type: "Digital Nature 2 | All day",
      priceHKD: 195,
      asiaMiles: 2500,
      imageUrl: "/images/Activity2.png",
    },
    {
      name: "TeamLab Planets TOKYO 3",
      type: "Digital Nature 3 | All day",
      priceHKD: 195,
      asiaMiles: 2500,
      imageUrl: "/images/Activity3.png",
    },
  ]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative flex  h-[280px] flex-col bg-[url(/images/Tokyo.png)] bg-cover bg-center">
          <div
            className="-z-1 absolute bottom-0 w-full opacity-70"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 50%)",
              height: "137px",
            }}
          />

          <IonToolbar className="pt-8 [--background:transparent]">
            <IonButtons slot="start">
              <IonButton
                color="dark"
                routerLink="/manage-trip"
                routerDirection="back"
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <div className="z-10 mt-auto w-full p-4 text-white">
            <div className="flex justify-between">
              <div className="p-0">
                <div className="font-bold">Tokyo, Japan</div>
                <div>1 Adults</div>
                <div>19 Nov 2023 - 26 Nov 2023</div>
              </div>

              <div>
                <IonButton
                  color="light"
                  fill="outline"
                  onClick={() => setRegenerateModal(true)}
                >
                  <IonIcon icon={reload} />
                </IonButton>
              </div>
            </div>

            <div className="mt-2 flex w-full gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
              {[
                "Cultural Immersion",
                "Exploration",
                "Photography",
                "Nature",
              ].map((tag, index) => (
                <div
                  key={index}
                  className="flex w-fit items-center whitespace-nowrap rounded-xl bg-[#016564] p-1 px-1.5 py-1 text-xs font-medium text-white "
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* body */}
        </div>

        <RegenerateBlockModal
          onNewPlan={(newPlan) => setActivityLists(newPlan)}
          opened={regenerateModal}
          onClosed={() => setRegenerateModal(false)}
        />

        <div className="p-4 font-semibold">
          <div className="w-full pb-3 ">Activity</div>
          <IonGrid className="p-0 pb-6">
            <IonRow className="gap-2 ">
              <IonCol className="flex flex-col gap-1 rounded-xl  border-[1px] px-4 py-3 text-sm font-medium">
                <div className="opacity-50 ">Check In</div>
                <div className=" text-primary">19 Nov 2023</div>
              </IonCol>
              <IonCol className="flex flex-col gap-1 rounded-xl border-[1px] px-4 py-3 text-sm font-medium">
                <div className="opacity-50 ">Check Out</div>
                <div className="text-primary">26 Nov 2023</div>
              </IonCol>
            </IonRow>
          </IonGrid>
          <div className="flex flex-col gap-4">
            {activityLists.map((item, index) => (
              <ActivityList
                key={index}
                title={item.name}
                description={item.type}
                price={item.priceHKD}
                miles={item.asiaMiles}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="[--background:#fff]">
          <IonGrid>
            <IonRow className="flex flex-row items-center justify-between">
              <div className="flex w-full flex-col gap-2 p-2 pb-1">
                <div className="flex flex-row gap-1 text-xs">
                  Next <div className="font-bold ">Insurance</div>
                </div>
                <IonProgressBar value={0.5} className="h-1.5  rounded-lg" />
              </div>
            </IonRow>
            <IonRow>
              <IonCol className="m-0 ">
                <OutlineButton className="w-full text-sm" color={"primary"}>
                  Save to Draft
                </OutlineButton>
              </IonCol>
              <IonCol className="m-0 ">
                <IonButton className="w-full text-sm" color={"primary"}>
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
