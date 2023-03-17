// ./components/PreviewMovies.tsx

import Link from "next/link";
import { usePreview } from "@/lib/sanity.preview";
import Navbabr from "@/components/navbar";

export default function PreviewMovies({ query }: { query: string }) {
  const data = usePreview(null, query);

  return (
    <>
      <Navbabr fetchedData={[data]} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
