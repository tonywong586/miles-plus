import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.milesplus.hexus",
  appName: "MILES+",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
