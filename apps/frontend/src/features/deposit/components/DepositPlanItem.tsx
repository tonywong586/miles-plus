import { DepositPlan } from "~/data/deposit.data";
import { cn } from "~/lib/misc";
import { DepositPlanContent } from "./DepositPlanContent";

export interface DepositPlanItemProps extends Omit<DepositPlan, "id"> {
  selected?: boolean;
  onClick?: () => void;
}

export const DepositPlanItem = ({
  selected,
  onClick,
  apy,
  extraApy,
  maxAmount,
  months,
}: DepositPlanItemProps) => {
  return (
    <div
      aria-selected={selected}
      role="button"
      onClick={onClick}
      className={cn(
        "flex flex-col gap-2 rounded-xl border border-zinc-200 p-4",
        {
          "border-primary": selected,
        },
      )}
    >
      <DepositPlanContent
        apy={apy}
        extraApy={extraApy}
        maxAmount={maxAmount}
        months={months}
      />
    </div>
  );
};
