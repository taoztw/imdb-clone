"use client";
import Loading from "@/app/loading";
import NavbarItem from "./NavbarItem";
import { Suspense } from "react";

function Navbar() {
  return (
    <div className="flex gap-8 justify-center bg-amber-100 dark:bg-gray-600 dark:text-gray-200 p-4 lg:text-lg">
      <Suspense fallback={<Loading />}>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}

export default Navbar;
