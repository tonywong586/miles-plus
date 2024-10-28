import { IonButton, IonIcon, IonInput } from "@ionic/react";
import React, { forwardRef } from "react";

interface InputProps extends React.ComponentProps<typeof IonInput> {
  showMaxButton?: boolean;
  onKeyPress?: (e: React.KeyboardEvent) => void;
}

export const Input = forwardRef<HTMLIonInputElement, InputProps>(
  ({ showMaxButton, onKeyPress, ...props }, ref) => {
    return (
      <div className="flex h-[46px] w-full items-center rounded-md bg-[#F5F5F5]">
        <IonInput
          className="flex-grow"
          style={{
            "--border-radius": "8px",
            "--background": "transparent",
            "--padding-start": "10px",
            "--padding-end": "10px",
            "--placeholder-color": "#000",
          }}
          ref={ref}
          onKeyPress={onKeyPress}
          {...props}
        />

        {showMaxButton && (
          <IonButton
            fill="clear"
            size="small"
            style={{ "--padding-start": "0", "--padding-end": "10px" }}
          >
            Max
          </IonButton>
        )}
      </div>
    );
  },
);
