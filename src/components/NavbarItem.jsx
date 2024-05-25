"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  console.log(genre, param);
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "text-amber-600 underline decoration-4 underline-offset-8 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param} `}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
