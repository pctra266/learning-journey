import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = (prop: AlertProps) => {
  return <div className="alert alert-primary"> {prop.children}</div>;
};

export default Alert;
