import { IonCheckbox } from "@ionic/react";
import React from "react";
import { AsiaMilesIcon } from "./Icons";
import { StarRating } from "./StartRating";

interface HotelListProps {
  title: string;
  description: string;
  price: number;
  miles: number;
  imageUrl: string;
  rating: number;
}

export const HotelList = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className=" flex flex-row">
          <img src="/images/Hotel1.png" className="w-[66px]" />
          <div className=" flex flex-col gap-1 pl-2">
            <div>Shinagawa Prince Hotel</div>
            <div className="flex flex-row items-center">
              <StarRating star={4} />
              <div className=" pl-1 text-xs opacity-50">Best Match</div>
            </div>
            <div className="flex flex-row items-center font-medium text-primary">
              <AsiaMilesIcon />
              <div className=" flex flex-row items-center gap-1 text-sm">
                2500 <div className=" text-black opacity-50">or</div>{" "}
                <div className=" text-xs text-black">HK$946</div>
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
