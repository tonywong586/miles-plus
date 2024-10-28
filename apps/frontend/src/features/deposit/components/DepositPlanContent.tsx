import { format } from "date-fns";
import { DepositPlan } from "~/data/deposit.data";
import { AsiaMilesIcon, FormatNumber } from "~/features/common";
import { cn } from "~/lib/misc";

export function DepositPlanContent({
  apy,
  months,
  maxAmount,
  extraApy,
  className,
}: Omit<DepositPlan, "id"> & { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2 text-xs font-light", className)}>
      <div className="flex justify-between text-base">
        <span className="font-bold">{months}-month</span>
        <span className="text-primary">
          <span className="font-semibold">{(apy + extraApy).toFixed(2)}</span>%
          APY
        </span>
      </div>

      <div>
        Basic {apy.toFixed(2)}% + Extra {extraApy.toFixed(2)}% APY
      </div>

      <div className="flex">
        <span>Max. amount: </span>
        <span className="flex items-center ml-1">
          <AsiaMilesIcon />
          <span className="ml-1 font-bold">
            <FormatNumber value={maxAmount} />
          </span>
        </span>
      </div>

      <div className="opacity-50">
        Claim by:{" "}
        {format(
          new Date(new Date().setMonth(new Date().getMonth() + months)),
          "dd MMM yyyy",
        )}
      </div>
    </div>
  );
}
