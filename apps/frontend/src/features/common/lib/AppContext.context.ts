import { createContext, useContext } from "react";

export interface AppContextProps {
  routerOutletRef: React.RefObject<any> | null;
  claimByDate: Date;
  setClaimByDate: (date: Date) => void;
}

export const AppContext = createContext<AppContextProps>(undefined!);

//use the context in the component
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}
