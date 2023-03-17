import Link from "next/link";

interface ILinkItem {
  href: string;
  title: string;
}

export default function LinkItem(props: ILinkItem) {
  return (
    <>
      <Link href={props.href}>{props.title}</Link>
    </>
  );
}
