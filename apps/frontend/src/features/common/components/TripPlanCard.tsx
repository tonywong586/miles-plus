import { AsiaMilesIcon } from "./Icons";
import { FormatNumber } from "./FormatNumber";
import { cn } from "~/lib/misc";
import clsx from "clsx";

interface TripPlanCardProps {
  title: string;
  url: string;
  date: string;
  seats: string;
  className?: string;
  state: "draft" | "confirmed";
}

export const TripPlanCard = ({
  title,
  url,
  className,
  date,
  seats,
  state,
}: TripPlanCardProps) => {
  return (
    <div className={className}>
      <div
        className="relative h-[211px] w-full overflow-hidden rounded-xl bg-cover active:opacity-80"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div
          className={cn(
            "rounded-rl-xl absolute left-0 top-0 flex h-[23px] w-fit items-center justify-center rounded-br-xl px-4 text-xs font-bold text-white",
            {
              "bg-[#737373]": state === "draft",
              "bg-primary": state === "confirmed",
            },
          )}
        >
          {clsx({
            Draft: state === "draft",
            "Booking Confirmed": state === "confirmed",
          })}
        </div>
        <div
          className=" absolute bottom-0 w-full rounded-b-[12px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
            height: "80px",
          }}
        ></div>
        <div className="absolute bottom-0 flex w-full flex-col gap-0.5 p-4 text-white">
          <div className="font-bold">{title}</div>
          <div className="text-sm">{seats}</div>
          <div className="text-sm">{date}</div>
        </div>
      </div>
    </div>
  );
};
