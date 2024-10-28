import {
  IonContent,
  IonPage,
  IonButton,
  IonImg,
  IonToolbar,
} from "@ionic/react";

export const GreetingPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonToolbar color="transparent" />
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col p-4 ">
            <div>
              <div className=" h-[25px] w-[179px] pb-16">
                <IonImg
                  src="/images/cathay_pacific_logo.png"
                  alt="The Wisconsin State Capitol building in Madison, WI at night"
                />
              </div>
              <div className="flex items-center justify-center w-full ">
                <div className="h-[440px] w-[340px] rounded-[115px] border-[16px] bg-[url('/images/sky.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="bottom-40 flex w-full items-center justify-center pt-8 text-[32px] font-bold">
                Welcome to Miles+
              </div>
              <div className="flex items-center justify-center w-full text-lg text-center opacity-50 bottom-40">
                Empower Every Mile: Engage Grow <br /> Enjoy!
              </div>
            </div>
          </div>
          <div>
            <IonButton className="w-full p-5" color="primary">
              Continue
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
