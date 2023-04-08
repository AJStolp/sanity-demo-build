import { MouseEventHandler } from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: IButton) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
