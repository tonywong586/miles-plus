import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { OutlineButton, UserAvatarButton } from "~/features/common";
import { PortfolioCard } from "~/features/common/components/PortfolioCard";
import { MilesBalanceCard } from "~/features/miles";

export const DepositNewPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Deposit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar className="w-full">
            <div className="flex w-full flex-row items-center justify-between pr-4">
              <div>
                <IonTitle size="large">Deposit</IonTitle>
              </div>
              <div>
                <UserAvatarButton />
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <div className="w-full p-4 ">
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
        </div>
      </IonContent>
    </IonPage>
  );
};
