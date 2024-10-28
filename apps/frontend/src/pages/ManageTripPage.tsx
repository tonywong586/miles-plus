import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonNavLink,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import { TripPlanCard } from "~/features/common/components/TripPlanCard";

export const ManageTripPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="[--background:#fff]">
          <IonTitle>Manage Trip</IonTitle>
          <IonButtons slot="start">
            <IonButton routerDirection="back" color="dark" routerLink="/trip">
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="container flex flex-col gap-4 p-4">
          <IonSegment value="all">
            <IonSegmentButton value="all">
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="draft">
              <IonLabel>Draft</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="confirmed">
              <IonLabel>Confirmed</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <Link to="/trip-planner">
            <TripPlanCard
              state="draft"
              title="Tokyo, Japan"
              seats="1 Adult"
              date="19 Nov 2023 - 26 Nov 2023"
              url="/images/Tokyo.png"
            />
          </Link>

          <Link to="/trip-planner">
            <TripPlanCard
              state="confirmed"
              title="London, United Kingdom"
              seats="2 Adults,  1 Children"
              date="1 Jul 2024 - 14 Jul 2024"
              url="/images/London.png"
            />
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};
