import { AsiaMilesIcon, UnionIcon } from "../../common/components/Icons";
import { FormatNumber } from "../../common/components/FormatNumber";

// interface MilesBalanceCardProps {
//   milesBalance: number;
//   milesChanges: number;
//   milesAvailable: number;
//   milesLocked: number;
// }

export function MilesBalanceCard() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        {/* Current */}
        <div className="flex flex-1 items-center gap-1">
          <AsiaMilesIcon className="text-2xl" />
          <div className="text-3xl font-bold">
            <FormatNumber value={90914} />
          </div>
        </div>

        {/* Changes */}
        <div className="flex flex-row items-center gap-1 text-right text-sm">
          <div className="flex items-center justify-end gap-1 font-bold text-primary">
            + <AsiaMilesIcon className="text-primary" />
            <FormatNumber value={14} />
          </div>
          <div className="opacity-50">Today</div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-3 text-xs">
        <div className="flex gap-1.5">
          <span className="justify-center opacity-50">Available</span>
          <div className="flex items-center ">
            <AsiaMilesIcon className="pr-1 " />
            <FormatNumber value={78000} />
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <span className="justify-center opacity-50">Locked</span>
          <div className="flex items-center">
            <AsiaMilesIcon className="pr-1 " />
            <FormatNumber value={12914} />
          </div>
          <UnionIcon className="text-sm" />
        </div>
      </div>
    </div>
  );
}
