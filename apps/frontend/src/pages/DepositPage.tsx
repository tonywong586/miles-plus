import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  AddIcon,
  OfferCard,
  TripCard,
  ListItem,
  AsiaMilesIcon,
  FormatNumber,
} from "~/features/common";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DepositModal } from "~/features/deposit";
import { useState } from "react";
import { ItemCard } from "~/features/common/components/ItemCard";
import { ExtraInterestModal } from "~/features/common/components/ExtraInterestModal";

export const DepositPage = () => {
  const tripCards = [
    {
      title: "Tokyo 2024",
      url: "/images/Tokyo.png",
      tags: ["Solo", "Budget", "Relax"],
      miles: 25000,
    },
    {
      title: "Bangkok 2024",
      url: "/images/BangKok.png",
      tags: ["Couple", "Sightseeing"],
      miles: 40000,
    },
  ];

  const offerCards = [
    {
      title: "Welcome new user time deposit",
      apy: 2.0,
      tenurePeriod: 6,
      maxAmount: 10000,
      isLimited: true,
    },
    {
      title: "Welcome new user time deposit",
      apy: 2.0,
      tenurePeriod: 3,
      maxAmount: 10000,
    },
  ];

  const [isDepositModalOpened, setIsDepositModalOpened] = useState(false);
  const [extraIntModal, setExtraIntModal] = useState(false);

  return (
    <IonPage>
      <IonHeader
        translucent
        collapse="fade"
        className="pointer-events-none absolute opacity-[var(--opacity-scale)]"
      >
        <IonToolbar>
          <IonTitle>Deposit</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          className="h-[156px] bg-[url('/images/small-header-bg.svg')] bg-cover bg-no-repeat px-4 
   pb-4 text-white pt-14-safe"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div>
              <IonTitle size="large">Deposit</IonTitle>
            </div>
            <IonButton
              fill="clear"
              color="light"
              onClick={() => setIsDepositModalOpened(true)}
            >
              <AddIcon />
            </IonButton>
          </div>
        </div>

        <div className="mt-5 flex flex-row gap-1 p-4 ">
          <IonGrid className="p-0">
            <IonRow className="gap-2 ">
              <ItemCard
                title="Total deposited"
                content={
                  <div className="flex flex-row items-center ">
                    <AsiaMilesIcon className="pr-1" />
                    <FormatNumber value={20000} />
                  </div>
                }
              />
              <ItemCard
                title="Total interest"
                content="0.40%"
                haveUnionIcon
                onClick={() => {
                  setExtraIntModal(true);
                }}
              />
            </IonRow>
          </IonGrid>
        </div>
        <div className="mt-5 flex flex-col gap-1">
          <div className="container font-bold">Latest Plan</div>
          <Swiper
            className="container flex w-full p-0"
            freeMode
            slidesOffsetAfter={16}
            slidesOffsetBefore={16}
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={16}
          >
            {offerCards.map((item, i) => (
              <SwiperSlide
                key={i}
                className="!w-[261px]"
                onClick={() => console.log("clicked")}
              >
                <OfferCard
                  title={item.title}
                  apy={item.apy}
                  tenurePeriod={item.tenurePeriod}
                  maxAmount={item.maxAmount}
                  isLimited
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <DepositModal
          opened={isDepositModalOpened}
          onClosed={() => setIsDepositModalOpened(false)}
        />

        <div className="mt-5 flex flex-col gap-1 ">
          <div className="container font-bold">Journey as the goal</div>
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

        <div className=" flex flex-col p-0">
          <div className=" flex w-full flex-col gap-3 p-4">
            <div className=" text-base font-bold">My Plan</div>
            <div className=" text-sm">You don't have deposit plan yet</div>
          </div>
          <IonList className="flex flex-col gap-2 p-4" lines="none">
            <ListItem className=" text-black ">
              <div className=" flex flex-row items-center text-sm">
                <IonIcon icon="images/plan_icon.svg" className="pr-2 text-lg" />
                Choose Plan
              </div>
            </ListItem>

            <ListItem className=" text-black ">
              <div className=" flex flex-row items-center  text-sm">
                <IonIcon
                  icon="images/browser_goal_icon.svg"
                  className="pr-2 text-lg"
                />
                Browse Goal
              </div>
            </ListItem>
          </IonList>
        </div>
        <ExtraInterestModal
          opened={extraIntModal}
          onClosed={() => setExtraIntModal(false)}
        />

        {/* <div className="w-full p-4 ">
          <div className="w-full "></div>
          <div className="flex flex-col gap-4">
            <MilesBalanceCard />
            <div className="w-full ">
              <IonGrid className="w-full p-0">
                <IonRow className="w-full ">
                  <IonCol className="pr-1.5">
                    <OutlineButton className="w-full ">History</OutlineButton>
                  </IonCol>
                  <IonCol className="pl-1.5">
                    <IonButton className="w-full ">Deposit</IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-8">
            <div className="font-bold ">My Portfolio</div>
            <PortfolioCard
              title="Standard Plan (Flex)"
              amountDeposited={80000}
              netInterest="1309.11"
              estAPY="1.51"
              tenurePeriod="2"
            />
            <PortfolioCard
              title="Welcome new user time deposit"
              amountDeposited={80000}
              netInterest="1309.11"
              estAPY="1.51"
              tenurePeriod="2"
              startOnDate="20"
              endOnDate="Aug"
            />
          </div>
        </div> */}
      </IonContent>
    </IonPage>
  );
};
