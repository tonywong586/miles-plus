import { AsiaMilesIcon } from "./Icons/AsiaMilesIcon";

export interface OfferCardProps {
  isLimited?: boolean;
  title: string;
  apy: number;
  tenurePeriod: number;
  maxAmount: number;
}

export const OfferCard = ({
  isLimited = false,
  title,
  apy,
  tenurePeriod = 0,
  maxAmount,
}: OfferCardProps) => {
  return (
    <div className="relative flex h-[148px] w-full flex-col justify-between rounded-xl bg-gradient-to-r from-[#006867]  to-[#019B9A] p-4 text-base font-bold text-white active:opacity-80">
      {isLimited && (
        <div className="absolute right-0 top-0 flex h-[23px] w-[96px] items-center justify-center rounded-bl-xl rounded-tr-xl bg-[#EFA940] text-xs">
          Limited offer
        </div>
      )}

      <div className="absolute bottom-0 right-0 h-[120px] w-[98px] bg-[url('/images/cathay-logo.svg')] bg-cover bg-no-repeat" />

      <div className=" max-w-[140px] text-sm">{title}</div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center ">
            {apy}
            <div className="text-xs ">%</div>
          </div>
          <div className="text-xs font-normal opacity-50">APY</div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-1">
            {tenurePeriod}
            <div className="text-xs">Months</div>
          </div>
          <div className="text-xs font-normal opacity-50">Tenure Period</div>
        </div>
      </div>

      <div className="flex flex-row gap-1.5 text-xs font-normal opacity-80">
        <div>Max. amount:</div>
      </div>
    </div>
  );
};
