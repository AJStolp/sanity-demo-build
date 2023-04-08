import NavBar from "@/components/navbar";
import { client } from "@/lib/sanity.client";
import type { SanityDocument } from "@sanity/client";
import { PreviewSuspense } from "next-sanity/preview";
import { queryNav, queryThemeToggle } from "@/query/quieries";
import { MouseEvent, lazy } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { useToggleTheme } from "@/hooks/check-and-set-theme";
import { MouseEventHandler } from "react";

interface IHome {
  navdata: SanityDocument[];
  toggledata: SanityDocument[];
  preview: Boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

// const PreviewNavBar = lazy(() => import("@/preview-data/preview-navbar"));
const PreviewData = lazy(() => import("@/preview-data/preview-data"));

export default function Home(props: IHome) {
  // const { setTheme } = useToggleTheme();

  return (
    <>
      {props.preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewData query={[queryNav, queryThemeToggle]} />
        </PreviewSuspense>
      ) : (
        <main className="">
          <span>
            <ThemeToggle />
            {/* <Toggle data={props.toggledata} /> */}
            <NavBar data={props.navdata} />
          </span>
        </main>
      )}
    </>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }
  const navdata = await client.fetch(queryNav);
  const toggledata = await client.fetch(queryThemeToggle);

  return { props: { preview, navdata, toggledata } };
};
