import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AddIcon, TripCard } from "~/features/common";
import { TripPlannerModal } from "~/features/trip";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export const tripCards = [
  {
    title: "Tokyo Japan",
    url: "/images/Tokyo.png",
    tags: ["Solo", "Budget", "Relax"],
    miles: 25000,
  },
  {
    title: "Bangkok Thailand",
    url: "/images/BangKok.png",
    tags: ["Couple", "Sightseeing"],
    miles: 40000,
  },
];
export const EuropeCards = [
  {
    title: "London, United Kingdom 2024",
    url: "/images/London.png",
    tags: ["Couple", "Cultural", "Exploration"],
    miles: 54000,
  },
  {
    title: "Brindisi, Italy 2024",
    url: "/images/Italy.png",
    tags: ["Family", "Explore"],
    miles: 25000,
  },
];
export const AffordableCard = [
  {
    title: "Tokyo 2024",
    url: "/images/BangKok2.png",
    tags: ["Solo", "Budget", "Relax"],
    miles: 34000,
  },
  {
    title: "Bangkok 2024",
    url: "/images/Tokyo2.png",
    tags: ["Couple", "Sightseeing"],
    miles: 23500,
  },
];

export const TripPage = () => {
  const [tripPlannerModalOpened, setTripPlannerModalOpened] = useState(false);
  return (
    <IonPage>
      <IonHeader
        translucent
        collapse="fade"
        className="pointer-events-none absolute opacity-[var(--opacity-scale)]"
      >
        <IonToolbar>
          <IonTitle>Trip</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          className="h-[300px] bg-[url('/images/trip-header-bg.svg')] bg-cover bg-no-repeat px-4 
              pt-16-safe"
        >
          <div className="text-4xl font-bold text-white">Trip</div>

          <div className="mt-4">
            <IonSearchbar className="hx-searchbar p-0" placeholder="Search" />
          </div>

          <div className="mt-4 flex gap-2">
            <IonButton
              routerLink="/manage-trip"
              color="light"
              className="w-full"
              fill="outline"
            >
              <IonIcon icon="/images/manage-trip-icon.svg" slot="start" />
              Manage Trip
            </IonButton>

            <IonButton
              onClick={() => setTripPlannerModalOpened(true)}
              className="w-full text-primary"
              style={{
                "--background-activated": "#F2F2F2",
                "--color-activated": "var(--ion-color-primary)",
                "--background": "#fff",
              }}
            >
              <AddIcon slot="start" />
              Plan New Trip
            </IonButton>
          </div>
        </div>

        <TripPlannerModal
          opened={tripPlannerModalOpened}
          onClosed={() => setTripPlannerModalOpened(false)}
        />

        {/* Stack */}

        <div className="mt-5 flex flex-col gap-1 ">
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
        <div className="mt-5 flex flex-col gap-1 ">
          <div className="container font-bold">Europe</div>
          <Swiper
            className="container flex w-full p-0 "
            freeMode
            slidesOffsetAfter={16}
            slidesOffsetBefore={16}
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={16}
          >
            {EuropeCards.map((item, i) => (
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
        <div className="mt-5 flex flex-col gap-1 pb-8">
          <div className="container font-bold">
            Dorm to Discovery: Affordable Trips
          </div>
          <Swiper
            className="container flex w-full p-0 "
            freeMode
            slidesOffsetAfter={16}
            slidesOffsetBefore={16}
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={16}
          >
            {AffordableCard.map((item, i) => (
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
      </IonContent>
    </IonPage>
  );
};
