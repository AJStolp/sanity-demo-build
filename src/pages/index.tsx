import Head from "next/head";
import NavBar from "@/components/navbar";
import Toggle from "@/components/toggle";

import { IStrain } from "@/interfaces/IStrain";
import { INav } from "@/interfaces/INav";
import { IToggle } from "@/interfaces/IToggle";

import { fetchedStrains } from "@/static-props/fetched-strains";
import { fetchedNavigation } from "@/static-props/fetched-navigation";
import { fetchedThemeSwitch } from "@/static-props/fetched-theme-toggle";

import { PreviewSuspense } from "next-sanity/preview";
import { client } from "@/lib/sanity.client";
import type { SanityDocument } from "@sanity/client";
interface HomeProps {
  fetchedNavData: INav[];
  fetchedStrainData: IStrain[];
  fetchedThemeSwitchData: IToggle[];
}

export default function Home(props: HomeProps) {
  const { fetchedNavData, fetchedStrainData, fetchedThemeSwitchData } = props;

  return (
    <>
      <Head>
        <title>Anthony Stolp Sanity Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <span>
          <Toggle fetchedData={fetchedThemeSwitchData} />
          <NavBar fetchedData={fetchedNavData} />
        </span>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const fetchedStrainData = await fetchedStrains();
  const fetchedNavData = await fetchedNavigation();
  const fetchedThemeSwitchData = await fetchedThemeSwitch();

  return {
    props: { fetchedNavData, fetchedStrainData, fetchedThemeSwitchData },
  };
}
