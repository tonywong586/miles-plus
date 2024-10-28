// import {
//   IonButton,
//   IonButtons,
//   IonCheckbox,
//   IonCol,
//   IonContent,
//   IonGrid,
//   IonIcon,
//   IonPage,
//   IonRow,
//   IonToolbar,
// } from "@ionic/react";
// import { chevronBack, reload } from "ionicons/icons";
// import { AsiaMilesIcon } from "~/features/common";
// import { ActivityList } from "~/features/common/components/ActivityList";
// import { StarRating } from "~/features/common/components/StartRating";
// import { trpc } from "~/lib/trpcClient";

// export function HotelPlannerPage() {
//   const tripActivities = trpc.ai.genTripActivities.useMutation();
//   const ActivityLists = [];
//   return (
//     <IonPage>
//       <IonContent fullscreen>
//         <div className="relative flex  h-[280px] flex-col bg-[url(/images/Tokyo.png)] bg-cover bg-center">
//           <div
//             className="-z-1 absolute bottom-0 w-full opacity-70"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 50%)",
//               height: "137px",
//             }}
//           />

//           <IonToolbar className="pt-8 [--background:transparent]">
//             <IonButtons slot="start">
//               <IonButton
//                 color="dark"
//                 routerLink="/manage-trip"
//                 routerDirection="back"
//               >
//                 <IonIcon icon={chevronBack} />
//               </IonButton>
//             </IonButtons>
//           </IonToolbar>

//           <div className="z-10 mt-auto w-full p-4 text-white">
//             <div className="flex justify-between">
//               <div className="p-0">
//                 <div className="font-bold">Tokyo, Japan</div>
//                 <div>1 Adults</div>
//                 <div>19 Nov 2023 - 26 Nov 2023</div>
//               </div>

//               <div>
//                 <IonButton
//                   color="light"
//                   fill="outline"
//                   onClick={async () => {
//                     const result = await tripActivities.mutateAsync({
//                       adults: 1,
//                       children: 2,
//                       travelDate: "2023-11-19",
//                       destination: "Tokyo, Japan",
//                     });

//                     console.log(result);
//                   }}
//                 >
//                   <IonIcon icon={reload} />
//                 </IonButton>
//               </div>
//             </div>

//             <div className="mt-2 flex w-full gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
//               {[
//                 "Cultural Immersion",
//                 "Exploration",
//                 "Photography",
//                 "Nature",
//               ].map((tag, index) => (
//                 <div
//                   key={index}
//                   className="flex w-fit items-center whitespace-nowrap rounded-xl bg-[#016564] p-1 px-1.5 py-1 text-xs font-medium text-white "
//                 >
//                   {tag}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* body */}
//         </div>

//         <div className="p-4 font-semibold">
//           <div className=" w-full pb-3">Activity</div>
//           <IonGrid className="p-0 pb-6">
//             <IonRow className="gap-2 ">
//               <IonCol className="flex flex-col gap-1 rounded-xl  border-[1px] px-4 py-3 text-sm font-medium">
//                 <div className="opacity-50 ">Check In</div>
//                 <div className=" text-primary">19 Nov 2023</div>
//               </IonCol>
//               <IonCol className="flex flex-col gap-1 rounded-xl border-[1px] px-4 py-3 text-sm font-medium">
//                 <div className="opacity-50 ">Check Out</div>
//                 <div className=" text-primary">26 Nov 2023</div>
//               </IonCol>
//             </IonRow>
//           </IonGrid>
//           <div className=" flex flex-col gap-2">
//             <ActivityList
//               title={""}
//               description={""}
//               price={0}
//               miles={0}
//               imageUrl={""}
//             />
//             <ActivityList
//               title={""}
//               description={""}
//               price={0}
//               miles={0}
//               imageUrl={""}
//             />
//             <ActivityList
//               title={""}
//               description={""}
//               price={0}
//               miles={0}
//               imageUrl={""}
//             />
//           </div>
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// }
