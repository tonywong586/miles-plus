import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "~/styles/variables.css";
import "~/styles/tailwind.css";

// For swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useRef, useState } from "react";
import { trpc } from "~/lib/trpcClient";
import { httpBatchLink } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { env } from "~/env";
import { HomePage, SettingsPage, DepositPage } from "~/pages";
import { SplashScreen } from "@capacitor/splash-screen";
import { SignInPage } from "./pages/SignInPage";
import { AppContext } from "./features/common/lib/AppContext.context";
import { SignUpPage } from "./pages/SignUpPage";
import { GreetingPage } from "./pages/GreetingPage";
import { TripPage } from "./pages/TripPage";
import { TripPlanner } from "./pages/TripPlannerPage";
import { ManageTripPage } from "./pages/ManageTripPage";
import { MissionPage } from "./pages/MissionPage";

setupIonicReact();

SplashScreen.show({
  showDuration: 2000,
  autoHide: true,
});

type TabData = {
  id: string;
  href: string;
  icon: string;
  label: string;
};

const App = () => {
  const [claimByDate, setClaimByDate] = useState(new Date());
  const routerOutletRef = useRef<HTMLElement | null>(null);
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: env.VITE_API_URL + "/trpc",
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: "",
            };
          },
        }),
      ],
    }),
  );

  const tabs: TabData[] = [
    { id: "home", href: "/home", icon: "images/home.svg", label: "Home" },
    { id: "trip", href: "/trip", icon: "images/trip-icon.svg", label: "Trip" },
    {
      id: "mission",
      href: "/mission",
      icon: "images/mission-icon.svg",
      label: "Mission",
    },
    {
      id: "deposit",
      href: "/deposit",
      icon: "images/deposit.svg",
      label: "Deposit",
    },
    {
      id: "settings",
      href: "/settings",
      icon: "images/settings.svg",
      label: "Settings",
    },
  ];

  return (
    <AppContext.Provider
      value={{
        routerOutletRef,
        claimByDate,
        setClaimByDate,
      }}
    >
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <IonApp>
            <IonReactRouter>
              <IonTabs>
                <IonRouterOutlet ref={routerOutletRef as any}>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home">
                    <HomePage />
                  </Route>
                  <Route exact path="/deposit">
                    <DepositPage />
                  </Route>
                  <Route path="/trip">
                    <TripPage />
                  </Route>
                  <Route exact path="/mission">
                    <MissionPage />
                  </Route>
                  <Route exact path="/trip-planner">
                    <TripPlanner />
                  </Route>
                  <Route exact path="/manage-trip">
                    <ManageTripPage />
                  </Route>
                  <Route exact path="/settings">
                    <SettingsPage />
                  </Route>
                  <Route exact path="/signIn">
                    <SignInPage />
                  </Route>
                  <Route exact path="/signUp">
                    <SignUpPage />
                  </Route>
                  <Route exact path="/greeting">
                    <GreetingPage />
                  </Route>
                </IonRouterOutlet>

                <IonTabBar
                  className="border-t [--background:#ffffff] [--color:#b2b2b2]"
                  slot="bottom"
                >
                  {tabs.map((tab) => (
                    <IonTabButton key={tab.id} tab={tab.id} href={tab.href}>
                      <IonIcon
                        size="small"
                        aria-hidden="true"
                        icon={tab.icon}
                      />
                      <IonLabel>{tab.label}</IonLabel>
                    </IonTabButton>
                  ))}
                </IonTabBar>
              </IonTabs>
            </IonReactRouter>
          </IonApp>
        </QueryClientProvider>
      </trpc.Provider>
    </AppContext.Provider>
  );
};

export default App;
