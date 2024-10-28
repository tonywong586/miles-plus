import { IonCheckbox } from "@ionic/react";
import React from "react";
import { AsiaMilesIcon } from "./Icons";
import { StarRating } from "./StartRating";
import { FormatNumber } from "./FormatNumber";

interface ActivityListProps {
  title: string;
  description: string;
  price: number;
  miles: number;
  imageUrl: string;
}

export const ActivityList = ({
  title,
  description,
  price,
  miles,
  imageUrl,
}: ActivityListProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row ">
          <div className="h-[66px] w-[66px] bg-gray-200" />
          <div className="flex flex-col gap-1 pl-2 ">
            <div className="line-clamp-1">{title}</div>
            <div className="flex flex-row items-center text-xs opacity-50">
              {description}
            </div>
            <div className="flex flex-row items-center text-sm font-medium text-primary">
              <AsiaMilesIcon className="pr-1 text-xs " />
              <div className="flex flex-row items-center gap-1 text-sm ">
                <FormatNumber value={miles}></FormatNumber>{" "}
                <div className="text-black opacity-50 ">or</div>{" "}
                <div className="text-xs text-black ">HK${price}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <IonCheckbox />
        </div>
      </div>
    </div>
  );
};
