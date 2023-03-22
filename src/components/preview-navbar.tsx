import Link from "next/link";
import { usePreview } from "@/lib/sanity.preview";
import Navbabr from "@/components/navbar";
import Toggle from "./toggle";

interface IPreviewNavBar {
  query: string;
}

export default function PreviewNavBar(props: IPreviewNavBar) {
  const data = usePreview(null, props.query);

  return (
    <>
      <Toggle data={data} />
      <Navbabr data={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
