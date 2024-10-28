import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { AsiaMilesIcon, FormatNumber, UnionIcon } from "~/features/common";
import { chevronForwardOutline } from "ionicons/icons";

interface PortfolioCardProps {
  title?: string;
  amountDeposited: number;
  netInterest: string;
  estAPY: string;
  tenurePeriod?: string;
  startOnDate?: string;
  endOnDate?: string;
}

export const PortfolioCard = ({
  title,
  amountDeposited,
  netInterest,
  estAPY,
  tenurePeriod,
  startOnDate,
  endOnDate,
}: PortfolioCardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-[#F8F8F8] p-4 font-bold active:bg-[#ededed]">
      <div className="flex flex-row justify-between w-full">
        {title}
        <IonIcon
          className="h-[18px] w-[18px] opacity-50"
          icon={chevronForwardOutline}
        />
      </div>
      <IonGrid class="w-full p-0">
        <IonRow>
          <IonCol className="p-0">
            <div className="flex flex-col">
              <div className="text-sm font-normal opacity-50">
                Amount Deposited
              </div>
              <div className="flex flex-row items-center gap-1 text-lg">
                <AsiaMilesIcon />
                <FormatNumber value={amountDeposited} />
              </div>
            </div>
          </IonCol>
          <IonCol>
            <div className="flex flex-col ">
              <div className="text-sm font-normal opacity-50">Net Interest</div>
              <div className="flex flex-row items-center gap-1 text-lg text-primary">
                + <AsiaMilesIcon />
                {netInterest}
              </div>
            </div>
          </IonCol>
        </IonRow>
        <hr className="w-full " />

        <IonRow className="pt-3">
          <IonCol className="p-0">
            <div className="flex flex-col ">
              <div className="text-sm font-normal opacity-50">Est. APY</div>
              <div className="flex flex-row items-center gap-1 text-sm">
                <AsiaMilesIcon />
                {estAPY}% <UnionIcon className=" text-[18px]" />
              </div>
            </div>
          </IonCol>

          <IonCol className="p-0">
            <div>
              <div className="text-sm font-normal opacity-50">
                {" "}
                Tenure Period
              </div>
              <div className="flex flex-row items-center gap-1 text-sm">
                {tenurePeriod ? tenurePeriod + " Months" : "-"}
              </div>
            </div>
          </IonCol>
        </IonRow>
        {startOnDate && endOnDate && (
          <IonRow className="pt-3">
            <IonCol className="p-0">
              <div className="flex flex-col ">
                <div className="text-sm font-normal opacity-50">Start on</div>
                <div className="flex flex-row items-center gap-1 text-sm">
                  {startOnDate}
                </div>
              </div>
            </IonCol>

            <IonCol className="p-0">
              <div>
                <div className="text-sm font-normal opacity-50"> End on</div>
                <div className="flex flex-row items-center gap-1 text-sm">
                  {endOnDate}
                </div>
              </div>
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    </div>
  );
};
