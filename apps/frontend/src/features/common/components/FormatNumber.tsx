import { NumericFormat } from "react-number-format";

interface FormatNumberProps {
  value: number;
}

export function FormatNumber({ value }: FormatNumberProps) {
  return (
    <NumericFormat
      value={value}
      displayType="text"
      thousandSeparator={true}
      prefix=" "
      suffix=" "
    />
  );
}
