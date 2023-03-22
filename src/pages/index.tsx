import Head from "next/head";
import NavBar from "@/components/navbar";
import { client } from "@/lib/sanity.client";
import type { SanityDocument } from "@sanity/client";
import { PreviewSuspense } from "next-sanity/preview";
import { queryNav } from "@/query/quieries";
import { queryThemeToggle } from "@/query/quieries";
import { lazy } from "react";
import Link from "next/link";
import Toggle from "@/components/toggle";

interface IHome {
  navdata: SanityDocument[];
  toggledata: SanityDocument[];
  preview: Boolean;
}

const PreviewNavBar = lazy(() => import("../components/preview-navbar"));

export default function Home(props: IHome) {
  return (
    <>
      <Head>
        <Link href={""}></Link>
      </Head>
      {props.preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewNavBar query={queryNav} />
        </PreviewSuspense>
      ) : (
        <main className="">
          <span>
            <Toggle data={props.toggledata} />
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
