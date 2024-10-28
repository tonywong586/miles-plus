import { IonInput } from "@ionic/react";
interface InputProps {
  placeholder: string;
}
export const Input = ({ placeholder }: InputProps) => {
  return (
    <IonInput
      className="bg-[#f5f5f5] rounded-lg h-[46px]"
      placeholder={placeholder}
      style={{
        "--padding-start": "10px",
        "--padding-end": "10px",
        "--placeholder-color": "#AAAAAA",
      }}
    />
  );
};
