import {
  IonPage,
  IonTitle,
  IonContent,
  IonHeader,
  IonToolbar,
  IonFooter,
  IonButton,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { MissionCard } from "~/features/common/components/MissionCard";
import {
  MissionCardModal,
  MissionCardProps,
} from "~/features/common/components/MissionCardModal";

export const MissionPage = () => {
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [missionCardModalOpened, setMissionCardModalOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    title: "",
    src: "",
    Status: "",
    boostingRate: 0,
    checked: false,
  });

  const MissionCards: MissionCardProps[] = [
    {
      title: "Daily Check In",
      src: "/images/Mission1.png",
      Status: "IN PROGRESS",
      boostingRate: 0.1,
      checked: checked,
      description:
        "Welcome to our Daily Check-In! Start your day by joining our interactive mission. Simply click or tap to check in and unlock exclusive benefits.",
    },
    {
      title: "Share a travel memory",
      src: "/images/Mission2.png",
      Status: "IN PROGRESS",
      boostingRate: 0.2,
      checked: checked2,
      description: "Share a photo to facebook/Instagram.",
    },
    {
      title: "Answer MCQs",
      src: "/images/Mission3.png",
      Status: "IN PROGRESS",
      boostingRate: 0.2,
      checked: checked3,
      description: "Answer 3 MC Question.",
    },
  ];

  useEffect(() => {
    if (checked && checked2 && checked3) {
      setCheckedCount(3);
    } else if (checked && checked2) {
      setCheckedCount(2);
    } else if (checked && checked3) {
      setCheckedCount(2);
    } else if (checked2 && checked3) {
      setCheckedCount(2);
    } else if (checked || checked2 || checked3) {
      setCheckedCount(1);
    } else {
      setCheckedCount(0);
    }
  }, [checked, checked2, checked3]);

  return (
    <IonPage>
      <IonHeader
        translucent
        collapse="fade"
        className="pointer-events-none absolute opacity-[var(--opacity-scale)]"
      >
        <IonToolbar>
          <IonTitle>Daily Mission</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          className="h-[156px] bg-[url('/images/small-header-bg.svg')] bg-cover bg-no-repeat px-4 
pb-4 text-white pt-14-safe"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div>
              <IonTitle size="large">Daily Mission</IonTitle>
            </div>
          </div>
        </div>
        <div className="p-4 ">
          <div className="flex flex-row items-center justify-between rounded-xl bg-[#F8F8F8] p-4 text-sm ">
            <div className="flex flex-col ">
              <div className="">Completed Missions</div>
              <div className="opacity-50 ">As 19 Nov 2023</div>
            </div>
            <div className="flex flex-row text-lg font-bold ">
              <div>{checkedCount}</div>
              <div className="opacity-50 ">/3</div>
            </div>
          </div>
        </div>
        {MissionCards.map((missionCard, i) => (
          <MissionCard
            key={i}
            onClick={() => {
              setMissionCardModalOpened(true);
              setSelectedCard(missionCard);
            }}
            checked={checked}
            src={missionCard.src}
            title={missionCard.title}
            Status={missionCard.Status}
            boostingRate={missionCard.boostingRate}
          />
        ))}
      </IonContent>
      <MissionCardModal
        opened={missionCardModalOpened}
        onClosed={() => setMissionCardModalOpened(false)}
        MissionCard={selectedCard}
      />
    </IonPage>
  );
};
