import { ILinkItem } from "@/interfaces/ILinkItem";
import Link from "next/link";

export default function LinkItem(props: ILinkItem) {
  return (
    <>
      <Link href={props.href}>{props.title}</Link>
    </>
  );
}
