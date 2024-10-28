import { AsiaMilesIcon } from "./Icons";
import { FormatNumber } from "./FormatNumber";

export const TripCard = ({
  tags,
  title,
  url,
  miles,
}: {
  tags: string[];
  title: string;
  url: string;
  miles: number;
}) => {
  return (
    <div>
      <div
        className="relative h-[153px] w-[261px] rounded-xl bg-cover active:opacity-80"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="absolute right-0 top-0 flex h-[23px] w-[80px] items-center justify-center rounded-bl-xl rounded-tr-xl bg-[#EFA940] text-xs font-bold text-white ">
          Best Deal
        </div>
        <div
          className=" absolute bottom-0 w-full rounded-b-[12px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
            height: "57px",
          }}
        ></div>
        <div className="absolute bottom-0 flex flex-col w-full p-4">
          <div className="flex  flex-row justify-between pb-1.5 ">
            <div className="flex-row font-bold text-white truncate">
              {title}
            </div>
            <div className=" flex flex-row items-center gap-1 text-[15px] text-white">
              <AsiaMilesIcon />
              <div className="font-bold ">
                <FormatNumber value={miles} />
              </div>
              UP
            </div>
          </div>
          <div className="flex flex-row gap-1">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center rounded-xl bg-[#016564] p-1 px-1.5 py-1 text-xs font-medium text-white "
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
