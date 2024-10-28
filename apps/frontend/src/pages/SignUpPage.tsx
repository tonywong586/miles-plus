import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonButton,
} from "@ionic/react";
import { Input } from "~/features/common/components/Input";
import { AsiaMilesIcon, OutlineButton } from "~/features/common";
import { useForm } from "react-hook-form";

export const SignUpPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    shouldUseNativeValidation: true,
  });

  return (
    <IonPage>
      <IonContent>
        <div
          className="h-[200px] bg-[url('/images/home-header-bg.svg')] bg-cover bg-no-repeat px-4 
         pb-4 text-white pt-14-safe"
        >
          <IonGrid>
            <IonRow>
              <IonCol size="9">
                <div className="text-2xl font-bold">Welcome to Miles+</div>
                <div className="text-sm opacity-50">The best way to earn</div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="container my-12 flex w-full flex-col items-center gap-4">
            <div className="flex text-6xl text-primary">
              <AsiaMilesIcon />+
            </div>

            <div className="flex pt-6 text-2xl font-semibold ">Sign up</div>

            <Input
              required
              clearInput
              placeholder="Email"
              type="email"
              {...register("email")}
            />

            <Input
              required
              clearInput
              placeholder="Password"
              type="password"
              {...register("password")}
            />

            <div className=" flex w-full flex-col gap-2">
              <IonButton type="submit" className="w-full" color="primary">
                Sign Up
              </IonButton>

              <OutlineButton className="w-full" href="/signIn">
                Login
              </OutlineButton>
            </div>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};