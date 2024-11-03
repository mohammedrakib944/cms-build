"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export function Client({ data }: { data: Data }) {
  console.log("Page Data: ", data);
  return <Render config={config} data={data} />;
}
