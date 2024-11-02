import React from "react";
import { layouts } from "../../features/data";
import Link from "next/link";
const Layouts = () => {
  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h2 className="text-2xl font-bold">All layouts</h2>
      <div className="space-y-3 pt-4">
        {layouts.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4"
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <Link
                href={`layout-${item.id}/edit`}
                target="_blank"
                className="hover:underline text-blue-500"
              >
                Edit Layout
              </Link>
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-semibold text-gray-400">Pages</span>
              {item.pages.map((page) => (
                <Link
                  href={`${page.url}`}
                  target="_blank"
                  className="w-fit hover:underline"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layouts;
