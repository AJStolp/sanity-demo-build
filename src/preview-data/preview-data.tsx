import Link from "next/link";
import { usePreview } from "@/lib/sanity.preview";
import Toggle from "@/components/toggle";
import { SanityDocument } from "@sanity/client";
import Navbar from "@/components/navbar";

interface IPreviewData {
  query: string[];
}

type IPreviewResult = SanityDocument<Record<string, any>>[];

export default function PreviewData(props: IPreviewData) {
  const data: IPreviewResult[] = [];

  props.query.forEach((queryStr) => {
    data.push(usePreview(null, queryStr));
  });

  return (
    <>
      <Toggle data={data[1]} />
      <Navbar data={data[0]} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
