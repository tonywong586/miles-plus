import { IonSearchbar } from "@ionic/react";
import { destinations } from "~/data/destinations.data";
import { useState } from "react";

export interface Step1Props {
  onSearch: (searchText: string) => void;
}

export function Step1({ onSearch }: Step1Props) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="p-4">
      <IonSearchbar
        value={searchText}
        onIonChange={(e) => {
          setSearchText(e.detail.value!);
          onSearch(e.detail.value!);
        }}
        className="p-0 text-sm hx-searchbar"
        placeholder="Search destination, e.g. Tokyo"
      />
      <div className="flex flex-col gap-4 mt-4">
        <div className="text-xs text-[#aaa]">Suggestions</div>

        {destinations.slice(0, 5).map((destination, i) => (
          <div
            role="button"
            key={i}
            className="text-sm font-light active:text-primary-dark text-primary active:opacity-50"
            onClick={() => onSearch(destination.city)}
          >
            {destination.city}, {destination.country}
          </div>
        ))}
      </div>
    </div>
  );
}
