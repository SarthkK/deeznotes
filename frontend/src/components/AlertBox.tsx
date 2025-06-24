import type React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
type Props = {
  title: string;
  description: string;
  icon?: React.ReactElement | null;
};

const AlertBox = ({ title, description, icon = null }: Props) => {
  return (
    <Alert>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertBox;
