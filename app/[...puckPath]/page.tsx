import { Client } from "./client";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { getData } from "../../helper/returnData";
import { generateDynamicLayout } from "../../helper/dynamicLayout";
import { getLayoutByPageUrl } from "../../helper/layoutData";

export async function generateMetadata({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}): Promise<Metadata> {
  const path = `/${puckPath.join("/")}`;

  return {
    title: getPage(path)?.root.props?.title,
  };
}

export default async function Page({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] };
}) {
  const path = `/${puckPath.join("/")}`;

  let layoutName = getLayoutByPageUrl(path); // Get layout name
  layoutName = "/" + layoutName;
  const layout = getPage(layoutName); // Get layout
  const apiData = getData(path); // This data should from API

  const data = generateDynamicLayout(layout, apiData);

  console.log("Data: ", layout, apiData);

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}

export const dynamic = "force-static";
