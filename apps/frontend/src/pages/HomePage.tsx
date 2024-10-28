import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonProgressBar,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Form } from "react-hook-form";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AsiaMilesIcon,
  FormatNumber,
  OfferCard,
  TripCard,
  UserAvatarButton,
} from "~/features/common";
import { ItemCard } from "~/features/common/components/ItemCard";
import { MilesBalanceCard } from "~/features/miles";
import { ExtraInterestModal } from "~/features/common/components/ExtraInterestModal";
import { useState } from "react";
import { tripCards } from "./TripPage";
import { InfoModal } from "~/features/common/components/InfoModal";
export const HomePage = () => {
  const [extraIntModal, setExtraIntModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <IonPage>
      <IonHeader
        translucent
        collapse="fade"
        className="pointer-events-none absolute opacity-[var(--opacity-scale)]"
      >
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          className="h-[200px] bg-[url('/images/home-header-bg.svg')] bg-cover bg-no-repeat px-4 
           pb-4 text-white pt-14-safe"
        >
          <IonGrid class="container">
            <IonRow>
              <IonCol size="9">
                <div className="text-2xl font-bold">Good morning, Elvin</div>
                <div className="text-sm opacity-50">Green | 28173993127</div>
              </IonCol>

              <IonCol class="flex justify-end" size="3">
                <UserAvatarButton />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Stack */}
        <div className="mt-4 flex flex-col gap-4">
          <div className="container flex flex-col gap-1">
            <div className="font-bold">Balance Miles</div>
            <MilesBalanceCard />
          </div>
          <IonGrid className="m-0">
            <IonRow>
              <IonCol>
                <ItemCard
                  title="Total deposited"
                  titleProps={{ className: "text-sm text-black" }}
                  content={
                    <div className="flex flex-row items-center ">
                      <AsiaMilesIcon className="pr-1" />
                      <FormatNumber value={12914} />
                    </div>
                  }
                />
              </IonCol>
              <IonCol>
                <ItemCard
                  title="Total interest"
                  titleProps={{ className: "text-sm text-black" }}
                  content="0.40%"
                  haveUnionIcon
                  onClick={() => {
                    setExtraIntModal(true);
                  }}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <ItemCard
                  title="Completed Missions"
                  titleProps={{ className: "text-sm text-black" }}
                  haveMissionCount
                  content={
                    <div className="flex  flex-row items-center text-sm font-normal opacity-50 ">
                      As 19 Nov 2023
                    </div>
                  }
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <div>
            <div className="container mb-2 font-bold">Latest Plan</div>
            <Swiper
              className="container w-full p-0"
              freeMode
              slidesOffsetAfter={16}
              slidesOffsetBefore={16}
              modules={[FreeMode]}
              slidesPerView="auto"
              spaceBetween={16}
            >
              <SwiperSlide className="!w-[261px]">
                <OfferCard
                  title="Beginner Plan"
                  apy={3.5}
                  tenurePeriod={3}
                  maxAmount={100000}
                  isLimited
                />
              </SwiperSlide>

              <SwiperSlide className="!w-[261px]">
                <OfferCard
                  title="Intermediate Plasn"
                  apy={4.0}
                  tenurePeriod={6}
                  maxAmount={10000}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-5 flex flex-col gap-1  pb-8">
            <div className="container font-bold">Quick relax and fun</div>
            <Swiper
              className="container flex w-full p-0 "
              freeMode
              slidesOffsetAfter={16}
              slidesOffsetBefore={16}
              modules={[FreeMode]}
              slidesPerView="auto"
              spaceBetween={16}
            >
              {tripCards.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[261px]"
                  onClick={() => console.log("clicked")}
                >
                  <TripCard
                    tags={item.tags}
                    title={item.title}
                    url={item.url}
                    miles={item.miles}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="container">
            <div className="mb-2 font-bold">Daily Task</div>
            <IonList inset className="hx-ion-list">
              <IonItem detail={false}>
                <div className="flex w-full flex-col gap-4">
                  <div className="text-xs">
                    Great job, you got extra{" "}
                    <span className="font-bold">0.01%</span> APY, finish daily
                    task to maintain or upgrade your APY for standard plan.
                  </div>
                  <IonProgressBar value={0.5} className="h-1.5 rounded-lg" />
                </div>
              </IonItem>
            </IonList>
          </div> */}
        </div>
        <ExtraInterestModal
          opened={extraIntModal}
          onClosed={() => setExtraIntModal(false)}
        />
        <InfoModal opened={infoModal} onClosed={() => setInfoModal(false)} />
      </IonContent>
    </IonPage>
  );
};
